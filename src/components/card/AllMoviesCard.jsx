import React from "react";
import styled from "styled-components";

  const AllMoviesCardStyled = styled.div`
    width: 325px;
    height: 183px;
    margin-bottom: 60px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 2px;
    }

    .title {
      text-align: center;
      padding: 15px;
      color: #fff;
      font-size: 15px;
    }
  `;
  
export const AllMoviesCard = ({ img, title }) => {
  

  return (
    <AllMoviesCardStyled>
      <img src={`https://image.tmdb.org/t/p/original${img}`} alt="Serie" />
      <div className="title">
        <h4>{title}</h4>
      </div>
    </AllMoviesCardStyled>
  );
};
