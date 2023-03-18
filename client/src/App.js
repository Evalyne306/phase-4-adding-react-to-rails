// import { useEffect } from "react";

// function App() {
//   useEffect(() => {
//     fetch("/movies")
//       .then((r) => r.json())
//       .then((movies) => console.log(movies));
//   }, []);

//   return <h1>Hello from React!</h1>;
// }

// export default App;
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => setMovies(movies));
  }, []);

  return (
    <div>
      <h1>Hello from React!</h1>
      <ul>
        {movies.map((movie) => (
                     <div>
                     <h2>{movie.title}</h2>
                     <p>{movie.year}</p>
                     <p>{movie.length}</p>
                     <p>{movie.director}</p>
                     <p>{movie.description}</p>
                     <img src={movie.poster_url} alt={movie.title} />
                     <p>{movie.category}</p>
                     <p>{movie.discount}</p>
                     <p>{movie.female_director}</p>
                   </div>
        ))}
      </ul>
    </div>
  );
}

export default App;