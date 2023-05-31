export const MovieCard = ({title , type, year, poster}:{title:string, type:string, year:string, poster: string})=>{
  return(
    <div className="flex flex-col border-solid border-white p-1">
      <img src={poster} alt="poster" />
      <p className="text-3xl bold my-.5 text-white py-7">{title}</p>
      <div className="w-full flex flex-row justify-between py-1 my-1">
        <p className="text-lg w-3/4 text-white">{year}</p>
        <p className="text-lg bg-white ml-5 w-1/4 text-white">{type}</p>
      </div>
    </div>
  )
}