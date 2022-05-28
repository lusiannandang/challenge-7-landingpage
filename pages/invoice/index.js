import Navbar from "../../Component/Navbar/Navbar";
import Footer from "../../Component/Footer/Footer";
import Invoice from "../../Component/Invoice/Invoice";
import Head from "next/head";

const App = () => {
  return (
    <>
      <Head>
        <title>Invoice</title>
        <meta name="description" content="Create by Nandang" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Invoice />
      <Footer />
    </>
  );
};

export default App;
