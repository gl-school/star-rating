


// let url = "https://api.andrespect.dev/movie<movie-slug>"

import {useState, useEffect} from 'react';



export default function Poster() {
    


    const updateMovie = event => {
        event.preventDefault(); //prevents form from submitting
        setMovie(event.target.movie.value.trim());
        event.target.movie.value = "";
    }

    const [movie, setMovie] = useState("");
    const [poster, setPoster] = useState("");
    
    const [message, setMessage] = useState("");
    const URL = "https://api.andrespect.dev/movie";

    useEffect(()=> {
        const fetchPoster = async () => {
            try {
                const response = await fetch(`${URL}/${movie}`);
                if(!response.ok){
                    setMessage('Possible Error');
                    throw new Error(`HTTP Error: ${response.status}`);
                }
                const data = await response.json();
                setPoster(data.response.poster);
                
                }
            catch (error){
                setPoster("");
                console.log(error.message);


            }
        
        }

        if (movie.length > 0) fetchPoster(); 

    },[movie]);

    async function getInfo(URL) {
        let x = await fetch(URL);
        console.log(x)
      }

      const moviePoster = <figure><img src={poster} alt='Poster'></img></figure>;
      const notFound = <p>{message}</p>;
  return (
    
      <section >
        <h2>Fetching data with useEffect</h2>
        <form onSubmit={updateMovie}>
            <input  type='text' placeholder='Movie Slug' name='movie'></input>
            <input type='submit' value='Get Poster'></input>
     
        </form>
        {poster.length > 0 ? moviePoster : notFound}
        {message.length > 0 ? notFound : null}
      </section>
  )
}