import React from "react";
import DeveopersCard from "./Developer/DevelopersCard";
// import DevelopersCard from "./Developer/DevelopersCard"; // Adjust the path accordingly

const Techstack = () => {
  return (
    <div >
      <h2 style={headingStyle}>Developers &lt;/&gt;</h2>
      <DeveopersCard/>
    </div>
  );
};
  

const headingStyle = {
  fontSize: '4rem',
  textAlign: 'center',
  margin: '40px 0',
  color: 'white',
  letterSpacing: '0.07em',
  fontFamily: 'TT Neoris, sans-serif',
  fontWeight: 'bold',
  
};
export default Techstack;
