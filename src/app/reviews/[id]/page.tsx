'use client';
import { useQuery } from "@tanstack/react-query";

export default function Movie({params}:{params:{id: string}}){


    var { data ,isLoading, error } = useQuery(['MovieData'], async() =>
    await fetch(`https://movie-database-alternative.p.rapidapi.com/?r=json&i=${params.id}`,
    {
      headers:{
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': 'e3b6640231msh4d2aebecc4e6d1ap1c888fjsn8e833d2c5c08',
        'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
      },

    }
    ).then(res =>
      res.json(),
    ))

    if (isLoading) return 'Loading...'
    


    if (error) return 'An error has occurred: ' + {error}

    return(
        <div className="flex justify-center align-center w-full">

        <div className="w-3/4 flex flex-col my-12 pt-12">
          <div className="flex justify-between">
            <img className="w-1/4" src={data.Poster} alt="" />
            <div className="w-3/4 px-9">
              <p className="text-5xl bold flex align-middle text-white">{data.Title} <span className="text-sm ml-2">({data.Released})</span></p>
              <p className="mt-3 text-white">Rating: {data.imdbRating}</p>
              <div className="flex mt-5 text-white">
                <p>Year: {data.Year}</p>
                <p className="ml-5">Runtime: {data.Runtime}</p>
              </div>

              <p className="text-white my-3">Writer: {data.Writer}</p>
              <p className="text-white">Actors: {data.Actors}</p>
              <p className="text-white text-2xl mt-7">Plot:</p>
              <p className="mt-1 ml-3 text-lg bold text-gray-300">{data.Plot}</p>
              
              {data.Ratings? 
              <>
                <p className="text-white mt-7 text-2xl">Ratings:</p>
              {data.Ratings.map((rating:any)=>(
                <>
                <p className="text-white ml-3">{rating.Source}: {rating.Value}</p>
                </>
              ))}
              </>:''}

              
            </div>
          </div>
        </div>
          {/* <p>{data.Actors}</p> */}

        </div>
    )
}