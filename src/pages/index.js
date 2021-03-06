import React from "react"
import "../styles/style.scss"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Row, Col, Container, Form, Button } from "react-bootstrap"
import cutOff1 from "../images/cutoff1.svg"
import cutOff2 from "../images/cutoff2.svg"
import { FaGithub, FaGlobe } from "react-icons/fa"
import Resume from "../cv/TuanAnhLeCV.pdf"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Portfolio" />
    <div className="Portfolio">
      <div className="Container">
        <section className="Landing" id="Landing">
          <div className="Logo">
            <svg className="logo-svg" viewBox="0 0 560 300" fill="none">
              <path
                id="Logo"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M427.017 80L429.904 75L432.791 80L556.921 295L559.808 300H554.034L305.773 300H300L302.887 295L427.017 80ZM308.66 295L429.904 85L551.147 295L308.66 295ZM129.904 75L127.017 80L2.88678 295L0 300H5.7735L254.034 300H259.808L256.921 295L132.791 80L129.904 75ZM129.904 85L8.66028 295L251.147 295L129.904 85ZM279.904 225L282.791 220L406.921 5L409.808 0H404.034L155.774 0H150L152.887 5L277.017 220L279.904 225ZM279.904 215L401.147 5L158.66 5L279.904 215Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="Landing-title">TUAN ANH LE</div>
          <div className="Landing-description">
            Software Engineer / Front End Developer
          </div>
        </section>
        <section className="About" id="About">
          <div className="about-title">ABOUT</div>
          <Container>
            <Row>
              <Col className="about-description">
                I’m a Software Engineer focused on Front End web development. 
                I am using ReactJS (tied with TypeScript) as my framework of choice 
                and for UI testing I use Enzyme, Jest, TestCafe, and Storybook libraries. 
                Development aside, I am a regular guy who has hobbies such as fermenting kombucha, watching latest
                anime, and trying new adventurous activities.
              </Col>
            </Row>
            <Row>
              <Col className="personalLinks">
                <a
                  href="https://www.linkedin.com/in/tulean/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links"
                >
                  LinkedIn
                </a>
                <a
                  href={Resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links"
                >
                  Resume
                </a>
                <a
                  href="https://github.com/Tulean"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="links"
                >
                  GitHub
                </a>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="Skills" id="Skills">
          <div className="skills-title">Skills</div>
          <div className="skills-description">
            <Container className="skills-description-title">
              <Row>
                <Col className="skill" xs={12} sm={4} xlg={6}>
                  Languages
                </Col>
                <Col>Java, PHP, JavaScript, HTML5, CSS3</Col>
              </Row>
              <Row>
                <Col className="skill" xs={12} sm={4}>
                  Frontend
                </Col>
                <Col>
                  React.js, Redux, Bootstrap, Material UI, Materialize, Sass, Enzyme, TestCafe, Storybook, Jest, Backstop
                </Col>
              </Row>
              <Row>
                <Col className="skill" xs={12} sm={4}>
                  Industry Knowledge
                </Col>
                <Col>
                  Data Structures and Algorithm, Object Oriented Concepts,
                  DevOps (deploying to Heroku, Netlify), Jira, Confluence
                </Col>
              </Row>
              <Row>
                <Col className="skill" xm={12} sm={4}>
                  Tools
                </Col>
                <Col>
                  Git, Adobe XD, Figma, Eclipse, Visual Studio Code, Slack,
                  Trello
                </Col>
              </Row>
            </Container>
          </div>
          <img src={cutOff1} alt="cutoff1" className="cutoff1" />
        </section>
        <section className="Projects" id="Projects">
        <div className="projects-title">Experience</div>
        <Container className="projects-description">
        <Row>
              <Col xs={12} sm={6} md={4}>
                <Img
                  fluid={data.job1.childImageSharp.fluid}
                  alt="job1"
                />
              </Col>
              <Col>
                <Row>
                  <Col>
                    <a
                      href="https://www.gooddata.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GoodData - 01/01/2020 - present
                    </a>
                    <a
                      className="icon1"
                      href="https://www.gooddata.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Company link"
                    >
                      <FaGlobe />
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                   Implemented features and ensured a smooth release of each feature with adequate test coverage. 
                   Colaborated with QA testers to resolve bug issues. 
                   Took part in daily syncs, weekly groomings, and communicated with coworkers from different timezones.
                   Technologies used: React.js, Redux, Redux-saga, Context, TypeScript, Webpack, Enzyme, Jest, 
                   TestCafe, Backstop.js, Jira, Confluence
                  </Col>
                </Row>
              </Col>
            </Row>
        </Container>
          <div className="projects-title">Projects</div>
          <Container className="projects-description">
            <Row>
              <Col xs={12} sm={6} md={4}>
                <Img
                  fluid={data.project1.childImageSharp.fluid}
                  alt="project1"
                />
              </Col>
              <Col>
                <Row>
                  <Col>
                    <a
                      href="https://adtractor.netlify.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AdTractor
                    </a>
                    <a
                      className="icon1"
                      href="https://github.com/Tulean/AdTractorClient"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="AdTractor Github Link"
                    >
                      <FaGithub />
                    </a>
                    <a
                      className="icon2"
                      href="https://adtractor.netlify.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="AdTractor Demo Link"
                    >
                      <FaGlobe />
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    AdTractor is a decentralized advertising network that
                    utilizes Ethereum Blockchain technology to prevent fraud in
                    the advertising industry. Technologies used: React.js,
                    Web3.js, Solidity, Ethereum Blockchain
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <Img
                  fluid={data.project2.childImageSharp.fluid}
                  alt="project2"
                />
              </Col>
              <Col>
                <Row>
                  <Col>
                    <a
                      href="https://shoplift-supermarket.firebaseapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Shoplift
                    </a>
                    <a
                      className="icon1"
                      href="https://github.com/brucelin1218/ShopLift"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Shoplift Github Link"
                    >
                      <FaGithub />
                    </a>
                    <a
                      className="icon2"
                      href="https://shoplift-supermarket.firebaseapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Shoplift Demo Link"
                    >
                      <FaGlobe />
                    </a>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    Shoplift is an e-commerce website that mimics
                    functionalities of Safeway’s website. The user can
                    add/remove items and go through the whole checkout process.
                    Technologies used: React.js, React-bootstrap, Firebase
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={6} md={4}>
                <Img
                  fluid={data.project3.childImageSharp.fluid}
                  alt="project3"
                />
              </Col>
              <Col>
                <Row>
                  <Col>
                    <a
                      href="https://emailyproject.herokuapp.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Emaily
                    </a>
                    <a
                      className="icon1"
                      href="https://github.com/Tulean/Emaily"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Emaily Github Link"
                    >
                      <FaGithub />
                    </a>
                    <a
                      className="icon2"
                      href="https://emailyproject.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Emaily Demo Link"
                    >
                      <FaGlobe />
                    </a>
                  </Col>
                </Row>
                <Row style={{ paddingBottom: "0" }}>
                  <Col>
                    Emaily is a full stack survey service that lets users send
                    out surveys to a massive amount of recipients for a certain
                    price. Emaily also collects and shows all responses to the
                    user. Technologies used: React.js, Redux, MaterializeCSS,
                    SendGrid, Stripe, Node.js, MongoDB, Express.js
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="Contact" id="Contact">
          <img src={cutOff2} alt="cutoff2" className="cutoff2" />
          <Container>
            <div className="Contact-title">Contact</div>
            <Form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <Form.Control type="hidden" name="form-name" value="contact" />

              <Form.Control
                required
                aria-label="name"
                placeholder="Name*"
                name="name"
                type="text"
              />

              <Form.Control
                required
                placeholder="Email*"
                name="email"
                type="email"
                aria-label="email"
              />

              <Form.Control
                required
                as="textarea"
                rows="4"
                placeholder="Message*"
                name="message"
                aria-label="message"
              />

              <div
                className="contact-btn-wrapper"
                style={{ textAlign: "center" }}
              >
                <Button type="submit">Submit</Button>
              </div>
            </Form>
          </Container>
        </section>
      </div>
    </div>
  </Layout>
)
export default IndexPage

export const query = graphql`
  query {
    Landing: file(relativePath: { eq: "Landing.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    job1: file(relativePath: { eq: "Job1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project1: file(relativePath: { eq: "project1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project2: file(relativePath: { eq: "project2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    project3: file(relativePath: { eq: "project3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
