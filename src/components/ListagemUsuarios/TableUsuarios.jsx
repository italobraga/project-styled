import React from "react";
import styled from "styled-components";
import { fontPadrao } from "../../UI/variaveis";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

const TituloTabela = styled.h1`
  font-family: ${fontPadrao};
  color: #2f445b;
  font-weight: bold;
  text-align: center;
  font-size: 30px;
  margin-top: 40px;
`;

const Table = styled.div`
  font-family: ${fontPadrao};
  width: 60%;
  margin-left: 23rem;
  margin-top: 50px;
  user-select: none;
`;

const TableHead = styled.div`
  font-weight: bold;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Th = styled.div`
  background-color: #2f445b;
  color: white;
  text-align: center;
  width: 20%;
  padding: 10px;
`;

const ThBtn = styled(Th)`
  color: white;
  background-color: #2f445b;
  width: 5%;
`;

const TableRow = styled(TableHead)`
  font-weight: normal;
  &:hover {
    background-color: #e0eeee;
    transition: 0.5;
  }
`;

const Td = styled(Th)`
  border: 1px solid #c1cdcd;
  background-color: transparent;
  color: black;
`;

const TdBtn = styled(ThBtn)`
  border: 1px solid #c1cdcd;
  background-color: transparent;
`;

const TableUsuarios = ({ data }) => {
  console.log(data);
  return (
    <>
     <TituloTabela>Lista de Usuários</TituloTabela>
      <Table>
        <TableHead>
          <Th>Nome</Th>
          <Th>Sobrenome</Th>
          <Th>CPF</Th>
          <Th>E-mail</Th>
          <ThBtn>Editar</ThBtn>
          <ThBtn>Apagar</ThBtn>
        </TableHead>
        {data.map((item, i) => (
          <TableRow key={i}>
            <Td>{item.nome}</Td>
            <Td>{item.sobrenome}</Td>
            <Td>{item.cpf}</Td>
            <Td>{item.email}</Td>
            <TdBtn>
              <Link to={`/editar-usuario/${i + 1}`}>
                <IconButton size="small" color="primary">
                  <EditIcon />
                </IconButton>
              </Link>
            </TdBtn>
            <TdBtn>
              <IconButton size="small" color="secondary">
                <DeleteIcon />
              </IconButton>
            </TdBtn>
          </TableRow>
        ))}
      </Table>
    </>
  );
};

export default TableUsuarios;
