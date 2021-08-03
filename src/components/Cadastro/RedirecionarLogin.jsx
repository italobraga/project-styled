import React from "react";
import { DivEsquerda, DivTextoEsquerda } from "./styled-cadastro/DivsCadastro";
import { TituloBranco, InformacoesEntrar } from "./styled-cadastro/TitulosCadastro";
import { BtnLogin } from "./styled-cadastro/BtnLogin";

const RedirecionarLogin = () => {
  return (
    <DivEsquerda>
      <DivTextoEsquerda>
        <TituloBranco>Bem vindo de volta!</TituloBranco>
        <InformacoesEntrar>
          Para se manter conectado conosco
          <br /> faça o login com suas informações pessoais
        </InformacoesEntrar>
        <BtnLogin>Entrar</BtnLogin>
      </DivTextoEsquerda>
    </DivEsquerda>
  );
};

export default RedirecionarLogin;
