'use client';
import { useQuery } from "@tanstack/react-query";

export default function Movie({params}:{params:{id: string}}){

//  if (typeof window !== "undefined") {
//   const urlParams = new URLSearchParams(window.location.search);
//   var imdbId = urlParams.get('id');
// }


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

        <div className="w-3/4 flex flex-col my-12">
          <div className="flex justify-between">
            <img className="w-1/4" src={data.Poster} alt="" />
            <div className="w-3/4 px-9">
              <p className="text-5xl bold">{data.Title}</p>
            </div>
          </div>
        </div>
          {/* <p>{data.Actors}</p> */}

        </div>
    )
}