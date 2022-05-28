import style from "./InvoiceTop.module.css";
import { Container } from "react-bootstrap";
import Link from "next/link";

const TiketTop = () => {
  return (
    <>
      <Container className={style.tiketTopContainer}>
        <div className={style.tiketTopKiri}>
          <div className={style.imageContainer}>
            <Link href={"/search-result"}>
              <img src="/fi_arrow-left.svg" alt="left-arrow" />
            </Link>
          </div>
          <div className={style.tiketTopKiriDetail}>
            <h6>Tiket</h6>
            <p>Order ID: xxxxxxxx</p>
          </div>
        </div>
        <div className={style.tiketTopKanan}>
          <img src="/ceklis-icon.svg" alt="ceklis" />
          <p>Pilih Metode</p>
          <img src="/strip.svg" alt="strip" />
          <img src="/ceklis-icon.svg" alt="ceklis" />
          <p>Bayar</p>
          <img src="/strip.svg" alt="strip" />
          <img src="/icon-3.svg" alt="3" />
          <p>Tiket</p>
        </div>
      </Container>
    </>
  );
};

export default TiketTop;
