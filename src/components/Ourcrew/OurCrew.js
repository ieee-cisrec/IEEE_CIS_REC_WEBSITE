import React, { useRef } from "react";
import ImagecardCrew from "./ImagecardCrew";
import TitleText from "./TitleText";
import "../../Assets/ourcrew/css/Ourcrew.css";
import { mainData } from "./OurcrewDetails";
import Particle from "../Particle";
function OurCrew() {
  return (
    <div>
      {mainData.map((data, index) => (
        <div className="ourCrewContainer" key={data.name}>
          <Particle></Particle>
          <TitleText text={data.name} />
          <ImagecardCrew memberDetails={data.members} />
        </div>
      ))}
    </div>
  );
}

export default OurCrew;
