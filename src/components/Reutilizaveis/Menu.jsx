import React from "react";
import styled from "styled-components";
import { corPrincipal } from "../../UI/variaveis";
import { Link } from "react-router-dom";
import "../../assets/css/link.css";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ViewListIcon from "@material-ui/icons/ViewList";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const DivMenu = styled.div`
  background-color: ${corPrincipal};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 5px 0px black;
`;

const DivNav = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-around;
`;

const DivNavSair = styled.div`
  width: 5%;
  margin-top: 15px;
`;

const Menu = () => {
  return (
    <DivMenu>
      <DivNav>
        <Link to="/home" className="link-menu-principal">
          <HomeIcon className="icons-menu-principal" />
          {""}
          Home
        </Link>
        <Link to="/usuarios" className="link-menu-principal">
          <ListIcon className="icons-menu-principal" />
          {""}
          Listagem de Usuários
        </Link>
        <Link className="link-menu-principal">
          <AssignmentIcon className="icons-menu-principal" />
          {""}
          Listagem de Tarefas
        </Link>
        <Link className="link-menu-principal">
          <ViewListIcon className="icons-menu-principal" />
          {""}
          Listagem de Produtos
        </Link>
      </DivNav>
      <DivNavSair>
        <Link to="/"className="link-menu-principal">
          <ExitToAppIcon className="icons-menu-principal" />
          {""}
          Sair
        </Link>
      </DivNavSair>
    </DivMenu>
  );
};

export default Menu;
