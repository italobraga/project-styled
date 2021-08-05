import React from "react";
import FormularioCadastro from "../components/Cadastro/FormularioCadastro";
import RedirecionarLogin from "../components/Cadastro/RedirecionarLogin";
import styled from "styled-components";

const DivCadastro = styled.div`
  background-color: #f1f1f1;
  display: flex;
  flex-direction: row;

  @media (max-width: 800px){
    flex-direction: column;
  }
`;

const Cadastro = () => {
  return (
    <DivCadastro>
      <RedirecionarLogin />
      <FormularioCadastro />
    </DivCadastro>
  );
};

export default Cadastro;
