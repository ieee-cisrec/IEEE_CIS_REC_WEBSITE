import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { FaUserPlus } from "react-icons/fa";
import Swal from "sweetalert2";

function ProjectCards(props) {
  const handleButtonClick = () => {
    Swal.fire({
      title: props.swalTitle || "Details",
      html: props.swalText || "Here are the details about the Event.",
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
        {props.open && (
          <Button
            variant="primary"
            href={props.reglink}
            target="_blank"
            className="custom-green-button" // Add green background and border color
          >
            {/* <FaUserPlus /> &nbsp; */}
            Register
          </Button>
        )}
        {props.close && (
          <Button
            variant="primary"
            // href={props.reglink}
            // target="_blank"
            className="custom-grey-button" // Add green background and border color
          >
            {/* <FaUserPlus /> &nbsp; */}
            Closed
          </Button>
        )}
        {"\n"}
        {"\n"}
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        <Button
          variant="primary"
          style={{ marginLeft: "10px", backgroundColor: "green" }}
          onClick={handleButtonClick} // Attach click handler
        >
          <CgWebsite /> &nbsp;
          {"Details"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
