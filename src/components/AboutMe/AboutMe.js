import React from "react";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const AboutMe = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hey, my name is Ginny Gao. I’m a front-end web developer from New York.
        I’m passionate about travel and movie and I’m always curious to learn
        more when it comes to new technologies and creative coding.
      </SectionText>
    </Section>
  );
};

export default AboutMe;
