import React, { useState, useContext } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import styled from "styled-components";
import { corClara } from "../../UI/variaveis";
import { useHistory } from "react-router";
import { cadastrarUsuario } from "../../api/api";
import ValidarCampos from "../../contexts/ValidarCampos";
import useErros from "../../hooks/useErros";

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
  @media (max-width: 800px) {
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
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const validacoes = useContext(ValidarCampos);
  const history = useHistory();
  const [erros, validarCampos, validarAvancar] = useErros(validacoes);

  return (
    <DivDireita>
      <DivFormulario>
        <Typography variant="h3">Cadastro de Usuário</Typography>
        <Typography variant="h6">ou use seu e-mail para registrar.</Typography>
        <form
          onSubmit={(event) => {
            console.log("opa")
            event.preventDefault();
            if (validarAvancar()) {
              cadastrarUsuario(email, senha, cpf, nome, sobrenome);
              history.push("/login");
            }
            
          }}
        >
          <DivCampos>
            <TextField
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              onBlur={validarCampos}
              required
              fullWidth
              error={!erros.email.valido}
              helperText={erros.email.mensagem}
              value={email}
              name="email"
              label="E-mail"
              variant="outlined"
              margin="normal"
            />
            <TextField
              onChange={(event) => {
                setSenha(event.target.value);
              }}
              onBlur={validarCampos}
              required
              error={!erros.senha.valido}
              helperText={erros.senha.mensagem}
              value={senha}
              name="senha"
              label="Senha"
              variant="outlined"
              margin="normal"
            />
            <TextField
              onChange={(event) => {
                setCpf(event.target.value);
              }}
              onBlur={validarCampos}
              required
              error={!erros.cpf.valido}
              helperText={erros.cpf.mensagem}
              value={cpf}
              name="cpf"
              label="CPF"
              variant="outlined"
              margin="normal"
            />
            <TextField
              onChange={(event) => {
                setNome(event.target.value);
              }}
              onBlur={validarCampos}
              required
              error={!erros.nome.valido}
              helperText={erros.nome.mensagem}
              value={nome}
              name="nome"
              label="Nome"
              variant="outlined"
              margin="normal"
            />
            <TextField
              onChange={(event) => {
                setSobrenome(event.target.value);
              }}
              onBlur={validarCampos}
              required
              error={!erros.sobrenome.valido}
              helperText={erros.sobrenome.mensagem}
              value={sobrenome}
              name="sobrenome"
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
