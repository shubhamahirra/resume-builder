import { Container, Paper } from "@mui/material";
import React from "react";
import "../Styles/Template1.css";
import { data } from "../Data/data";
import {
  HeaderTemplate1,
  HeadingTemp,
  ExperienceTemplate,
  EducationTemplate,
  KeySkillTemplate,
} from "../Components";

const Template1 = (props) => {
  const personalinfo = props.personalinfo
    ? props.personalinfo
    : data.personal_info;
  const workexperience = props.workexperience
    ? props.workexperience
    : data.work_experience;
  const educationinfo = props.educationinfo
    ? props.educationinfo
    : data.education_details;
  const skills = props.skills ? props.skills : data.key_skills;
  return (
    <Paper
      sx={{
        width: {
          xs: "350px",
          sm: "400px",
          md: "450px",
          lg: "500px",
          xl: "550px",
        },
        height: {
          xs: "500px",
          sm: "550px",
          md: "600px",
          lg: "650px",
          xl: "700px",
        },
      }}
      id={`${props.index}report`}
      elevation={3}
    >
      <HeaderTemplate1
        primaryColor={"#43AFE8"}
        secondaryColor={"black"}
        bgColor={"white"}
        personalInfo={personalinfo}
        workExperience={workexperience}
      />
      <div className="breakk"></div>
      <Container>
        <HeadingTemp color={"#43AFE8"} title={"Professional Experience"} />
        <ul style={{ paddingBottom: 10 }}>
          {workexperience.map((experience, index) => {
            return (
              <ExperienceTemplate
                key={index}
                experience={experience}
              />
            );
          })}
        </ul>
        <HeadingTemp color={"#43AFE8"} title={"Education"} />
        <EducationTemplate education={educationinfo} />
        <HeadingTemp color={"#43AFE8"} title={"Key Skills"} />
        <ul style={{ marginBottom: 10 }}>
          {skills.map((skill, index) => {
            return <KeySkillTemplate key={index} skill={skill} />;
          })}
        </ul>
      </Container>
    </Paper>
  );
};

export default Template1;
