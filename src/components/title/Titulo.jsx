import React from "react";
import styled from "styled-components";

const ContenedorTitulo = styled.div`
  width: 100%;
  display: inline-block;
  margin: 20px 0;
  position: relative;
`;

const TituloH2 = styled.h2`
  font-size: 31px;
  font-weight: 700;
  color: #fff;
  white-space: nowrap;
  z-index: 1;
  margin-bottom: 10px;
`;

const Linea = styled.div`
  position: absolute;
  bottom: 0;
  border-bottom: 3px solid ${(p) => p.color};
`;

const LineaPrincipal = styled(Linea)`
  width: 85%;
  right: 0;
`;

const LineaColor = styled(Linea)`
  width: 15%;
  left: 0;
`;

export const Titulo = ({ titulo, color = "#E50914" }) => {
  return (
    <ContenedorTitulo>
      <LineaPrincipal color="#3a3a3a" />
      <LineaColor color={color} />
      <TituloH2>{titulo}</TituloH2>
    </ContenedorTitulo>
  );
};
