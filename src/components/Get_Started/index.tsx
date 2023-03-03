import { Container, Row, Col } from "react-bootstrap";
import { GetStartedProps } from "./getStartedProps";

const GetStarted = ({ getStartedData }: GetStartedProps) => {
  return (
    <section className="get-started">
      <div className="get-started-bg">
        <Container>
          <Row>
            <Col>
              <div className="getStarted_heading text-center mb-5">
                <h2 className="text-white mb-3">
                  {getStartedData.title.text}{" "}
                  <span className="t-green">
                    {getStartedData.title.highlight}
                  </span>
                </h2>
                <p className="p-18">{getStartedData.description}</p>
              </div>
            </Col>
          </Row>
          <Row>
            {getStartedData.items.map((item, index) => (
              <Col lg="4" md="6" sm="12" key={index}>
                <div className="get-started__item text-center mt-3">
                  <div className="get-started__item__icon">
                    <img src={item.icon} alt="getstarted1" width="40%" />
                  </div>
                  <div className="get-started__item__content">
                    <h5 className="text-white my-4">{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default GetStarted;
