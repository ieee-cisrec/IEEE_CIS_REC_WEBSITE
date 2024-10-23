import React, { useRef } from "react";
import ImagecardCrew from "./ImagecardCrew";
import TitleText from "./TitleText";
import "../../Assets/ourcrew/css/Ourcrew.css";
// import mainImages from "/media/nobita/New Volume/Project/IEEE-git/IEEE_CIS_SOCIETY_WEBSITE/src/Assets/ourcrew/img/landscape-1.png";
import { mainData } from "./OurcrewDetails";
import Particle from "../Particle";

function OurCrew() {
  return (
    <div className="ourcrew-overall">
      <Particle></Particle>
      {mainData.map((data, index) => (
        <div className="ourCrewContainer" key={data.name}>
          <TitleText text={data.name} />
          <ImagecardCrew memberDetails={data.members} />
        </div>
      ))}
    </div>
  );
}

export default OurCrew;
