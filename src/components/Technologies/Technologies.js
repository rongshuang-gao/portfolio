import React from "react";
import { DiFirebase, DiReact, DiDreamweaver } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the development world.
      Experienced in both functional and OOP: JavaScript, TypeScript, Python,
      Java. And Passionate about Web Development. From development and Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            React
            <br />
            NextJS
            <br />
            CSS/Sass
            <br />
            Styled-Components
            <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Node and Express
            <br />
            MangoDB <br />
            Django
            <br />
            REST and QraphQL
            <br />
            AWS <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiDreamweaver size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Figma <br />
            Axure <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
