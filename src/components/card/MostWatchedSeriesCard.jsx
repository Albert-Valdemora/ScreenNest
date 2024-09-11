import React from "react";
import styled from "styled-components";

export const MostWatchedSeriesCard = ({ img, title }) => {

  const MostWatchedSeriesCardStyled = styled.div`
    width: 232px;
    height: 336px;
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
      height: 170px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2px;
      position: absolute;
      bottom: 0;
      border-radius: 0 0 12px 12px;
      color: #fff;
      background-color: rgba(0, 0, 0, .5);
    }
  `;

  return (
    <MostWatchedSeriesCardStyled>
      <img src={img} alt="Serie" />
      <div className="title">
        <h2>{title}</h2>
      </div>
    </MostWatchedSeriesCardStyled>
  );
};
