import { Container, Row, Col } from "react-bootstrap";
import { DownloadAppProps } from "./downloadAppProps";

const DownloadApps = ({ downloadData }: DownloadAppProps) => {
  return (
    <section className="download-app">
      <Container>
        <Row>
          <Col lg="6" md="12" sm="12">
            <div className="download_app_content">
              <div className="download-app-heading mb-5">
                <h2 className="text-white mb-3">
                  {downloadData.title.text}{" "}
                  <span className="t-green">
                    {downloadData.title.highlight}
                  </span>
                </h2>
                <p className="p-18 text-white">{downloadData.description}</p>
              </div>

              <Row>
                {downloadData.items.map((item, index) => (
                  <Col lg="6" md="6" sm="6" key={index}>
                    <div className="download_app_btn text-center text-sm-left">
                      <a href={item.href} target="_blank" rel="noreferrer">
                        <img src={item.icon} alt={item.alt} />
                      </a>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg="6" md="12" sm="12">
            <div className="download_app_img text-end">
              <img
                src={downloadData.downloadAppImg.img1}
                width="55%"
                alt="download-app"
              />
              <img
                className="overlay-img"
                src={downloadData.downloadAppImg.img2}
                width="47%"
                alt="download-app"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DownloadApps;
