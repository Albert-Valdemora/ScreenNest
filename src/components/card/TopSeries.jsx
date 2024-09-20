
export const TopSeries = ({ img, title, overview, top }) => {

  return(
    <div className="flex w-full gap-3 text-white  ">
      <div className="w-80">
        <img src={`https://image.tmdb.org/t/p/original${img}`} alt="Top Serie" className="w-full object-cover" />
      </div>
      <div>
        <h3 className="text-3xl font-extrabold">{top}</h3>
        <h4 className="w-64 truncate text-2xl font-extrabold whitespace-nowrap">{ title }</h4>
        <p className="w-64 truncate">{ overview }</p>
        <p>⭐ 9.5/10</p>
      </div>
    </div>
  );
};