// Importamos el CSS de bootstrap:
import "bootstrap/dist/css/bootstrap.min.css";
// Importamos los componentes de bootstrap:
import { Col, Row, Container } from "react-bootstrap";

const textExample = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
const rowStyle = {margin:"10px"}
const Page1 = () => {
  return (
    <Container style={{maxWidth:"10000px"}}>
      <h1>¡Con que poco armamos un grid!</h1>
      <Row style={rowStyle}>
        <Col style={{margin:"10px", background: "#ff000081", border:"4px solid #ff0000"}}>{textExample}</Col>
        <Col style={{margin:"10px", background: "#22ff0051", border:"4px solid #22ff00"}}>{textExample}</Col>
      </Row>
      <Row>
        <Col style={{margin:"10px",  background: "#fff70051", border:"4px solid #fff700"}}>{textExample}</Col>
        <Col style={{margin:"10px",  background: "#00ffe151", border:"4px solid #00ffe1"}}>{textExample}</Col>
        <Col style={{margin:"10px", background: "#ea00ff51", border:"4px solid #ea00ff"}}>{textExample}</Col>
      </Row>
      <Row>
        <Col style={{margin:"10px", background: "#44ff0051", border:"4px solid #44ff00"}}>{textExample}</Col>
        <Col style={{margin:"10px", background: "#ff950051", border:"4px solid #ff9500"}}>{textExample}</Col>
      </Row>
    </Container>
  );
};

export default Page1;
