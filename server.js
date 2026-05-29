import "dotenv/config";
import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { Resend } from "resend";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// Escapes user-provided text before embedding it into the HTML email body.
function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

app.post("/api/contact", async (req, res) => {
  const { fullName, whatsapp, message, serviceInterest } = req.body || {};

  if (!fullName || !whatsapp) {
    return res
      .status(400)
      .json({ error: "Nome e WhatsApp são obrigatórios." });
  }

  if (!resend) {
    console.error("RESEND_API_KEY não configurada.");
    return res
      .status(500)
      .json({ error: "Serviço de e-mail não configurado no servidor." });
  }

  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!to || !from) {
    console.error("CONTACT_TO_EMAIL ou CONTACT_FROM_EMAIL não configurados.");
    return res
      .status(500)
      .json({ error: "Destinatário de e-mail não configurado no servidor." });
  }

  const html = `
    <div style="font-family: Arial, sans-serif; color: #111; line-height: 1.6;">
      <h2 style="color:#0A1F44;">Novo lead pelo site BWeber</h2>
      <p><strong>Nome:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>WhatsApp:</strong> ${escapeHtml(whatsapp)}</p>
      <p><strong>Serviço de interesse:</strong> ${escapeHtml(
        serviceInterest || "Não informado",
      )}</p>
      <p><strong>Mensagem:</strong></p>
      <p style="white-space: pre-line; background:#f5f5f5; padding:12px; border-radius:8px;">${escapeHtml(
        message || "(sem mensagem)",
      )}</p>
    </div>
  `;

  try {
    const { data, error } = await resend.emails.send({
      from,
      to,
      subject: `Novo lead BWeber: ${fullName}`,
      html,
    });

    if (error) {
      console.error("Erro do Resend:", error);
      return res.status(502).json({ error: "Falha ao enviar o e-mail." });
    }

    return res.status(200).json({ id: data?.id ?? null });
  } catch (err) {
    console.error("Erro inesperado ao enviar e-mail:", err);
    return res
      .status(500)
      .json({ error: "Erro interno ao enviar o e-mail." });
  }
});

// In production, serve the built frontend from dist/.
const distPath = path.join(__dirname, "dist");
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get("*", (_req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`BWeber API/server rodando em http://localhost:${PORT}`);
});
