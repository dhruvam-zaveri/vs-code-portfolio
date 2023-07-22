import React from "react";
import { Card, Button } from "react-bootstrap";
import { ExternalLinkLogo } from "../Components/Logos.js";
import "./css/projectcard.css";

export const ProjectCard = ({img, title, text, technology_arr, external_link}) => {
    const btn_arr = []
    for (let i = 0; i < technology_arr.length; i++) {
        btn_arr.push(<Button
            variant="outline"
            size="sm"
            className="technologies_btn"
        >
            {technology_arr[i]}
        </Button>)
    }

    return <Card className="project_card">
    <Card.Img src={img} flush />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
      <Card.Text>
        {btn_arr}
      </Card.Text>
      <Card.Text>
        <Button
          variant="dark"
          href={external_link}
          target="_blank"
          size="sm"
          className="external_link_button"
        >
          <ExternalLinkLogo />
          {" View Project"}
        </Button>
      </Card.Text>
    </Card.Body>
  </Card>
}

export default ProjectCard;