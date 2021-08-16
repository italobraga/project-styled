import React, { useState, useContext } from "react";
import { Button, TextField, Typography } from "@material-ui/core";
import styled from "styled-components";
import { useHistory } from "react-router";
import ValidarCampos from "../../contexts/ValidarCampos";
import useErros from "../../hooks/useErros";
import Menu from "../Reutilizaveis/Menu";
import { api } from "../../api/api";
import { useQuery } from "react-query";

const DivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivFormulario = styled.div`
  width: 25%;
  padding: 5%;
  margin-top: 10%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const DivCampos = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FormEditarUsuario = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const validacoes = useContext(ValidarCampos);
  const history = useHistory();
  const [erros, validarCampos, validarAvancar] = useErros(validacoes);
  const local = history.location.pathname;
  const id = local.substring(local.lastIndexOf("/") + 1);
  console.log(id);

  const RecuperarDadosUsuario = async () => {
    try {
      const { data } = await api.get(`http://localhost:5000/users/${id}`);
      return data;
    } catch (error) {
      console.log("Erro!", error);
    }
  };
  const { data, isLoading } = useQuery(["users"], RecuperarDadosUsuario);

  return (
    <>
      <DivPrincipal>
        <Menu />

        {isLoading ? (
          <Typography>Carregando...</Typography>
        ) : (
          <DivFormulario>
            {" "}
            <Typography variant="h3" align="center">
              Editar Usuário
            </Typography>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (validarAvancar()) {
                  history.push("/usuarios");
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
                  label="Novo e-mail"
                  variant="outlined"
                  margin="normal"
                  defaultValue={data.email}
                />
                <TextField
                  onChange={(event) => {
                    setSenha(event.target.value);
                  }}
                  onBlur={validarCampos}
                  required
                  error={!erros.senha.valido}
                  helperText={erros.senha.mensagem}
                  name="senha"
                  label="Nova senha"
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
                  name="cpf"
                  label="Novo CPF"
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
                  name="nome"
                  label="Novo nome"
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
                  name="sobrenome"
                  label="Novo sobrenome"
                  variant="outlined"
                  margin="normal"
                />
              </DivCampos>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Concluir
              </Button>
            </form>
          </DivFormulario>
        )}
      </DivPrincipal>
    </>
  );
};

export default FormEditarUsuario;
