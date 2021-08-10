import React, { useState } from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { corClara } from "../../UI/variaveis";
import { api } from "../../api/api";
import { useHistory } from "react-router";

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

  @media (max-width: 400px) {
    width: 90%;
    margin-top: 20%;
  }

  @media (min-width: 400px) {
    width: 90%;
    margin-top: 40%;
  }

  @media (min-width: 600px) {
    width: 90%;
    margin-top: 30%;
  }

  @media (min-width: 800px) {
    width: 50%;
    margin-top: 12%;
  }
  @media (min-width: 1500px) {
    width: 30%;
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const logarUsuario = async (email, password) => {
    console.log(email, password);
    try {
      const resposta = await api.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      if (resposta.status === 200) {
        console.log(resposta.data);
        history.push("/home");
        return resposta.data;
      }
    } catch (error) {
      alert("Usuário Inválido!");
    }
  };

  return (
    <DivLogin>
      <DivFormulario>
        <Typography variant="h3" align="center">
          Faça seu login
        </Typography>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            logarUsuario(email, password);
          }}
        >
          <TextField
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            fullWidth
            required
            value={email}
            label="E-mail"
            variant="outlined"
            margin="normal"
          />
          <TextField
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            fullWidth
            required
            value={password}
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
