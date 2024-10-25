import React, { useContext } from "react";
import { useSearch } from "../../hooks/useSearch";
import { AuthContext } from "../../auth/authContext";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  color: white;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;

  h2{
    font-weight: 700;
    font-size: 1.5rem;
  }
`;

const Header = styled.header`
  position: relative;
  margin-bottom: 20px;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 700px;
  object-fit: contain;
  border-radius: 12px;
`;

const Title = styled.h2`
  margin: 10px 0;
  font-size: 2rem;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
`;

const Overview = styled.p`
  font-size: 1rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.5;
`;

const ButtonContainer = styled.div`
  margin: 15px 0;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #e50914;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e91e63;
  }
`;

const RelatedCards = styled.div`
  max-width: 1200px;
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

const Card = styled.div`
  width: 200px;
  height: 300px;
  margin: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 5px;
  text-align: center;
  transition: transform 0.3s ease;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 88%;
    border-radius: 10px;
    padding: 5px;
    object-fit: cover;
  }


  &:hover{
    transform: scale(1.05); 
  }
`;

export const MoviePeli = () => {
  const { serie, allMovie, peliculaEncontrada } = useContext(AuthContext);
  const { moviePeliId } = useParams();

  const selectedSerie = useSearch(serie?.results || [], moviePeliId);
  const selectedMovie = useSearch(allMovie?.results || [], moviePeliId);
  const selectedSearchMovie = useSearch(peliculaEncontrada?.results || [], moviePeliId);
  
  const hero = selectedSerie || selectedMovie || selectedSearchMovie;
  
  
  const isSerie = !!selectedSerie;
  const relatedMovies = isSerie ? serie.results : allMovie.results; 
  
  if (!hero) {
    return <Container>No se encontró la información</Container>;
  }

  return (
    <Container>
      <Header>
        <HeroImage
          src={`https://image.tmdb.org/t/p/original${hero.poster_path}`}
          alt={hero.original_name || hero.original_title}
        />
        <Title>{hero.original_name || hero.original_title}</Title>
        <Overview>{hero.overview}</Overview>
        <ButtonContainer>
          <Button>Agregar a Favoritos</Button>
          <Button>Compartir</Button>
        </ButtonContainer>
      </Header>
      
      <h2>Películas Relacionadas</h2>
      <RelatedCards>
        {relatedMovies.map((related) => (
          <Card key={related.id}>
            <Link to={`/moviePeli/${related.id}`}>
            <img src={`https://image.tmdb.org/t/p/w500${related.poster_path}`} alt={related.original_title || related.original_name} />
            <h4>{related.original_title || related.original_name}</h4>
            </Link>
          </Card>
        ))}
      </RelatedCards>
    </Container>
  );
};
