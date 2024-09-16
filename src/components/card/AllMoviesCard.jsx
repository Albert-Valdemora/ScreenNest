import React from "react";
import styled from "styled-components";

export const AllMoviesCard = ({ img, title }) => {
  
  const AllMoviesCardStyled = styled.div`
    width: 325px;
    height: 183px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
    }

    .title {
      text-align: center;
      padding: 5px;
      color: #fff;
    }
  `;

  return (
    <AllMoviesCardStyled>
      <img src={`https://image.tmdb.org/t/p/original${img}`} alt="Serie" />
      <div className="title">
        <h4>{title}</h4>
      </div>
    </AllMoviesCardStyled>
  );
};
