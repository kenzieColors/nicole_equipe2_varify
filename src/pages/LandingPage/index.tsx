import { useContext } from "react";
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
    <div>
      <VarForm
        onChangeFunction={(event) => {
          const colorID = event.target.id;
          const colorValue = event.target.value;
          changeColors(colorID, colorValue);
        }}
        label="colors"
      >
        <Input label="primary" type="text"></Input>
        <Input label="secondary" type="text"></Input>
        <Input label="tertiary" type="text"></Input>
      </VarForm>

      <p>Cor primária: {colors?.primary}</p>
      <p>Cor secundária: {colors?.secondary}</p>
      <p>Cor terciária: {colors?.tertiary}</p>

      <VarForm
        onChangeFunction={(event) => {
          const titleID = event.target.id;
          const titleValue = event.target.value;
          changeTitles(titleID, titleValue);
        }}
        label="titles"
      >
        <Input label="titleSize-1" type="number"></Input>
        <Input label="titleSize-2" type="number"></Input>
        <Input label="titleSize-3" type="number"></Input>
      </VarForm>

      <p>Titulo1: {titles?.size1}</p>
      <p>Titulo2: {titles?.size2}</p>
      <p>Titulo3: {titles?.size3}</p>

      <VarForm
        onChangeFunction={(event) => {
          const textId = event.target.id;
          const textValue = event.target.value;
          changeTexts(textId, textValue);
        }}
        label="texts"
      >
        <Input label="textSize-1" type="number"></Input>
        <Input label="textSize-2" type="number"></Input>
        <Input label="textSize-3" type="number"></Input>
      </VarForm>

      <p>Text1: {texts?.size1}</p>
      <p>Text2: {texts?.size2}</p>
      <p>Text3: {texts?.size3}</p>

      <VarForm
        onChangeFunction={(event) => {
          const radiusID = event.target.id;
          const radiusValue = event.target.value;
          changeRadius(radiusID, radiusValue);
        }}
        label="radius"
      >
        <Input label="radiusSize-1" type="number"></Input>
        <Input label="radiusSize-2" type="number"></Input>
        <Input label="radiusSize-3" type="number"></Input>
      </VarForm>

      <p>Radius1: {radius?.size1}</p>
      <p>Radius2: {radius?.size2}</p>
    </div>
  );
};

export default LandingPage;
