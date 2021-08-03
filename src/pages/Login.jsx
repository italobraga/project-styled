import React from 'react'
import FormularioLogin from '../components/Login/FormularioLogin';
import { TelaLogin } from '../components/Login/styled-login/TelaLogin'
const Login = () => {
    return(
        <TelaLogin>
            <FormularioLogin />
        </TelaLogin>
    );
}

export default Login;