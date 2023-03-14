import { useContext, useEffect } from "react";
import { UserContext } from "../../providers/UserContext";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { LogoLink, TopLink } from "../../components/Header/style";
import varify from "../../assets/varify.png";
import UserSavedVars from "../../components/UserSavedVars";
import StyledDashboard from "./style";

const DashboardPage = () => {
  const { userID, requestUserSavedVars, user, userLogout } =
    useContext(UserContext);

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
      <Header>
        <div className="container">
          <div className="logo">
            <LogoLink to="/">
              <img src={varify} alt="" className="logo" />
              varify
            </LogoLink>
          </div>

          <nav>
            <TopLink href="/">Home</TopLink>
            <TopLink href="/" onClick={() => userLogout()}>
              Logout
            </TopLink>
          </nav>
        </div>
      </Header>

      <main>
        <h3 className="title-1">Saved Variables</h3>
        <UserSavedVars />
      </main>
    </StyledDashboard>
  );
};

export default DashboardPage;
