import predio from "../assets/img/predio.jpg";
import phones from "../assets/img/phones.png";
import paraguay from "../assets/img/paraguay.png";
import {
  Container,
  Row,
  Col,
  Badge,
  List,
} from "reactstrap";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export default function Services() {
  return (
    <>
      <section>
        <Container fluid>
          <Row className="d-flex flex-column gap-3 mt-7 mb-7 ms-5">
            <Col>
              <p className="text-primary ps-1" style={{ fontSize: "1rem" }}>
                <strong>EXCLUSIVIDADE & PERFORMANCE</strong>
              </p>
              <h1
                className="text-white"
                style={{ fontSize: "6rem", fontWeight: "bold" }}
              >
                Nossas Soluções Digitais <br /> Sob Medida.
              </h1>
            </Col>
            <p className="text-secondary" style={{ fontSize: "1.5rem" }}>
              Elevamos o padrão do mercado imobiliário paraguaio através de
              tecnologia de <br /> ponta, design editorial e estratégias de
              conversão de alto impacto.
            </p>
          </Row>
        </Container>
      </section>
      <section>
        <Container className="bg-dark-bw shadow-light-sm rounded-3">
          <Row className="d-flex justify-content-center">
            <Col xs={6} lg={6} md={12} className="d-flex align-items-center">
              <img
                src={predio}
                alt="Profissionais BWeber"
                className="img-fluid p-4"
              />
            </Col>
            <Col
              xs={6}
              lg={6}
              md={12}
              className="bg-black  py-5 px-5 rounded-3"
            >
              <Badge className="bg-secondary-bw mb-4">
                Ideal para imobiliária
              </Badge>
              <h1 className="text-primary  mb-4" style={{ fontSize: "5rem" }}>
                Ecossistema de Conversão Imobiliária
              </h1>
              <p className="text-white">
                Não entregamos apenas um site, mas uma ferramenta de vendas
                sofisticada. Desenvolvemos Landing Pages exclusivas para
                lançamentos de alto padrão, integradas com CRMs e otimizadas
                para carregamento instantâneo, garantindo que nenhum lead seja
                perdido no processo.
              </p>
              <List
                className="text-white"
                type="unstyled"
                style={{ fontSize: "1.3rem" }}
              >
                <li>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />
                  SEO local otimizado para o Paraguai
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />
                  Design mobile-first de alto impacto
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />
                  Integração nativa com Bitrix24 e RD Station
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />
                  Hospedagem ultra-rápida em CDN global
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />
                  Gestão de leads em tempo real via Dashboard
                </li>
              </List>
              <button className="btn btn-primary ms-2 mt-2">
                Quero esse serviço
              </button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-7 mb-7">
        <Container className="bg-dark-bw shadow-light-sm rounded-3">
          <Row className="d-flex justify-content-center">
            <Col
              xs={6}
              lg={6}
              md={12}
              className="bg-black  py-5 px-5 rounded-3"
            >
              <Badge className="bg-secondary-bw mb-4">
                Ideal para corretor autônomo
              </Badge>
              <h1 className="text-primary  mb-4" style={{ fontSize: "5rem" }}>
                Branding Digital & Posicionamento
              </h1>
              <p className="text-white">
                Transformamos sua marca pessoal em uma autoridade inquestionável
                no mercado de luxo. Criamos toda a identidade visual digital,
                cartões de visita interativos e estratégias de presença social
                que atraem investidores qualificados e clientes institucionais.
              </p>
              <List
                className="text-white"
                type="unstyled"
                style={{ fontSize: "1.3rem" }}
              >
                <li>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />
                  Logotipo e manual de marca premium
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />
                  Templates personalizados para Instagram & LinkedIn
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />
                  Cartão de visita digital com tecnologia NFC
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />
                  Bio-link personalizada e profissional
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />
                  Consultoria de tom de voz e imagem
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />
                  Estratégia de conteúdo para autoridade
                </li>
              </List>
              <button className="btn btn-primary ms-2 mt-2">
                Quero esse serviço
              </button>
            </Col>
            <Col xs={6} lg={6} md={12} className="d-flex align-items-center">
              <img
                src={phones}
                alt="Profissionais BWeber"
                className="img-fluid p-4"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="mt-7 mb-7">
        <Container className="bg-dark-bw shadow-light-sm rounded-3">
          <Row className="d-flex justify-content-center">
            <Col
              xs={6}
              lg={6}
              md={12}
              className="bg-black  py-5 px-5 rounded-3"
            >
              <Badge className="bg-secondary-bw mb-4">
                Ideal para imobiliária
              </Badge>
              <h1 className="text-primary  mb-4" style={{ fontSize: "5rem" }}>
                Automação & Tráfego de Performance
              </h1>
              <p className="text-white">
                Implementamos o motor de crescimento do seu negócio. Através de campanhas segmentadas de Meta Ads e Google Ads, conectamos seus imóveis ao público certo, enquanto nossas automações garantem uma primeira resposta em menos de 5 minutos.
              </p>
              <List
                className="text-white"
                type="unstyled"
                style={{ fontSize: "1.3rem" }}
              >
                <li>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />
                  Gestão profissional de Meta Ads e Google Ads
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />
                  Remarketing agressivo para visitantes
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />
                  Chatbots inteligentes de pré-qualificação
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />
                  Rastreamento de conversão avançado (API)
                </li>
                <li>
                  <IoMdCheckmarkCircleOutline className="text-primary me-1" />
                  Relatórios mensais de ROI e performance
                </li>
              </List>
              <button className="btn btn-primary ms-2 mt-2">
                Quero esse serviço
              </button>
            </Col>
            <Col xs={6} lg={6} md={12} className="d-flex align-items-center">
              <img
                src={paraguay}
                alt="Profissionais BWeber"
                className="img-fluid p-4"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
