import React from "react";
import {
  WorksWorkButton,
  WorksWorkContainer,
  WorksWorkContent,
  WorksWorkDescr,
  WorksWorkImage,
  WorksWorkTitle,
} from "./works-work.styles";

import logo from "../../assets/logoGreen.png";

const WorksWork = ({ work }) => {
  const { title, descr, image, name } = work;
  return (
    <WorksWorkContainer>
      <WorksWorkImage>
        <img src={image} alt={title} />
      </WorksWorkImage>
      <WorksWorkContent>
        <WorksWorkTitle>{title}</WorksWorkTitle>
        <WorksWorkDescr>{descr}</WorksWorkDescr>
        <WorksWorkButton to={`/work/${name}`}>
          Sprawdź{" "}
          <div>
            <img src={logo} alt="Logo" />
          </div>
        </WorksWorkButton>
      </WorksWorkContent>
    </WorksWorkContainer>
  );
};

export default WorksWork;
