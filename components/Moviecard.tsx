export const MovieCard = ({title , type, year, poster}:{title:string, type:string, year:string, poster: string})=>{
  return(
    <div className="flex flex-col">
      <img src={poster} alt="poster" />
      <p className="text-xl bold my-.5">{title}</p>
      <div className="w-full flex flex-row justify-between py-1 my-1">
        <p className="text-lg w-3/4">{year}</p>
        <p className="text-lg bg-white ml-5 w-1/4">{type}</p>
      </div>
    </div>
  )
}