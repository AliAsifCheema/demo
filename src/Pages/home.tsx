import Header from "../components/Header";
import Footer from "../components/Footer";
import StartTrading from "../components/Start_Trading";
import GetStarted from "../components/Get_Started";
import DownloadApps from "../components/Download_Apps";
import { sitedata } from "../content/content";

const Home = () => {
  return (
    <>
      <Header headerData={sitedata.header} />
      <DownloadApps downloadData={sitedata.downloadApps} />
      <GetStarted getStartedData={sitedata.getstarted} />
      <StartTrading startTradingData={sitedata.startTrading} />
      <Footer footerData={sitedata.footer} />
    </>
  );
};

export default Home;
