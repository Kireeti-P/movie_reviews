export const MovieCard = ({title , type, year, poster}:{title:string, type:string, year:string, poster: string})=>{
  return(
    <div className="flex flex-col">
      <img src={poster} alt="poster" />
      <p>{title}</p>
      <div className="flex justify-between">
        <p>{year}</p>
        <p>{type}</p>
      </div>
    </div>
  )
}