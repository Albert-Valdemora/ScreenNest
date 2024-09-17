import React from "react";
import styled from "styled-components";

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
    background-color: rgba(0, 0, 0, 0.5);
    font-size: 20px;
    font-weight: bold;
  }
`;
export const MostWatchedSeriesCard = ({ img, title }) => {
  return (
    <MostWatchedSeriesCardStyled>
      <img src={`https://image.tmdb.org/t/p/original${img}`} alt="Serie" />
      <div className="title">
        <h2>{title}</h2>
      </div>
    </MostWatchedSeriesCardStyled>
  );
};
