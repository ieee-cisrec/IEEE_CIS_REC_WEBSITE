import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { FaUserPlus } from "react-icons/fa";
import Swal from "sweetalert2";

function ProjectCards(props) {
  const handleButtonClick = () => {
    Swal.fire({
      title: "Details",
      text: "Here are the details about the Event.",
      imageUrl: "https://via.placeholder.com/150", // Replace with your image URL
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: "Custom image",
      confirmButtonText: "Okay",
      backdrop: true, // Optional: Enable backdrop to prevent interaction outside the popup
    });
  };
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button
          variant="primary"
          // href={props.ghLink}
          // target="_blank"
          className="custom-grey-button" // Add green background and border color
        >
          {/* <FaUserPlus /> &nbsp; */}
          {props.isBlog ? "Blog" : "Closed"}
        </Button>

        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            style={{ marginLeft: "10px", backgroundColor: "green" }}
            onClick={handleButtonClick} // Attach click handler
          >
            <CgWebsite /> &nbsp;
            {"Details"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
