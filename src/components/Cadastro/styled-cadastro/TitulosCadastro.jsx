import styled from "styled-components";
import { corPrincipal, corClara } from "../../../UI/variaveis";

const TituloStyled = styled.h1`
  font-size: 50px;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  text-align: center;
`;

const TituloBranco = styled(TituloStyled)`
  color: ${corClara};
  font-size: 30px;
`;

const InformacoesEntrar = styled(TituloBranco)`
  font-size: 20px;
`;

export { TituloStyled, TituloBranco, InformacoesEntrar };
