'use client';
import { useQuery } from "@tanstack/react-query";

export default function Movie({params}:{params:{id: string}}){




    var { data ,isLoading, error } = useQuery(['MovieData'], () =>
    fetch(`https://movie-database-alternative.p.rapidapi.com/?r=json&i=tt4154796`,
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

    console.log(data);
    


    if (error) return 'An error has occurred: ' + {error}


    return(
        <>
          {/* {data.map((d)=>(
              <p>{d.Actors}</p>
          ))} */}

          <p>{params.id}</p>
          <p>{data.Actors}</p>

        </>
    )
}