import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

const cadastrarUsuario = async (email, password, cpf, nome, sobrenome) => {
  try {
    const resposta = await api.post("http://localhost:5000/register", {
      email: email,
      password: password,
      cpf: cpf,
      nome: nome,
      sobrenome: sobrenome
    });
    return resposta.data;
  } catch (error) {
    console.log("Erro: ", error);
  }
};

export { cadastrarUsuario, api };