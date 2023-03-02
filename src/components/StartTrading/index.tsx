import { Container, Row, Col } from "react-bootstrap";

const StartTrading = () => {
  return (
    <section className="startTrading">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="startTrading-content text-center">
              <h2 className="text-white mb-4">
                Ready to Enter in the{" "}
                <span className="t-green">world of Crypto?</span>
              </h2>
              <p className="subheading mb-4">
                Discover how specific cryptocurrencies work — and get a bit of
                each crypto to try out for yourself.
              </p>
              <div className="startTrading-btn">
                <a href="#start" className="btn my-3 button ">
                  Start Trading
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default StartTrading;
