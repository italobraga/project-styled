import React from "react";
import { Button, TextField, Typography } from "@material-ui/core";

import { TituloStyled } from "./styled-cadastro/TitulosCadastro";

import {
  DivDireita,
  DivFormulario,
  DivCampos,
} from "./styled-cadastro/DivsCadastro";
const FormularioCadastro = () => {
  return (
    <DivDireita>
      <DivFormulario>
        <TituloStyled>Cadastro de Usuário</TituloStyled>
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
