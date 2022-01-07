import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (searchParam) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isError, setIsError] = useState({ show: false, msg: '' });
  const url = `https://www.omdbapi.com/?${searchParam}&apikey=7e897cb3`;
  const fetchData = async (url) => {
    setIsLoading(true);
    try {
      const resp = await axios.get(url);
      const data = resp.data;
      if (data.Response === 'True') {
        setMovies(data.Search || data);
        setIsError({ show: false, msg: '' });
      } else {
        setIsError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      setIsError({ show: true, msg: 'Network Error' });
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [searchParam]);
  return { isLoading, movies, isError };
};

export default useFetch;
