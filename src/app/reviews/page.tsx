'use client';
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export default function Movie(){

  
  
  const urlParams = new URLSearchParams(window.location.search);
  const imdbId = urlParams.get('id');


    var { data ,isLoading, error } = useQuery(['MovieData'], async() =>
    await fetch(`https://movie-database-alternative.p.rapidapi.com/?r=json&i=${imdbId}`,
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
        <>
          {/* {data.map((d)=>(
              <p>{d.Actors}</p>
          ))} */}

          <p>{imdbId}</p>
          <p>{data.Actors}</p>

        </>
    )
}