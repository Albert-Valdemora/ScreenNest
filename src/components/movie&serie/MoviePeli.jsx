import React, { useContext } from "react";
import { useSearch } from "../../hooks/useSearch";
import { AuthContext } from "../../auth/authContext";
import { useParams } from "react-router-dom";

export const MoviePeli = () => {
  const { serie, allMovie, peliculaEncontrada } = useContext(AuthContext);
  const { moviePeliId } = useParams();
  
  const selectedSerie = useSearch(serie?.results || [], moviePeliId);
  const selectedMovie = useSearch(allMovie?.results || [], moviePeliId);
  const selectedSearchMovie = useSearch(peliculaEncontrada?.results || [], moviePeliId);
  console.log(selectedSerie);
  console.log(selectedMovie);
  console.log(selectedSearchMovie);


  const hero = selectedSerie || selectedMovie || selectedSearchMovie;

  if (!hero) {
    return <div className="text-white">No se encontró la información</div>;
  }

  return (
    <div className="text-white">
      <h1>{hero.original_name || hero.original_title}</h1>
      <p>{hero.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/original${hero.poster_path}`}
        alt={hero.original_name || hero.original_title}
      />
    </div>
  );
};
