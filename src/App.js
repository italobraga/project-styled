import GlobalStyle from './GlobalStyle'
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Cadastro from './pages/Cadastro';
const queryClient = new QueryClient()


function App() {
    return (
        <>
            <QueryClientProvider client={queryClient} >
                <GlobalStyle />
                
                <ReactQueryDevtools />
                <Cadastro />
            </QueryClientProvider>

        </>
    );
}

export default App;