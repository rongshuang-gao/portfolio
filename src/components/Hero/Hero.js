import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Ginny's Portfolio
      </SectionTitle>
      <SectionText>
        An innovative software engineer and product leader who abscessed with
        consumer satisfaction.
      </SectionText>
      <a href="mailto:rongshuanggao@gmail.com" from="portfolio">
        <Button>Contact Me</Button>
      </a>
    </LeftSection>
  </Section>
);

export default Hero;
