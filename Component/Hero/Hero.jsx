import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Hero.module.css";
import CariMobil from "../CariMobil/CariMobil";

function hero() {
  return (
    <>
      <section className={styles.body}>
        <Container>
          <Row style={{ width: "1440px", marginLeft: "-100px" }}>
            <Col className={styles.textContainer}>
              <h1 className={styles.textHead}>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
              <p className={styles.textParagraph}>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            </Col>
            <Col>
              <img className={styles.img} src="/img_car.png" alt="car" width="704px" height="408px" />
            </Col>
          </Row>
        </Container>
        <CariMobil />
      </section>
    </>
  );
}

export default hero;
