import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const Movies = () => {
  const { movies, isLoading, isError } = useGlobalContext();
  console.log(isError);
  if (isLoading) {
    return <div className='loading'></div>;
  } else {
    return (
      <>
        <section className='movies'>
          {movies.map((item) => {
            return (
              <Link
                to={`/movie/${item.imdbID}`}
                key={item.imdbID}
                className='movie'
              >
                <article>
                  <img
                    src={item.Poster === 'N/A' ? url : item.Poster}
                    alt={item.Title}
                  />
                  <div className='movie-info'>
                    <h4 className='title'>{item.Title}</h4>
                    <p>{item.Year}</p>
                  </div>
                </article>
              </Link>
            );
          })}
        </section>
      </>
    );
  }
};

export default Movies;
