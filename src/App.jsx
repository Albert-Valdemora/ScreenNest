import { MostWatchedSeriesCard } from "./components/card/MostWatchedSeriesCard";
import { SerieCard } from "./components/card/SerieCard";
import { AppRouter } from "./components/routers/AppRouter";
import { Titulo } from "./components/title/Titulo";

import data from "./data.json"

export const App = () => {
  const {results} = data
  const series = results.slice(0,4);
  const SeriesMasVistas = results.slice(4,8);
  
  return (
    <>
      <AppRouter />
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Titulo titulo='Top 5 Series' color="#FFE400" />
          </div>
          <div className="col-1">

          </div>
          <div className=" col-9">

            <section id="Series" className="mb-5">
            <Titulo titulo='Series' />
            <div className="d-flex flex-wrap justify-between mt-3">
              {
                    series.map(s => (
                  <SerieCard key={s.id} img={s.poster_path} title={s.title} />
                ))
              }
            </div>
            </section>

            <section id="MostWatchedSeriesCard">
            <Titulo titulo='Most Watched Series' />
            <div className="d-flex flex-wrap justify-between mt-3">
              {
                SeriesMasVistas.map(s => (
                  <MostWatchedSeriesCard key={s.id} img={s.poster_path} title={s.title} />
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
