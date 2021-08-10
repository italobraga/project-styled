import GlobalStyle from './GlobalStyle'
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import ValidarCampos from './contexts/ValidarCampos';
import { validarCpf, validarEmail, validarSenha, validarNomes } from './models/validacoes';
import Home from './pages/Home';

const queryClient = new QueryClient()


function App() {
    return (
        <>
            <QueryClientProvider client={queryClient} >
                <ValidarCampos.Provider value={{ cpf: validarCpf, email: validarEmail, senha: validarSenha, nome: validarNomes, sobrenome: validarNomes }}>
                    <GlobalStyle />
                    <ReactQueryDevtools />
                    <Router>
                        <Switch>
                            <Route component={Cadastro} exact path="/" />
                            <Route component={Login} path="/login" />
                            <Route component={Home} path="/home" />
                        </Switch>
                    </Router>
                </ValidarCampos.Provider>
            </QueryClientProvider>

        </>
    );
}

export default App;