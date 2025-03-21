import React from "react";
import myImage from "./assets/grpimg1.JPG";

const AboutCard = () => {
  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
        <strong>IEEE</strong>{" "}
        <strong style={{ color: subHeadingStyle.color }}>CIS </strong>
        <strong>REC</strong>
      </h1>

      <div style={contentWrapperStyle}>
        <img src={myImage} alt="Overview" style={imageStyle} />
      </div>
      <p style={descriptionStyle}>
        Computational Intelligent Society<br></br>
        <span style={redi}>
          &emsp;&emsp;" Redefining <span style={ai}>AI</span>esthetics "
        </span>
      </p>
    </div>
  );
};
const redi = {
  fontStyle: "italic",
};
// Styles
const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "0px",
  fontFamily: "Poppins, sans-serif",
  padding: "16px",
};

const headingStyle = {
  fontSize: "4rem",
  textAlign: "center",
  fontFamily: "TT Neoris, sans-serif", // Apply the TT Neoris font
  fontWeight: "bold",
  color: "white",
};

const ai = {
  fontWeight: "bold",
};

const descriptionStyle = {
  marginTop: "20px",
  fontSize: "1.125rem",
  textAlign: "justify",
  color: "#FFFFF7",
  maxWidth: "800px",
  fontFamily: "Nunito, sans-serif", // Correct syntax
};

const contentWrapperStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  margin: "20px 0",
  width: "100%",
  maxWidth: "1200px",
  flexWrap: "wrap",
};

const textBlockStyle = {
  width: "45%",
  padding: "20px",
  boxSizing: "border-box",
};

const imageStyle = {
  width: "80%",
  margin: "8px",
  borderRadius: "8px",
  border: "1px solid #DA70D6",
  boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.5)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease", // Smooth transition
};

// Add a hover style
const imageHoverStyle = {
  transform: "scale(1.05)", // Slight zoom on hover
  boxShadow: "0px 0px 20px rgba(218, 112, 214, 0.75)", // Larger shadow with orchid tint
};

const subHeadingStyle = {
  fontSize: "1.5rem",
  color: "	#DA70D6",
  textAlign: "left",
  marginBottom: "18px",
  fontFamily: "Nunito, sans-serif",
  fontWeight: "Bold",
};

const textDescriptionStyle = {
  fontSize: "1rem",
  color: "#FFFFF7",
  lineHeight: "1.6",
  fontFamily: "Nunito, sans-serif",
  textAlign: "justify",
};

// Inline Media Query using JS Styles
const mediaQueryStyles = `
  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    .contentWrapperStyle {
      flex-direction: column; /* Stack content vertically */
    }
    .textBlockStyle, .imageStyle {
      width: 100%; /* Make image and text full-width */
      text-align: left; /* Center the text for smaller screens */
    }
    .textBlockStyle {
      margin-top: 16px; /* Add spacing between image and text */
    }
  }
`;

// Injecting Media Styles in <style> tag
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mediaQueryStyles;
document.head.appendChild(styleSheet);

// Modified Styles for Mobile

export default AboutCard;
