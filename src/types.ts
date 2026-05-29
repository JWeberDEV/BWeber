export enum ActiveTab {
  Home = "home",
  Servicos = "servicos",
  Sobre = "sobre",
  Contato = "contato",
}

export interface ContactLead {
  id: string;
  fullName: string;
  whatsapp: string;
  message: string;
  serviceInterest?: string;
  submittedAt: string;
  status: "Pending" | "Reviewed" | "Contacted";
}

export interface ServiceItem {
  id: string;
  title: string;  
  description: string;
  image: string;
  alt: string;
  points: string[];
}
