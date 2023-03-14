import { LogoLink, TopHeader, TopLink } from "./style";
import varify from "../../assets/varify.png";

interface IHeader {
  children: React.ReactNode;
}

const Header = ({ children }: IHeader) => {
  return <TopHeader>{children}</TopHeader>;
};

export default Header;
