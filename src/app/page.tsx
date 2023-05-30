'use client';
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { MovieCard } from "../../components/Moviecard"
import Link from "next/link";

interface details 
  {
    "Title": string,
    "Year": string,
    "imdbID": string,
    "Type": string,
    "Poster": string
}




export default function Home() {

  const [movieSearch, setMovieSearch] = useState('')
  const [isSearched, setIsSearched] = useState(false);


  const handleClick = () => {
    // return ()=>{
      refetch();
      setIsSearched(true)
    // }
  };


  var { data ,isLoading, error, refetch } = useQuery(['MovieData'], async() =>
    await fetch(`https://movie-database-alternative.p.rapidapi.com/?s=${movieSearch}&r=json&page=1`,
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

      <p className="text-3xl text-white text-center my-5">Watch What is Best For You</p>
      <div className="flex w-1/2 border-solid border-white bg-red-600 justify-center rounded-lg overflow-hidden">
        <input className="text-black w-3/4 outline-none border-none p-2" placeholder="Movie name" type="text" onChange={(e)=>{setMovieSearch(e.target.value);}}/>
        <button className="text-black px-1 py-2 cursor-pointer w-1/4 bg-slate-400" onClick={handleClick}> Search</button>
      </div>
      

      {data.Response=="True" && isSearched ?
       <div className="w-10/12 grid grid-cols-3 gap-12 my-12">      
          {data.Search.map((details: details, index:number)=>(
            <Link
              href = {`/reviews/${details.imdbID}`}
              key={index}
            >
            <MovieCard key={index} title={details.Title} type={details.Type} year={details.Year} poster={details.Poster} />
          </Link>
            
          
          ))}
        </div> : ''}

        {isSearched && data.Response == "False" ? `${data.Error}`: ''}

        


    </main>
  )
}
