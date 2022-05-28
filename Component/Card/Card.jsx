import { Container, Card, Row } from "react-bootstrap";
import styles from "./Card.module.css";
import { People, Gear, Calendar } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import Link from "next/link";

const ListCar = () => {
  const { data } = useSelector((globalStore) => globalStore.dataReducer);
  return (
    <>
      <Container className={styles.body}>
        <Row className="justify-content-center">
          {data.map((data) => (
            <Card key={data.id} className={styles.cardBody}>
              <div className={styles.content}>
                <img className={styles.img} src={data.image} alt="car image" />
                <div>
                  <h4 className={styles.h4}>{data.name}</h4>
                  <h1 className={styles.h1}>Rp {data.price} / Hari</h1>
                  <div className={styles.p}>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing</p>
                    <p>
                      <People color="#8A8A8A" size={20} style={{ marginRight: "13px" }} /> {data.penumpang}
                    </p>
                    <p>
                      <Gear color="#8A8A8A" size={20} style={{ marginRight: "13px" }} />
                      {data.transmisi}
                    </p>
                    <p>
                      <Calendar color="#8A8A8A" size={20} style={{ marginRight: "13px" }} />
                      {data.tahun}
                    </p>
                  </div>
                  <Link href={`/detailcar/${data.id}`}>
                    <button className={styles.btn}>Cari mobil</button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ListCar;
