import React from "react";
import FormularioCadastro from "../components/Cadastro/FormularioCadastro";
import RedirecionarLogin from "../components/Cadastro/RedirecionarLogin";

import {
  DivCadastro,
} from "../components/Cadastro/styled-cadastro/DivsCadastro";

const Cadastro = () => {
  return (
    <DivCadastro>
      <RedirecionarLogin />
      <FormularioCadastro />
    </DivCadastro>
  );
};

export default Cadastro;
