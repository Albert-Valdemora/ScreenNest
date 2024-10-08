import { useEffect, useState } from "react";
import { AuthContext } from "./auth/authContext";
import { AppRouter } from "./components/routers/AppRouter";
import { useHttp } from "./hooks/useHttp";

const urlSerie = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=es-ES&page=1&sort_by=vote_average.asc&api_key=b0a9ee189c3906a9d1b7278103141c0d';
const urlSeriesMasVistas = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=es-ES&page=1&sort_by=popularity.desc&api_key=b0a9ee189c3906a9d1b7278103141c0d';
const urlTodasLasSeries = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=es-ES&page=2&sort_by=popularity.desc&api_key=b0a9ee189c3906a9d1b7278103141c0d';
const urlTodasLasPeliculas = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-ES&page=1&sort_by=popularity.desc&api_key=b0a9ee189c3906a9d1b7278103141c0d'
const urlTopSerie = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=es-ES&page=1&sort_by=popularity.desc&api_key=b0a9ee189c3906a9d1b7278103141c0d'

export const App = () => {
  const [serie, setSerie] = useState([]);
  const [mostWatchedSeries, setMostWatchedSeries] = useState([]);
  const [allSerie, setAllSerie] = useState([]);
  const [allMovie, setAllMovie] = useState([]);
  const [topSerie, setTopSerie] = useState([]);


  const { data: serieData } = useHttp(urlSerie);
  const { data: mostWatchedSeriesData } = useHttp(urlSeriesMasVistas);
  const { data: allSeriData } = useHttp(urlTodasLasSeries);
  const { data: allMovieData } = useHttp(urlTodasLasPeliculas);
  const { data: topSerieData } = useHttp(urlTopSerie);

  useEffect(() => {
    if (serieData) {
      setSerie(serieData);
    }
    if (mostWatchedSeriesData) {
      setMostWatchedSeries(mostWatchedSeriesData);
    }
    if(allSeriData){
      setAllSerie(allSeriData)
    }
    if (allMovieData) {
      setAllMovie(allMovieData)
    }
    if (topSerieData) {
      setTopSerie(topSerieData)
    }

  }, [serieData, mostWatchedSeriesData, allSeriData, allMovieData, topSerieData]);

  return (
    <AuthContext.Provider value={{
      serie,
      mostWatchedSeries,
      allSerie,
      allMovie,
      topSerie
    }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
