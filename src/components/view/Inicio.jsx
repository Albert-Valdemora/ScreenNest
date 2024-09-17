import { AllMoviesCard } from "../card/AllMoviesCard";
import { AllSeriesCard } from "../card/AllSeriesCard";
import { MostWatchedSeriesCard } from "../card/MostWatchedSeriesCard";
import { SerieCard } from "../card/SerieCard";
import { Titulo } from "../title/Titulo";
import data from "../../data.json"


export const Inicio = () => {
  const {results} = data
  const series = results.slice(0,4);
  const seriesMasVistas = results.slice(4,8);
  const todasLasSeries = results.slice(0,20);
  const todasLasPeliculas = results.slice(0,6)
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <Titulo titulo='Top 5 Series' color="#FFE400" />
            <Titulo titulo='CATEGORIES' />
            <Titulo titulo='QUICK LINKS' />
          </div>
          <div className="col-1">

          </div>
          <div className=" col-8">

            <section id="Series" className="mb-4">
            <Titulo titulo='Series' />
            <div className="d-flex flex-wrap justify-between mt-3">
              {
                    series.map(s => (
                  <SerieCard key={s.id} img={s.poster_path} title={s.original_title} />
                ))
              }
            </div>
            </section>

            <section id="MostWatchedSeriesCard" className="mb-4">
            <Titulo titulo='Most Watched Series' />
            <div className="d-flex flex-wrap justify-between mt-3">
              {
                seriesMasVistas.map(s => (
                  <MostWatchedSeriesCard key={s.id} img={s.poster_path} title={s.original_title} />
                ))
              }
            </div>
            </section>

            <section id="AllSeriesCard" className="mb-3">
            <Titulo titulo='All Series' />
            <div className="d-flex flex-wrap justify-between mt-3">
              {
                todasLasSeries.map(s => (
                  <AllSeriesCard key={s.id} img={s.poster_path} title={s.original_title} />
                ))
              }
            </div>
            </section>

            <section id="AllSeriesCard" className="mb-3">
            <Titulo titulo='All Series' />
            <div className="d-flex flex-wrap justify-between mt-3">
              {
                todasLasPeliculas.map(s => (
                  <AllMoviesCard key={s.id} img={s.poster_path} title={s.original_title} />
                ))
              }
            </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
