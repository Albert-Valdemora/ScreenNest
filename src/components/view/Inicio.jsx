import { AllMoviesCard } from "../card/AllMoviesCard";
import { AllSeriesCard } from "../card/AllSeriesCard";
import { MostWatchedSeriesCard } from "../card/MostWatchedSeriesCard";
import { SerieCard } from "../card/SerieCard";
import { Titulo } from "../title/Titulo";
import { TopSeries } from "../card/TopSeries";
import { useContext } from "react";
import { SecondNavbar } from "../menu/SecondNavbar";
import { AuthContext } from "../../auth/authContext";
import { Busqueda } from "../busqueda/Busqueda";
import { Footer } from "../pie/Footer";
import './inicio.scss';


export const Inicio = () => {
  const categorias = ["Best Movies", "Best Movies", "Best Movies"];
  const {
    serie,
    mostWatchedSeries,
    allSerie,
    allMovie,
    topSerie,
    search,
    peliculaEncontrada,
  } = useContext(AuthContext);

  const series = serie.results?.slice(4, 8) || [];
  const seriesMasVistas = mostWatchedSeries.results?.slice(4, 8) || [];
  const todasLasSeries = allSerie.results?.slice(0, 20) || [];
  const todasLasPeliculas = allMovie.results?.slice(0, 6) || [];
  const topSeries = topSerie.results?.slice(0, 5) || [];

  return (
    <>
      <div className="container">
        <div className="row container-screen-full">
          <div className="col-3">
            <Titulo titulo="Top 5 Series" color="#FFE400" />
            <div className="flex flex-col gap-4">
              {topSeries.map((s, i) => (
                <TopSeries
                  key={s.id}
                  img={s.poster_path}
                  title={s.original_name}
                  overview={
                    s.overview === ""
                      ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                      : s.overview
                  }
                  top={i + 1 + "°"}
                  range={s.vote_average}
                />
              ))}
            </div>

            <Titulo titulo="CATEGORIES" />
            <div className="">
              {categorias.map((e, i) => (
                <button key={i} className="text-[#636363] flex gap-24 mb-2">
                  {e}
                  <span className="text-white"> ⬅️</span>
                </button>
              ))}
            </div>
            <Titulo titulo="QUICK LINKS" />

            <div>
              <SecondNavbar />
            </div>
          </div>

          <div className="col-1"></div>

          <div className="col-8">
            <section id="search" className="mb-4 mt-3">
              <Busqueda />
            </section>

            {search.length >= 1 ? (
              <div>
                <Titulo titulo={`Resultados de búsqueda para: ${search}`} />
                <div className="d-flex flex-wrap justify-between mt-3">
                  {peliculaEncontrada.map((pelicula) => (
                    <AllMoviesCard
                      key={pelicula.id}
                      id={pelicula.id}
                      img={pelicula.poster_path}
                      title={pelicula.original_title}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <>
                <section id="Series" className="mb-4">
                  <Titulo titulo="Series" />
                  <div className="w-full d-flex flex-wrap justify-between mt-3 container-series">
                    {series.map((s) => (
                      <SerieCard
                        key={s.id}
                        id={s.id}
                        img={s.poster_path}
                        title={s.original_name}
                      />
                    ))}
                  </div>
                </section>

                <section id="MostWatchedSeriesCard" className="mb-4">
                  <Titulo titulo="Most Watched Series" />
                  <div className="d-flex flex-wrap justify-between mt-3 container-most-serie">
                    {seriesMasVistas.map((s) => (
                      <MostWatchedSeriesCard
                        key={s.id}
                        id={s.id}
                        img={s.poster_path}
                        title={s.original_name}
                      />
                    ))}
                  </div>
                </section>

                <section id="AllSeriesCard" className="mb-3">
                  <Titulo titulo="All Series" />
                  <div className="d-flex flex-wrap justify-between mt-3 container-all-serie">
                    {todasLasSeries.map((s) => (
                      <AllSeriesCard
                        key={s.id}
                        id={s.id}
                        img={s.poster_path}
                        title={s.original_name}
                      />
                    ))}
                  </div>
                </section>

                <section id="AllSeriesCard" className="mb-3">
                  <Titulo titulo="All Movies" />
                  <div className="d-flex flex-wrap justify-between mt-3 container-all-movie">
                    {todasLasPeliculas.map((s) => (
                      <AllMoviesCard
                        key={s.id}
                        id={s.id}
                        img={s.poster_path}
                        title={s.original_title}
                      />
                    ))}
                  </div>
                </section>
                <Titulo titulo="" />
              </>
            )}
          </div>
        </div>
      </div>
      <div className=" bg-[#636363] w-full mt-10 h-10 ">
        <Footer />
      </div>
    </>
  );
};
