import { useContext } from "react";
import Header from "../../components/Header";
import { StyledMain } from "./style";
import VarForm from "../../components/Forms/VarForm";
import Input from "../../components/Forms/Input";
import { VarContext } from "../../providers/VarContext";
import { useCopyToClipboard } from "usehooks-ts";
import TextField from "@mui/material/TextField";
import { LogoLink, TopLink } from "../../components/Header/style";
import varify from "../../assets/varify.png";

const LandingPage = () => {
  const { variables, changeVariables, globalVarGenerator } =
    useContext(VarContext);

  const [value, copy] = useCopyToClipboard();
  return (
    <>
      <Header>
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
      </Header>

      <StyledMain>
        <div className="upperForms">
          <VarForm
            onChangeFunction={(event) => {
              const colorID = event.target.id;
              const colorValue = event.target.value;
              changeVariables(colorID, colorValue);
            }}
            name="Cores"
          >
            <Input label="Cor primária" id="primary" type="text"></Input>
            <Input label="Cor secundária" id="secondary" type="text"></Input>
            <Input label="Cor terciária" id="tertiary" type="text"></Input>
          </VarForm>
        </div>
        <div className="lowerForms">
          {/* <div className="lowerForms"> */}
          <VarForm
            checkbox
            onChangeFunction={(event) => {
              const titleID = event.target.id;
              const titleValue = event.target.value;
              changeVariables(titleID, titleValue);
            }}
            name="Títulos"
          >
            <Input label="Título 1" id="titleSize-1" type="number"></Input>
            <Input label="Título 2" id="titleSize-2" type="number"></Input>
            <Input label="Título 3" id="titleSize-3" type="number"></Input>
          </VarForm>

          <VarForm
            checkbox
            onChangeFunction={(event) => {
              const textId = event.target.id;
              const textValue = event.target.value;
              changeVariables(textId, textValue);
            }}
            name="Textos"
          >
            <Input label="Texto 1" id="textSize-1" type="number"></Input>
            <Input label="Texto 2" id="textSize-2" type="number"></Input>
            <Input label="Texto 3" id="textSize-3" type="number"></Input>
          </VarForm>

          <VarForm
            checkbox
            onChangeFunction={(event) => {
              const radiusID = event.target.id;
              const radiusValue = event.target.value;
              changeVariables(radiusID, radiusValue);
            }}
            name="Radius"
          >
            <Input label="Radius 1" id="radiusSize-1" type="number"></Input>
            <Input label="Radius 2" id="radiusSize-2" type="number"></Input>
            <Input label="Radius 3" id="radiusSize-3" type="number"></Input>
          </VarForm>
          {/* </div> */}
        </div>

        <fieldset className="titleBoxField">
          <legend>Váriaveis globais</legend>
          <TextField
            className="boxTextField"
            value={globalVarGenerator()}
            InputProps={{ readOnly: true }}
          >
            <button onClick={() => copy(globalVarGenerator())}>Teste</button>
          </TextField>
        </fieldset>
      </StyledMain>
    </>
  );
};

export default LandingPage;
