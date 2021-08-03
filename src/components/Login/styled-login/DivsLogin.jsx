import styled from "styled-components";
import { corClara } from "../../../UI/variaveis";

const DivLogin = styled.div`
  background-color: ${corClara};
  width: 30%;
  height: 50vh;
  border-radius: 20px;
  margin-top: 27vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 1px 1px #212121;
`;

const DivFormulario = styled.div`
  width: 70%;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 10vh;
`;

const DivRodapeLogin = styled.div`
  text-align: center;
  margin-top: 10px;
`;
export { DivLogin, DivFormulario, DivRodapeLogin };
