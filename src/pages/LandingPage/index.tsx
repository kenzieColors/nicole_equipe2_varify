import { useContext, useState } from "react";
import Header from "../../components/Header";
import { StyledMain } from "./style";
import VarForm from "../../components/Forms/VarForm";
import Input from "../../components/Forms/Input";
import { VarContext } from "../../providers/VarContext";
import { useCopyToClipboard } from "usehooks-ts";
import TextField from "@mui/material/TextField";
const LandingPage = () => {
  const {
    colors,
    titles,
    texts,
    radius,
    changeColors,
    changeTitles,
    changeTexts,
    changeRadius,
  } = useContext(VarContext);

  const [value, copy] = useCopyToClipboard();
  return (
    <>
      <Header />

      <StyledMain>
        <div className="upperForms">
          <VarForm
            onChangeFunction={(event) => {
              const colorID = event.target.id;
              const colorValue = event.target.value;
              changeColors(colorID, colorValue);
            }}
            name="Cores"
          >
            <Input label="Cor primária" id="primary" type="text"></Input>
            <Input label="Cor secundária" id="secondary" type="text"></Input>
            <Input label="Cor terciária" id="tertiary" type="text"></Input>
          </VarForm>
          <TextField InputProps={{ readOnly: true }}>
            {/* {colors?.primary ? `--color-primary: ${colors?.primary} ` : null}
            {colors?.secondary
              ? `--color-secondary: ${colors?.secondary}`
              : null}
            {colors?.tertiary ? `--color-tertiary: ${colors?.tertiary}` : null}
            {colors?.tertiary ? `--color-tertiary: ${colors?.tertiary}` : null}
            {titles?.size1 ? `--title-1: ${titles?.size1}` : null}
            {titles?.size2 ? `--title-2: ${titles?.size2}` : null}
            {titles?.size3 ? `--title-3: ${titles?.size3}` : null}
            {texts?.size1 ? `--font-1: ${texts.size1}` : null}
            {texts?.size2 ? `--font-2: ${texts.size2}` : null}
            {texts?.size3 ? `--font-3: ${texts.size3}` : null}
            {radius?.size1 ? `--radius-1: ${radius.size1} ` : null}
            {radius?.size2 ? `--radius-2: ${radius.size2}` : null} */}
            <button onClick={() => copy("teste")}>Teste</button>
          </TextField>
        </div>
        <div className="lowerForms">
          <VarForm
            checkbox
            onChangeFunction={(event) => {
              const titleID = event.target.id;
              const titleValue = event.target.value;
              changeTitles(titleID, titleValue);
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
              changeTexts(textId, textValue);
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
              changeRadius(radiusID, radiusValue);
            }}
            name="Radius"
          >
            <Input label="Radius 1" id="radiusSize-1" type="number"></Input>
            <Input label="Radius 2" id="radiusSize-2" type="number"></Input>
            <Input label="Radius 3" id="radiusSize-3" type="number"></Input>
          </VarForm>
        </div>
      </StyledMain>
    </>
  );
};

export default LandingPage;
