import GlobalStyle from './GlobalStyle'
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

const queryClient = new QueryClient()


function App() {
    return (
        <>
            <QueryClientProvider client={queryClient} >
                <GlobalStyle />
                <ReactQueryDevtools />
                <Router>
                    <Switch>
                        <Route component={Cadastro} exact path="/" />
                        <Route component={Login} path="/login" />
                    </Switch>
                </Router>
            </QueryClientProvider>

        </>
    );
}

export default App;