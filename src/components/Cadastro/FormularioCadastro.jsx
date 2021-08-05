import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import styled from "styled-components";
import { corClara } from "../../UI/variaveis";

const DivDireita = styled.div`
  width: 60%;
  background-color: ${corClara};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 5px 0px black;
  text-align: center;
  
  @media (max-width: 800px){
    width: 100%;
    box-shadow: none;
    height: 100%;
  }
  
  @media (max-width: 1700px){
    text align: center;
  }
`;

const DivFormulario = styled.div`
  width: 40%;
  margin-top: 25%;
  @media (max-width: 800px){
    width: 90%;
    padding: 50px 0 50px 0;
    margin-top: 0;
    text-align: center;
  }
`;

const DivCampos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const FormularioCadastro = () => {
  return (
    <DivDireita>
      <DivFormulario>
        <Typography variant="h3">Cadastro de Usuário</Typography>
        <Typography variant="h6">ou use seu e-mail para registrar.</Typography>
        <form>
          <DivCampos>
            <TextField
              required
              fullWidth
              label="E-mail"
              variant="outlined"
              margin="normal"
            />
            <TextField
              required
              label="Senha"
              variant="outlined"
              margin="normal"
            />
            <TextField
              required
              label="CPF"
              variant="outlined"
              margin="normal"
            />
            <TextField
              required
              label="Nome"
              variant="outlined"
              margin="normal"
            />
            <TextField
              required
              label="Sobrenome"
              variant="outlined"
              margin="normal"
            />
          </DivCampos>

          <Button fullWidth type="submit" variant="contained" color="primary">
            Cadastrar
          </Button>
        </form>
      </DivFormulario>
    </DivDireita>
  );
};

export default FormularioCadastro;
