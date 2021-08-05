import React from "react";
import { Link } from "react-router-dom";
import "../../assets/css/link.css";
import styled from "styled-components";
import { corClara, fontPadrao } from "../../UI/variaveis";

const TituloBranco = styled.h1`
  font-family: ${fontPadrao}
  color: ${corClara};
  font-size: 30px;
`;

const InformacoesEntrar = styled(TituloBranco)`
  font-size: 20px;
`;

const DivEsquerda = styled.div`
  width: 40%;
  background-color: #3f51b5;
  height: 100vh;
  text-align: center;
  
  @media (max-width: 800px){
    width: 100%;
    text-align: center;
    box-shadow: 5px 5px 5px 5px black;
  }
`;

const DivTextoEsquerda = styled.div`
  margin-top: 40vh;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const BtnLogin = styled.a`
  &:hover {
    cursor: pointer;
  }
`;

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
