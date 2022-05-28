import style from "./InvoiceSukses.module.css";
import { Container } from "react-bootstrap";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { saveAs } from "file-saver";

const TiketBottom = () => {
  const saveFile = () => {
    saveAs("/INVOICE.pdf", "INVOICE.pdf");
  };

  return (
    <>
      <Container className={style.tiketBottomContainer}>
        <div className={style.pembayaran}>
          <img src="/success.svg" alt="success" />
          <h6>Pembayaran Berhasil!</h6>
          <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
        </div>
        <div className={style.invoiceContainer}>
          <div className={style.invoiceDetail}>
            <div>
              <h6>Invoice</h6>
              <p>*no invoice</p>
            </div>
            <button onClick={saveFile}>
              <img src="/fi_download.svg" />
              Unduh
            </button>
          </div>
          <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.js">
              <div className={style.viewerContainer}>
                <Viewer fileUrl="/INVOICE.pdf" />
              </div>
            </Worker>
          </div>
        </div>
      </Container>
    </>
  );
};

export default TiketBottom;
