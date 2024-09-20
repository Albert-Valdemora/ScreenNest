import { AllMoviesCard } from "../card/AllMoviesCard";
import { AllSeriesCard } from "../card/AllSeriesCard";
import { MostWatchedSeriesCard } from "../card/MostWatchedSeriesCard";
import { SerieCard } from "../card/SerieCard";
import { Titulo } from "../title/Titulo";
import data from "../../data.json";
import { TopSeries } from "../card/TopSeries";
import { useState } from "react";
import { SecondNavbar } from "../menu/SecondNavbar";

export const Inicio = () => {
  
  const [categorias, setCategorias] = useState(['Best Movies', 'Best Movies', 'Best Movies'])
  const { results } = data;

  const series = results.slice(0, 4);
  const seriesMasVistas = results.slice(4, 8);
  const todasLasSeries = results.slice(0, 20);
  const todasLasPeliculas = results.slice(0, 6);
  const topSeries = results.slice(0, 5);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">

            <Titulo titulo="Top 5 Series" color="#FFE400" />
            <div className="flex flex-col gap-4">
              {topSeries.map((s, i) => (
                <TopSeries
                  key={s.id}
                  img={s.poster_path}
                  title={s.original_title}
                  overview={s.overview}
                  top={(i + 1) + "°"}
                />
              ))}
            </div>

            <Titulo titulo="CATEGORIES" />
            <div className="">
              {
                categorias.map((e, i) => (
                  <button key={i} className="text-[#636363] flex gap-24 mb-2">{e}<span className="text-white"> ⬅️</span></button>
                ))
              }
            </div>

            <Titulo titulo="QUICK LINKS" />
            <div>
              <SecondNavbar />
            </div>

          </div>

          <div className="col-1"></div>

          <div className=" col-8">

            <section id="Series" className="mb-4">
              <Titulo titulo="Series" />
              <div className="d-flex flex-wrap justify-between mt-3">
                {series.map((s) => (
                  <SerieCard
                    key={s.id}
                    img={s.poster_path}
                    title={s.original_title}
                  />
                ))}
              </div>
            </section>

            <section id="MostWatchedSeriesCard" className="mb-4">
              <Titulo titulo="Most Watched Series" />
              <div className="d-flex flex-wrap justify-between mt-3">
                {seriesMasVistas.map((s) => (
                  <MostWatchedSeriesCard
                    key={s.id}
                    img={s.poster_path}
                    title={s.original_title}
                  />
                ))}
              </div>
            </section>

            <section id="AllSeriesCard" className="mb-3">
              <Titulo titulo="All Series" />
              <div className="d-flex flex-wrap justify-between mt-3">
                {todasLasSeries.map((s) => (
                  <AllSeriesCard
                    key={s.id}
                    img={s.poster_path}
                    title={s.original_title}
                  />
                ))}
              </div>
            </section>

            <section id="AllSeriesCard" className="mb-3">
              <Titulo titulo="All Series" />
              <div className="d-flex flex-wrap justify-between mt-3">
                {todasLasPeliculas.map((s) => (
                  <AllMoviesCard
                    key={s.id}
                    img={s.poster_path}
                    title={s.original_title}
                  />
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
};
