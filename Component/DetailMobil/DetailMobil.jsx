import { Container, Card, Row, Col } from "react-bootstrap";
import styles from "./DetailMobil.module.css";
import { People, Gear, Calendar } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Link from "next/Link";

function Detail() {
  const { idCar } = useParams();

  const { data } = useSelector((globalStore) => globalStore.dataReducer);

  const carDataId = data.find((a) => a.id.toString() === idCar);

  return (
    <>
      <Container style={{ margin: "auto", marginTop: "50px" }}>
        <Row className={styles.body}>
          <Col>
            <Card className={styles.cardBody}>
              <div className={styles.content}>
                <h1 className={styles.h1}>Tentang Paket</h1>
                <div>
                  <p className={styles.p}>Include</p>
                  <ul className={styles.list}>
                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                    <li>Sudah termasuk bensin selama 12 jam</li>
                    <li>Sudah termasuk Tiket Wisata</li>
                    <li>Sudah termasuk pajak</li>
                  </ul>
                  <p className={styles.p}>Exclude</p>
                  <ul className={styles.list}>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                  <h2 className={styles.h1}>Refund, Reschedule, Overtime</h2>
                  <ul className={styles.list}>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                    <li>Tidak termasuk akomodasi penginapan</li>
                  </ul>
                </div>
              </div>
            </Card>
            <Link href="/invoice">
              <button className={styles.btn} style={{ marginLeft: "100px" }}>
                Cari mobil
              </button>
            </Link>
          </Col>
          <Col>
            <Card className={styles.carCard}>
              <div className={styles.content}>
                <img className={styles.img} src={carDataId?.image} alt="car" />
                <div style={{ marginTop: "52px" }}>
                  <h4 className={styles.h1}>{carDataId?.name}</h4>
                  <ul className={styles.ul}>
                    <li className={styles.li}>
                      <p className={styles.p2}>
                        <People color="#8A8A8A" size={20} /> {carDataId?.penumpang}
                      </p>
                    </li>
                    <li className={styles.li}>
                      <p className={styles.p2}>
                        <Gear color="#8A8A8A" size={20} /> {carDataId?.transmisi}
                      </p>
                    </li>
                    <li className={styles.li}>
                      <p className={styles.p2}>
                        <Calendar color="#8A8A8A" size={20} /> {carDataId?.tahun}
                      </p>
                    </li>
                  </ul>
                  <Row>
                    <Col>Total</Col>
                    <Col className={styles.h1} style={{ marginLeft: "120px" }}>
                      Rp. {carDataId?.price}
                    </Col>
                  </Row>
                  <Link href="/invoice">
                    <button className={styles.btn} style={{ width: "100%" }}>
                      Cari mobil
                    </button>
                  </Link>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Detail;
