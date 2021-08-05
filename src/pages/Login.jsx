import React from 'react'
import FormularioLogin from '../components/Login/FormularioLogin';
import styled from 'styled-components';
import { corPrincipal } from '../../src/UI/variaveis'

export const TelaLogin = styled.div`
    background-color: ${corPrincipal};
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Login = () => {
    return(
        <TelaLogin>
            <FormularioLogin />
        </TelaLogin>
    );
}

export default Login;