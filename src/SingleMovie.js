import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from './useFetch';

const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png';

const SingleMovie = () => {
  const { id } = useParams();
  const { isLoading, movies, isError } = useFetch(`i=${id}`);

  if (isLoading) {
    return <div className='loading'></div>;
  } else if (isError.show) {
    return (
      <div className='error-page'>
        <h1>{isError.msg}</h1>
        <Link to='/' className='btn'>
          Home
        </Link>
      </div>
    );
  } else {
    return (
      <section className='single-movie'>
        <img src={movies.Poster || url} alt={movies.Title} />
        <div className='single-movie-info'>
          <h1>{movies.Title}</h1>
          <p>{movies.Plot}</p>
          <h4>{movies.Year}</h4>
          <Link className='btn' to='/'>
            Home
          </Link>
        </div>
      </section>
    );
  }
};

export default SingleMovie;
