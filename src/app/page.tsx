'use client';
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { MovieCard } from "../../components/Moviecard"


export default function Home() {

  const [movieSearch, setMovieSearch] = useState('')
  const [isDataTrue, setIsDataTrue] = useState(false);
  const [isSearched, setIsSearched] = useState(false);

  const handleClick = () => {
    refetch();
    setIsSearched(true)
  };


  var { data ,isLoading, error, refetch } = useQuery(['MovieData'], () =>
    fetch(`https://movie-database-alternative.p.rapidapi.com/?s=${movieSearch}&r=json&page=1`,
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
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <input className="text-black" type="text" onChange={(e)=>{setMovieSearch(e.target.value);
      }}/>
      <button className="bg-white text-black px-1 py-2" onClick={handleClick}> Search</button>

      {data.Response=="True" && isSearched ? <div>
          {data.Search.map((da)=>(
          <MovieCard title={da.Title} type={da.Type}  />
        ))}
        </div>: ''}

        {isSearched && data.Response == "False" ? 'No Results': ''}

        


    </main>
  )
}
