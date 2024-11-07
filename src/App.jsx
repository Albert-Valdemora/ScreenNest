import { useEffect, useState } from "react";
import { AuthContext } from "./auth/authContext";
import { AppRouter } from "./components/routers/AppRouter";
import { useHttp } from "./hooks/useHttp";

const urlSerie = process.env.REACT_APP_urlSerie;
const urlSeriesMasVistas = process.env.REACT_APP_urlSeriesMasVistas;
const urlTodasLasSeries = process.env.REACT_APP_urlTodasLasSeries;
const urlTodasLasPeliculas = process.env.REACT_APP_urlTodasLasPeliculas;
const urlTopSerie = process.env.REACT_APP_urlTopSerie;

export const App = () => {
  const [serie, setSerie] = useState([]);
  const [mostWatchedSeries, setMostWatchedSeries] = useState([]);
  const [allSerie, setAllSerie] = useState([]);
  const [allMovie, setAllMovie] = useState([]);
  const [topSerie, setTopSerie] = useState([]);
  const [search, setSearch] = useState([]);
  const [peliculaEncontrada, setPeliculaEncontrada] = useState([])


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

  const { data: peliculaSearch } = useHttp(
    search 
      ? `https://api.themoviedb.org/3/search/multi?query=${encodeURIComponent(search)}&include_adult=false&language=es-ES&page=1&api_key=b0a9ee189c3906a9d1b7278103141c0d` 
      : ''
  );
  

  useEffect(() => {
    if (peliculaSearch) {
      setPeliculaEncontrada(peliculaSearch.results || []);
    }
  }, [peliculaSearch]);
  

  return (
    <AuthContext.Provider value={{
      serie,
      mostWatchedSeries,
      allSerie,
      allMovie,
      topSerie,
      search,
      setSearch,
      peliculaEncontrada

    }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
