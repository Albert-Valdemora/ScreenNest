import React from "react";
import styled from "styled-components";

export const SerieCard = ({ img, title }) => {

  const SerieCardStyled = styled.div`
    width: 242px;
    height: 171px;
    position: relative;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }

    .title {
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 0;
      border-radius: 0 0 12px 12px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.4);
    }
  `;

  return (
    <SerieCardStyled>
      <img src={img} alt="Serie" />
      <div className="title">
        <h2>{title}</h2>
      </div>
    </SerieCardStyled>
  );
};
