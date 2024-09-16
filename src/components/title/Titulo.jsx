import React from "react";
import styled from "styled-components";

  const ContenedorTitulo = styled.div`
    width: 100%;
    display: inline-block;
    border-bottom: 2px solid #3a3a3a;
    margin: 20px 0;
  `;
  const TituloH2 = styled.h2`
    font-size: 31px;
    font-weight: 700;
    color: #fff;
    white-space: nowrap;
  `;
  const Separador = styled.div`
    width: 91px;
    border-bottom: 2px solid ${p => p.color};
  `;

export const Titulo = ({ titulo, color = "#E50914" }) => {

  return (
    <ContenedorTitulo>
      <Separador color={color}>
        <TituloH2>{titulo}</TituloH2>
      </Separador>
    </ContenedorTitulo>
  );
};
