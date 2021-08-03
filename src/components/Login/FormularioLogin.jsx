import React from "react";
import {
  DivLogin,
  DivFormulario,
  DivRodapeLogin,
} from "./styled-login/DivsLogin";
import { TextField, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

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
