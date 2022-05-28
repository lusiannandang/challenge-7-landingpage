import { Container, Card, Row, Col } from "react-bootstrap";
import styles from "./CariMobil.module.css";
import Link from "next/link";
import { dataAction } from "../../config/redux/action/dataAction.js";
import { useDispatch } from "react-redux";

function Cari() {
  const dispatch = useDispatch();

  dispatch(dataAction());

  return (
    <Container>
      <Card className={styles.body}>
        <Card.Body>
          <Row>
            <Col>
              <p>Tipe Driver</p>
              <select className={styles.input}>
                <option>Pilih Tipe Driver</option>
                <option value="1">Dengan Sopir</option>
                <option value="2">Tanpa Sopir (Lepas Kunci)</option>
              </select>
            </Col>
            <Col>
              <p>Tanggal</p>
              <input className={styles.input} type="date" name="" id="" />
            </Col>
            <Col>
              <p>Waktu Jemput/Ambil</p>
              <input className={styles.input} type="time" placeholder="Pilih Waktu" />
            </Col>
            <Col>
              <p>Jumlah Penumpang</p>
              <input className={styles.input} type="number" placeholder="Jumlah Penumpang" />
            </Col>
            <Col className="m-auto">
              <Link href="/listcar">
                <button className={styles.btn}>Cari Mobil</button>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Cari;
