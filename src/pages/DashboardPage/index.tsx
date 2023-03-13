import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { LogoLink, TopLink } from "../../components/Header/style";
import varify from "../../assets/varify.png";
import UserSavedVars from "../../components/UserSavedVars";
import StyledDashboard from "./style";

const DashboardPage = () => {
  const { userToken, userID, requestUserSavedVars } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!userID) {
      navigate("/");
    } else {
      requestUserSavedVars(userID);
    }
  }, []);

  return (
    <StyledDashboard>
      {/* <Header>
        <div className="container">
          <div>
            <LogoLink to="/">
              <img src={varify} alt="" className="logo" />
            </LogoLink>
          </div>

          <nav>
            <TopLink href="/register">Cadastre-se</TopLink>
            <TopLink href="/login">Login</TopLink>
          </nav>
        </div>
      </Header> */}

      <section>
        <UserSavedVars />
      </section>
    </StyledDashboard>
  );
};

export default DashboardPage;
