import { Container, Row, Col } from "react-bootstrap";
import { FooterProps } from "./footerprops";

const Footer = ({ footerData }: FooterProps) => {
  return (
    <footer>
      <Container>
        <Row>
          <Col lg="3" md="12" sm="12">
            <div className="footer-box pb-4 mb-5">
              <span className="logo mb-3">
                <img
                  src={footerData.logo.img}
                  className="footer-logo mx-3 mb-30"
                  alt="logo"
                />
                <h4>{footerData.logo.name}</h4>
              </span>
              <p className="mb-3">{footerData.description}</p>
              <div className="lower-footer-icon d-flex mb-4">
                <a href="#facebook" className="f">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#twitter" className="t">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#linkedin" className="linked">
                  <i className="fab fa-vine"></i>
                </a>
              </div>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="footer-box pb-4 mb-30">
              <h6>Quick Links</h6>
              <ul>
                {footerData.links.quick.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="p-18">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="footer-box pb-4 mb-30">
              <h6>Company</h6>
              <ul className="left">
                {footerData.links.company.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="p-18">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
          <Col lg="3" md="6" sm="12">
            <div className="footer-box pb-4 button-group mb-30">
              <h6>Support</h6>
              <ul className="left">
                {footerData.links.support.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="p-18">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="line"></div>
      <div className="container">
        <div className="lower-footer-area">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="lower-footer mb-4">
                <p>{footerData.lower.description}</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="lower-text text-end">
                <a href="#policy" className="text-white py-2">
                  {footerData.lower.description2}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
