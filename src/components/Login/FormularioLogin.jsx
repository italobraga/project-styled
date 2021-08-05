import React from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { corClara } from '../../UI/variaveis'

const DivLogin = styled.div`
  background-color: ${corClara};
  width: 30%;
  height: 500px;
  border-radius: 20px;
  margin-top: 12%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 1px 1px #212121;
  
  @media (max-width: 400px){
    width: 90%;
    margin-top: 20%;
  }

  @media (min-width: 400px){
    width: 90%;
    margin-top: 40%;
  }

  @media (min-width: 600px){
    width: 90%;
    margin-top: 30%;
  }

  @media (min-width: 800px){
    width: 50%;
    margin-top: 12%;
  }
  @media (min-width: 1500px){
    width: 40%;
    margin-top: 12%;
  }
`;

const DivFormulario = styled.div`
  width: 70%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10%;

`;

const DivRodapeLogin = styled.div`
  text-align: center;
  margin-top: 10px;
`;


const FormularioLogin = () => {
  return (
    <DivLogin>
      <DivFormulario>
        <Typography variant="h3" align="center">
          Faça seu login
        </Typography>
        <form>
          <TextField
            fullWidth
            label="E-mail"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Senha"
            type="password"
            variant="outlined"
            margin="normal"
          />
          <Button fullWidth variant="contained" type="submit" color="primary">
            Entrar
          </Button>
        </form>
        <DivRodapeLogin>
          <Typography variant="h6">Ainda não tem conta?</Typography>
          <Link to="/">
            <Typography align="center" variant="h6">
              Cadastre-se
            </Typography>
          </Link>
        </DivRodapeLogin>
      </DivFormulario>
    </DivLogin>
  );
};

export default FormularioLogin;
