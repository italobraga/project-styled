import React from 'react'
import Menu from '../components/Reutilizaveis/Menu';
import TableUsuarios from '../components/ListagemUsuarios/TableUsuarios';
import { api } from '../api/api';
import { useQuery } from "react-query";


const ListagemUsuarios = () => {
    const FetchUsuarios = async () => {
        const { data } = await api.get("http://localhost:5000/users");
        return data;
      };
      const { data, isLoading } = useQuery(["users"], FetchUsuarios);
    return(
        <>
        <Menu />
        {isLoading ? (
        <div>Carregando Lista...</div>
      ) : (
        <TableUsuarios data={data}/>
      )}    
        </>
    );
}

export default ListagemUsuarios;