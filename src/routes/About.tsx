import sundown from "../assets/img/sundown.png";
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
import { MdOutlineDiamond } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { GiCrystalShine } from "react-icons/gi";

export default function About() {
  return (
    <>
      <section className="ceo d-flex align-items-center">
        <Container fluid>
          <Row className="d-flex flex-column align-items-center ms-5">
            <Col>
              <p className="text-primary ps-1" style={{ fontSize: "1rem" }}>
                <strong>HISTÓRIA & VISÃO</strong>
              </p>
              <h1
                className="text-white"
                style={{ fontSize: "6rem", fontWeight: "bold" }}
              >
                A ponte entre o prestígio e a inovação
              </h1>
              <p className="text-secondary" style={{ fontSize: "1.5rem" }}>
                Nascemos da percepção de um mercado rico em tradição, mas <br />
                latente em transformação digital. Conheça o propósito por trás
                da <br /> BWeber.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg-tertiary-bw">
        <Container fluid>
          <Row className="d-flex pt-4 pb-4">
            <Col xs={6} lg={6} md={12}>
              <h3 className="text-white text-center mb-4 mt-7">
                De um olhar externo à revolução local
              </h3>
            </Col>
            <Col xs={6} lg={6} md={12}>
              <Card className="my-2 border border-secondary rounded-0 shadow-light-sm">
                <CardBody className="bg-black">
                  <CardText className="p-4 pt-2 text-white">
                    Ao chegarmos ao Paraguai, fomos cativados pela força do
                    setor imobiliário local. No entanto, algo nos chamou a
                    atenção: o contraste entre o altíssimo padrão das
                    construções e os processos de venda ainda majoritariamente
                    analógicos.
                  </CardText>
                  <CardText className="p-4 pt-2 text-white">
                    Percebemos que as imobiliárias e incorporadoras mais
                    prestigiadas do país careciam de uma presença digital à
                    altura de seus portfólios. Foi ali que vimos nossa missão:
                    digitalizar a excelência sem perder a essência do luxo.
                  </CardText>
                </CardBody>
              </Card>

              <Row>
                <Col xs={6} lg={6} md={12}>
                  <Card
                    className="my-2 border-warning border-secondary rounded-0"
                    style={{ borderWidth: "0 0 0 5px" }}
                  >
                    <CardBody className="p-4 pt-4 bg-black">
                      <CardTitle className="text-white text-start">
                        Visão
                      </CardTitle>
                      <CardText
                        className="text-white"
                        style={{ fontSize: "1rem" }}
                      >
                        Conectar propriedades extraordinárias a compradores
                        globais através de tecnologia sob medida.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
                <Col xs={6} lg={6} md={12}>
                  <Card
                    className="my-2 border-warning border-secondary rounded-0"
                    style={{ borderWidth: "0 0 0 5px" }}
                  >
                    <CardBody className="p-4 pt-4 bg-black">
                      <CardTitle className="text-white text-start">
                        Missão
                      </CardTitle>
                      <CardText
                        className=" text-white"
                        style={{ fontSize: "1rem" }}
                      >
                        Ser o padrão ouro em transformação digital para o
                        mercado de alto luxo no Paraguai.
                      </CardText>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container fluid className="bg-dark-bw">
          <Row className=" ms-5 pt-5 pb-5">
            <Col xs={6} lg={6} md={12}>
              <img
                src={sundown}
                alt="Profissionais BWeber"
                className="img-fluid border border-warning border-5"
                width={700}
              />
            </Col>
            <Col xs={6} lg={6} md={12}>
              <p className="text-primary ps-1" style={{ fontSize: "1rem" }}>
                <strong>NOSSA SEDE</strong>
              </p>
              <h1
                className="text-white"
                style={{ fontSize: "6rem", fontWeight: "bold" }}
              >
                Por que Luque? A vanguarda de um novo tempo
              </h1>
              <p className="text-secondary" style={{ fontSize: "1.5rem" }}>
                Escolhemos Luque não apenas por sua localização estratégica{" "}
                <br />
                próxima à capital, mas por sua identidade como o epicentro da{" "}
                <br />
                expansão moderna paraguaia
              </p>
              <List
                className="text-white"
                type="unstyled"
                style={{ fontSize: "1.3rem" }}
              >
                <li>
                  <MdOutlineDiamond className="text-primary me-1" />
                  <strong>Crescimento Exponencial:</strong> Onde o novo dinheiro
                  e a arquitetura moderna se encontram.
                </li>
                <li>
                  <MdConnectWithoutContact className="text-primary me-1" />
                  <strong>Conectividade:</strong> O elo vital entre negócios
                  internacionais e o coração do Paraguai.
                </li>
                <li>
                  <GiCrystalShine className="text-primary me-1" />
                  <strong>Espírito Inovador:</strong> Uma cidade que respira o
                  futuro sem esquecer sua herança. <br />
                </li>
              </List>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container fluid>
          <Row className="d-flex justify-content-center align-items-center mt-7 mb-7">
            <Row className="d-flex flex-column text-center gap-3 mt-7 mb-7 ms-5">
              <Col>
                <h1
                  className="text-white"
                  style={{ fontSize: "6rem", fontWeight: "bold" }}
                >
                  Pronto para digitalizar seu legado?
                </h1>
              </Col>
              <Col>
                <button className="btn btn-primary py-3 px-4">Vamos conversar?</button>
                <button className="btn btn-outline-light ms-3 py-3 px-4">
                  VER SERVIÇOS
                </button>
              </Col>
            </Row>
          </Row>
        </Container>
      </section>
    </>
  );
}
