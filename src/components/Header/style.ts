import { Link } from "react-router-dom";
import styled from "styled-components";

export const TopHeader = styled.header`
  width: 100%;
  max-width: 1380px;
  margin: 0 auto;
  padding: 20px;

  background-color: #212529;
  border-bottom: solid 1px #8b8b8b;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  align-items: center;

  gap: 20px;

  nav {
    padding: 12px;
  }

  @media (min-width: 426px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
export const LogoLink = styled(Link)`
  text-decoration: none;
`;

export const TopLink = styled.a`
  color: #ef6c00;
  background-color: #212529;

  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 200;

  padding: 10px 6px;
  margin-right: 8px;

  border-radius: 4px;
  border: 1px solid #ef6c00;
  &:hover {
    background-color: #ef6c00;
    color: #303030;
  }
`;
