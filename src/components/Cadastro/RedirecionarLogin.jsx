import React from "react";
import { DivEsquerda, DivTextoEsquerda } from "./styled-cadastro/DivsCadastro";
import {
  TituloBranco,
  InformacoesEntrar,
} from "./styled-cadastro/TitulosCadastro";
import { BtnLogin } from "./styled-cadastro/BtnLogin";
import { Link } from "react-router-dom";
import '../../assets/css/link.css'

const RedirecionarLogin = () => {
  return (
    <DivEsquerda>
      <DivTextoEsquerda>
        <TituloBranco>Bem vindo de volta!</TituloBranco>
        <InformacoesEntrar>
          Para se manter conectado conosco
          <br /> faça o login com suas informações pessoais
        </InformacoesEntrar>
        <Link to="/login" className="btn-entrar">
          <BtnLogin>Entrar</BtnLogin>
        </Link>
      </DivTextoEsquerda>
    </DivEsquerda>
  );
};

export default RedirecionarLogin;
