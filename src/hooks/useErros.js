import { useState } from 'react'

const useErros = (validacoes) => {
    const [erros, setErros] = useState({
        email: { valido: true, mensagem: "" },
        senha: { valido: true, mensagem: "" },
        cpf: { valido: true, mensagem: "" },
        nome: { valido: true, mensagem: "" },
        sobrenome: { valido: true, mensagem: "" },
      });
      const validarCampos = (event) => {
        const { name, value } = event.target;
        const novoEstado = { ...erros };
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    const validarAvancar = () => {
        for(let erro in erros){
            console.log(erros[erro]);
            if(erros[erro].valido === false){
                return false;
            }
        }
        return true;
    }

    return [erros, validarCampos, validarAvancar];
};

  

export default useErros;