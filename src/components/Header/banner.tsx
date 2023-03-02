import { Container, Row, Col } from "react-bootstrap";
import { BannerProps } from "./propsInterface/bannerProps";

const Banner = ({ bannerData }: BannerProps) => {
  return (
    <div className="main-banner" id="home">
      <Container>
        <Row>
          <Col sm="12" md="6">
            <div className="banner-content">
              <h1>{bannerData.title}</h1>
              <p className="p-18 my-5 text-white">{bannerData.description}</p>

              <div className="banner-btn">
                <a
                  href={bannerData.button.href}
                  className="btn my-3 button banner-btn"
                >
                  {bannerData.button.name}
                </a>
              </div>
            </div>
          </Col>
          <Col sm="12" md="6">
            <div className="banner-img my-5 my-md-auto text-center text-md-end">
              <img
                src="/assets/images/iphone-12-pro-max--gold.png"
                className="banner-img-sizing"
                width="70%"
                alt="welcome"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
