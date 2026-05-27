import profissionais from "../assets/img/profissionais.png";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  CardText,
} from "reactstrap";
import { FaCodeBranch } from "react-icons/fa";
import { BsChatLeftText } from "react-icons/bs";
import { FaTable } from "react-icons/fa6";

export default function Home() {
  return (
    <>
    <section className="d-flex align-items-center">
        <Container fluid>
          <Row className="d-flex flex-column gap-3 mt-7 mb-7 ms-5">
            <Col>
              <h1
                className="text-primary"
                style={{ fontSize: "6rem", fontWeight: "bold" }}
              >
                Digitalizamos imobiliárias <br /> para o boom paraguaio.
              </h1>
            </Col>
            <Col>
              <button className="btn btn-primary">Falar no Whatsapp</button>
              <button className="btn btn-outline-light ms-2">
                Conhecer serviços
              </button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-secondary-bw">
        <Container fluid>
          <Row className="d-flex justify-content-center gap-3 pt-7 pb-7 mt-7 mb-7 ms-5">
            <Col md={3}>
              <Card className="bg-secondary-dark-bw">
                <CardBody>
                  <CardTitle className="ps-4 pt-4 text-primary" tag="h1">
                    4,2%
                  </CardTitle>
                  <CardText className="p-4 pt-2 text-white">
                    Paraguai cresce 4,2% ao ano, liderando a expansão econômica
                    regional.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="bg-secondary-dark-bw">
                <CardBody>
                  <CardTitle className="ps-4 pt-4 text-primary" tag="h1">
                    USD 100M+
                  </CardTitle>
                  <CardText className="p-4 pt-2 text-white">
                    Luque movimenta USD 100M+ em imobiliário, tornando-se o novo
                    polo de luxo.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="bg-secondary-dark-bw">
                <CardBody>
                  <CardTitle className="ps-4 pt-4 text-primary" tag="h1">
                    Moody's
                  </CardTitle>
                  <CardText className="p-4 pt-2 text-white">
                    Investment Grade Moody's 2024 eleva o país a um novo patamar
                    de segurança.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container fluid>
          <Row className="d-flex gap-3 mt-7 mb-7 ms-5">
            <h2
              className="text-white text-center mb-7"
              style={{ fontSize: "4rem" }}
            >
              Soluções de Engenharia Digital
            </h2>
            <Col className="d-flex flex-column align-items-center">
              <div className="border border-primary p-3 ">
                <FaTable
                  style={{ fontSize: "2rem" }}
                  className="text-primary"
                />
              </div>
              <h3 className="text-white text-center mb-4 mt-7">
                Sites Profissionais
              </h3>
              <p className="text-secondary" style={{ fontSize: "1.5rem" }}>
                Plataformas de alta performance desenhadas para o mercado de
                luxo paraguaio.
              </p>
            </Col>
            <Col className="d-flex flex-column align-items-center">
              <div className="border border-primary p-3 ">
                <BsChatLeftText
                  style={{ fontSize: "2rem" }}
                  className="text-primary"
                />
              </div>
              <h3 className="text-white text-center mb-4 mt-7">
                Automação de WhatsApp
              </h3>
              <p className="text-secondary" style={{ fontSize: "1.5rem" }}>
                Triagem inteligente e atendimento 24/7 para não perder nenhum
                lead qualificado.
              </p>
            </Col>
            <Col className="d-flex flex-column align-items-center">
              <div className="border border-primary p-3 ">
                <FaCodeBranch
                  style={{ fontSize: "2rem" }}
                  className="text-primary"
                />
              </div>
              <h3 className="text-white text-center mb-4 mt-7">
                Sistemas de Gestão
              </h3>
              <p className="text-secondary" style={{ fontSize: "1.5rem" }}>
                Integração total do seu inventário com ferramentas de CRM e
                análise de dados.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-dark-bw">
        <Container>
          <Row className="d-flex justify-content-center align-items-center mt-7">
            <Col xs={6} lg={6} md={12}>
              <img
                src={profissionais}
                alt="Profissionais BWeber"
                className="img-fluid p-7"
              />
            </Col>
            <Col xs={6} lg={6} md={12}>
              <p
                className="text-primary text-center"
                style={{ fontSize: "1rem" }}
              >
                <strong>A mente por traz da BWeber</strong>
              </p>
              <h2 className="text-white text-center mb-4">Josias & Gissely</h2>
              <p className="text-secondary" style={{ fontSize: "1.5rem" }}>
                Combinamos anos de experiência em tecnologia e mercado
                imobiliário para oferecer a consultoria digital mais exclusiva
                do Paraguai. Entendemos que o prestígio exige precisão técnica e
                estética impecável.
              </p>
              <button className="btn btn-outline-primary ms-2 mt-2">
                Saber mais sobre nós
              </button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container fluid>
          <Row className="d-flex justify-content-center align-items-center mt-7 mb-7">
            <Col xs={12} lg={12} md={12} className="text-center">
              <h1 className="text-white mb-4" style={{ fontSize: "5rem" }}>
                O Paraguai não vai esperar você se digitalizar.
              </h1>
              <button className="btn btn-primary py-3">
                Falar no Whatsapp Agora
              </button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
