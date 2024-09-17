import React from "react";
import styled from "styled-components";

const AllSeriesCardStyled = styled.div`
  width: 191px;
  height: 275px;
  margin-bottom: 70px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }

  .title {
    text-align: center;
    padding: 18px;
    color: #fff;
    font-size: 15px;
  }
`;

export const AllSeriesCard = ({ img, title }) => {
  return (
    <AllSeriesCardStyled>
      <img src={`https://image.tmdb.org/t/p/original${img}`} alt="Serie" />
      <div className="title">
        <h4>{title}</h4>
      </div>
    </AllSeriesCardStyled>
  );
};
