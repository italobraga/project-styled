import styled from "styled-components";
import { fontPadrao } from "../../../UI/variaveis";

export const BtnLogin = styled.a`
  background-color: transparent;
  border: 2px solid #f1f1f1;
  border-radius: 5px;
  color: #f1f1f1;
  font-family: ${fontPadrao};
  padding: 10px;
  text-decoration: none;
  text-align: center;
  width: 20%;
  &:hover {
    cursor: pointer;
  }
`;
