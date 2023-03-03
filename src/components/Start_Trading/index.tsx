import { Container, Row, Col } from "react-bootstrap";
import { StartTradingProps } from "./startTradingProps";

const StartTrading = ({ startTradingData }: StartTradingProps) => {
  return (
    <section className="startTrading">
      <Container>
        <Row>
          <Col lg="12" md="12" sm="12">
            <div className="startTrading-content text-center">
              <h2 className="text-white mb-4">
                {startTradingData.title.text}{" "}
                <span className="t-green">
                  {startTradingData.title.highlight}
                </span>
              </h2>
              <p className="subheading mb-4">{startTradingData.description}</p>
              <div className="startTrading-btn">
                <a
                  href={startTradingData.button.href}
                  className="btn my-3 button "
                >
                  {startTradingData.button.name}
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
