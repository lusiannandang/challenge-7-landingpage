import CariMobil from "../../Component/CariMobil/CariMobil";
import DetailMobil from "../../Component/DetailMobil/DetailMobil";
import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import Head from "next/head";

function App() {
  return (
    <div className="App">
      <>
        <Head>
          <title>Detail Car</title>
          <meta name="description" content="Create by Nandang" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <CariMobil />
        <DetailMobil />
        <Footer />
      </>
    </div>
  );
}

export default App;
