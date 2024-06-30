import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  
} from "react-icons/di";
import {
 
  SiRedux,
  SiMongodb,
  SiHtml5
} from "react-icons/si";
import { SiCplusplus } from 'react-icons/si';
import { SiPython, SiDjango, SiMysql } from 'react-icons/si';


const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiCplusplus />
    </Col>
    <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango />
      </Col>
    </Row>
  );
}

export default Techstack;
