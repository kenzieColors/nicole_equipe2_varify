import React from "react";
import { LogoLink, TopHeader, TopLink } from "./style";
import varify from "../../assets/varify.png";
import LandingPage from "../../pages/LandingPage/index";

const Header = () => (
  <TopHeader>
    <div>
      <LogoLink to="/">
        <img src={varify} alt="" className="logo" />
      </LogoLink>
    </div>

    <nav>
      <TopLink href="/register">Cadastre-se</TopLink>
      <TopLink href="/login">Login</TopLink>
      <TopLink href="/">Logout</TopLink>

      {/* {<LandingPage/> ? <TopLink to="/register">Cadastre-se</TopLink>
      <TopLink to="/login">Login</TopLink> :<TopLink to="/">Logout</TopLink>} */}
    </nav>
  </TopHeader>
);

export default Header;
