import { VarForm } from "../../components/VarForm/VarForm";

const LandingPage = () => (
  <div>
    <VarForm label="teste">
      <h2>teste form sem checkbox</h2>
    </VarForm>
    <VarForm label="teste" checkbox={true}>
      <h2>teste form com checkbox</h2>
    </VarForm>
  </div>
);

export default LandingPage;
