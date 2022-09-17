import guitar from "../assets/img/guitar.png"
import bass from "../assets/img/bass.png"
import drums from "../assets/img/drums.png"
import vocals from "../assets/img/vocals.png"
// Importamos el CSS de bootstrap:
import "bootstrap/dist/css/bootstrap.min.css";
// Importamos los componentes de bootstrap:
import Form from "react-bootstrap/Form";
import { Col, Row, Container, ProgressBar } from "react-bootstrap";
import styles from "./page2.module.css"
import { useState } from "react";

const Page2 = () => {
  // Ejemplo integrador

  // Establecemos los estados de los faders
  const defaultLevel = 30
  const [vol1, setVol1] = useState(defaultLevel);
  const [vol2, setVol2] = useState(defaultLevel);
  const [vol3, setVol3] = useState(defaultLevel);
  const [vol4, setVol4] = useState(defaultLevel);

  return (
    <Container className={styles.container}>
      <Row className={styles.rows}>
        <h1>Ejemplo integrador:</h1>
      </Row>

      {/* Descripción del canal */}
      <Row className={styles.rows}>
        <Col>
          <img src={guitar} width="50" ></img>
          <Form.Label>Guitar</Form.Label>
        </Col>
        <Col>
          <img src={bass} width="50" ></img>
          <Form.Label>Bass</Form.Label>
        </Col>
        <Col>
          <img src={drums} width="50" ></img>
          <Form.Label>Drums</Form.Label>
        </Col>
        <Col>
          <img src={vocals} width="50" ></img>
          <Form.Label>Vocals</Form.Label>
        </Col>
      </Row>
      
      {/* Controles de nivel (faders) */}
      <Row className={[styles.slidersRow, styles.rows].join(" ")}>
        <Col className={styles.columnStyle}>
          <Form.Range className={styles.faderStyle} value={vol1} onChange={(e)=>setVol1(e.target.value)} />
        </Col>
        <Col className={styles.columnStyle}>
          <Form.Range className={styles.faderStyle} value={vol2} onChange={(e)=>setVol2(e.target.value)} />
        </Col>
        <Col className={styles.columnStyle}>
          <Form.Range className={styles.faderStyle} value={vol3} onChange={(e)=>setVol3(e.target.value)} />
        </Col>
        <Col className={styles.columnStyle}>
          <Form.Range className={styles.faderStyle} value={vol4} onChange={(e)=>setVol4(e.target.value)} />
        </Col>
      </Row>
      
      {/* Valor de nivel de cada canal */}
      <Row className={styles.rows}>
        <Col className={[styles.columnStyle, styles.level].join(" ")}><div >{vol1}</div></Col>
        <Col className={[styles.columnStyle, styles.level].join(" ")}><div >{vol2}</div></Col>
        <Col className={[styles.columnStyle, styles.level].join(" ")}><div >{vol3}</div></Col>
        <Col className={[styles.columnStyle, styles.level].join(" ")}><div >{vol4}</div></Col>
      </Row>
    </Container>
  );
};

export default Page2;
