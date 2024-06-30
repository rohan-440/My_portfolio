import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import Blog from "../assets/projects/blog.png"
import Agrocare from "../assets/projects/agrocare.jpeg";
import Food from "../assets/projects/food.jpeg";
import Route from "../assets/projects/route.jpeg";
import Schedule from "../assets/projects/schedule.png";
import Train from "../assets/projects/train.jpeg";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
               imgPath={Agrocare}
              isBlog={false}
              title="AGROCARE"
              description="Developed a platform that connects farmers with agricultural experts based on location, crops, and farmer schemes.
Implemented seamless communication through video call, file sharing, and in-app chat for efficient problem solving
Designed a content management system (CMS) with 80 % increased security accessibility for experts/farmers in remote
areas through a Web application.
Impacted on yield with 90 % improvement and resource optimization achieved by farmers using Agrocare’s expert advice"
              ghLink="https://github.com/rohan-440/IEEE_PROTOCOL.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Blog}
              isBlog={false}
              title="BLOGGER"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/rohan-440/MINI_BLOGGER"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Train}
              isBlog={false}
              title="CHENNAI SUBURBAN TRAIN GUI"
              description="Revamped the platform with a user-friendly interface, delivered real-time updates, and optimized the booking process,
leading to a 50% surge in user satisfaction and a 25% increase in ticket sales.
Developed and executed a comprehensive testing plan encompassing functionality, performance, privacy and security.
Ensured a streamlined booking flow, ensuring ease of use at every step with maximizing conversion rates.
Increased new user by 70% and booking completion rates by 90% after implementing the one-stop booking solution."
              ghLink="https://github.com/rohan-440/ChennaiSuburbanLocalTrainApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Food}
              isBlog={false}
              title="FOOD PLAZA "
              description=" It serves as the central hub for managing various aspects of a food plaza, including restaurant information, menus, orders, customer data, and payment processing. The goal is to streamline restaurant operations, enhance customer experience, and provide a seamless integration with both web and mobile applications."
              ghLink="https://github.com/rohan-440/Food-Plaza"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Schedule}
              isBlog={false}
              title="Scheduler"
              description="Developed a user-friendly interface for scheduling and managing a list of works with their details and priorities.
Designed streamlined the scheduling process, reducing scheduling time by 20% and improving work predictability.
Resulted in a 60% increase in project completion rates and a significant reduction in scheduling errors."
              ghLink="https://github.com/rohan-440/Todo-list"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Route}
              isBlog={false}
              title="SHORTEST ROUTE FINDER"
              description="The Shortest Route Finder project aims to develop a system that can efficiently find the shortest path between two locations on a map. The system will use graph theory and algorithms such as Dijkstra's or A* to compute the shortest route. The project will include a user interface to input the start and end points and visualize the computed route."
              ghLink="https://github.com/rohan-440/BusRouteFinder"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects