import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCode } from "react-icons/di";

import {
  HeaderContainer,
  Span,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <HeaderContainer>
    <Div1>
      <Link href="/">
        <a
          href=""
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            // marginBottom: "20px",
          }}
        >
          <DiCode size="6rem" />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/rongshuang-gao">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ginny-gao/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
    </Div3>
  </HeaderContainer>
);

export default Header;
