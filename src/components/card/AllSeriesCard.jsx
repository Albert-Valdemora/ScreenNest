import React from "react";
import styled from "styled-components";

export const AllSeriesCard = ({ img, title }) => {
  
  const AllSeriesCardStyled = styled.div`
    width: 191px;
    height: 275px;

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
    <AllSeriesCardStyled>
      <img src={img} alt="Serie" />
      <div className="title">
        <h4>{title}</h4>
      </div>
    </AllSeriesCardStyled>
  );
};
