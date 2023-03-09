import { useContext } from "react";
import { StyledMain } from "./style";
import { VarForm } from "../../components/VarForm/VarForm";
import { Input } from "../../components/Input/input";
import { VarContext } from "../../providers/VarContext/VarContext";

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

  return (
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
        <div>
          {colors?.primary ? <p>--color-primary: {colors?.primary}</p> : null}
          {colors?.secondary ? (
            <p>--color-secondary: {colors?.secondary}</p>
          ) : null}
          {colors?.tertiary ? (
            <p>--color-tertiary: {colors?.tertiary}</p>
          ) : null}
          {colors?.tertiary ? (
            <p>--color-tertiary: {colors?.tertiary}</p>
          ) : null}
          {titles?.size1 ? <p>--title-1: {titles?.size1}</p> : null}
          {titles?.size2 ? <p>--title-2: {titles?.size2}</p> : null}
          {titles?.size3 ? <p>--title-3: {titles?.size3}</p> : null}
          {texts?.size1 ? <p>--font-1</p> : null}
          {texts?.size2 ? <p>--font-2</p> : null}
          {texts?.size3 ? <p>--font-3</p> : null}
          {radius?.size1 ? <p>--radius-1</p> : null}
          {radius?.size2 ? <p>--radius-2</p> : null}
        </div>
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
  );
};

export default LandingPage;
