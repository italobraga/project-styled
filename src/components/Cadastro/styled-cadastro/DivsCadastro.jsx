import styled from "styled-components";
import { corClara } from "../../../UI/variaveis";

const DivCadastro = styled.div`
background-color: #f1f1f1;
display: flex;
flex-direction: row;
`

const DivEsquerda = styled.div`
  width: 40%;
  background-color: #3f51b5;
  height: 100vh;
  box-shadow: 0px 0px 0px 0px black;
`;

const DivTextoEsquerda = styled.div`
  margin-top: 40vh;
  height: 15vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const DivDireita = styled.div`
  width: 60%;
  background-color: ${corClara};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 5px 0px black;
`;

const DivFormulario = styled(DivDireita)`
  width: 40%;
  margin-top: 29vh;
  box-shadow: 0px 0px 0px 0px black;
  box-sizing: border-box;
`;

const DivCampos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
`;



export { DivCadastro, DivEsquerda, DivTextoEsquerda, DivDireita, DivFormulario, DivCampos };
