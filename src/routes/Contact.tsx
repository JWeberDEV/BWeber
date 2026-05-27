import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
  List,
} from "reactstrap";

export default function Contact() {
  return (
    <>
      <section className="bg-tertiary-bw">
        <Container fluid>
          <Row className="d-flex text-center gap-3 mb-7 ms-5">
            <Col>
              <h1
                className="text-white"
                style={{ fontSize: "6rem", fontWeight: "bold" }}
              >
                Vamos digitalizar sua imobiliária?
              </h1>
              <p className="text-secondary" style={{ fontSize: "1.5rem" }}>
                Estamos prontos para elevar o padrão tecnológico do seu <br />{" "}
                negócio no Paraguai. Escolha o canal de sua preferência.
              </p>
              <Card
                className="my-3 border rounded-3 shadow-sm"
                style={{
                  backgroundColor: "rgba(20, 20, 20, 0.4)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderColor: "rgba(255, 255, 255, 0.08)",
                }}
              >
                <CardBody className="p-4">
                  <div
                    className="d-flex align-items-center gap-2 mb-3"
                    style={{
                      color: "#F0C940",
                      fontSize: "0.85rem",
                      fontWeight: "bold",
                      letterSpacing: "1px",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem" }}>💬</span>
                    <span>RESPOSTA EM ATÉ 1H</span>
                  </div>
                  <CardTitle
                    tag="h2"
                    className="text-white text-start mb-4"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "2.5rem",
                      fontWeight: "400",
                      lineHeight: "1.2",
                    }}
                  >
                    Fale direto com um especialista
                  </CardTitle>
                  <button
                    className="btn d-inline-flex align-items-center gap-2 px-4 py-3 text-white font-weight-bold"
                    style={{
                      backgroundColor: "#00E676", // Verde idêntico ao da imagem
                      border: "none",
                      borderRadius: "12px",
                      fontSize: "0.9rem",
                      fontWeight: "700",
                      letterSpacing: "0.5px",
                    }}
                  >
                    <span>💬</span> INICIAR CONVERSA AGORA
                  </button>
                </CardBody>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </section>
      <section className="row gy-4 mt-1 justify-content-center">
        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.9346164139517!2d-57.506143216781936!3d-25.288175500909198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daf004770e0ef%3A0x938dd12b1c60a899!2sDepto%20NMD!5e0!3m2!1spt-BR!2spy!4v1779726988631!5m2!1spt-BR!2spy"
            // frameborder="0"
            style={{ border: "0", width: "100%", height: "400px" }}
            // allowfullscreen=""
            loading="lazy"
            // referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
