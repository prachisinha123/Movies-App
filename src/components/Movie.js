import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [modalData, setModalData] = useState(null);
  const searchInputRef = useRef(null);
//   const url = 'https://demo.onefin.in/api/v1/usermodule/login/';
 
      const fetchMovies = async(url) => {
    setLoading(true);
    setError(null);
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.get(url, {
        headers: {
          'Authorization': `Token ${token}`,
        },
      });

      setMovies (response.data.data);
      setNextPage(response.data.data.next);
    } catch (error) {
      console.error('Error fetching movies:', error.message);
      setError('Failed to fetch movies. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchMovies('https://demo.onefin.in/api/v1/maya/movies/');
  };

  const handleCardClick = (movie) => {
    setModalData(movie);
  };

  const handleCloseModal = () => {
    setModalData(null);
  };

  const handleSearch = () => {
    const searchText = searchInputRef.current.value;
    if (searchText.length >= 3) {
      // Implement your search logic here
      console.log('Search:', searchText);
    }
  };

  useEffect(() => {
    fetchMovies('https://demo.onefin.in/api/v1/maya/movies/');
  }, []); // Fetch movies on component mount


  return (
    <div>
      <h2 className="movie">Movies Page</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <>
          <p>{error}</p>
          <button  onClick={handleRefresh}>Refresh</button>
        </>
      ) : (
        <>
          <div>
            {/* Search functionality */}
            <input
              type="text"
              placeholder="Search movies..."
              ref={searchInputRef}
              onChange={() => setTimeout(handleSearch, 250)}
            />
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {movies.map((movie) => (
              <div key={movie.uuid} className="movie-card" onClick={() => handleCardClick(movie)}>
                {/* <img src={`https://ui-avatars.com/https://demo.onefin.in/api/v1/maya/movies/?name=${movie.title}`} alt={movie.title} /> */}
                <img src={`https://ui-avatars.com/https://demo.onefin.in/v1/maya/movies/?name=${movie.title}`} alt={movie.title} />
                <h3>{movie.title}</h3>
                <p>{movie.description.slice(0, 50)}...</p>
                <p>Genres: {movie.genres}</p>
              </div>
            ))}
          </div>
        </>
      )}
      {nextPage && (
        <button onClick={() => fetchMovies(nextPage)}>Load More</button>
      )}
      {modalData && (
        <div className="modal">
          {/* <img src={`https://ui-avatars.com/https://demo.onefin.in/api/v1/maya/movies/?name=${modalData.title}`} alt={modalData.title} /> */}
          <img src={`https://ui-avatars.com/https://demo.onefin.in/api/v1/maya/movies/?name=${modalData.title}`} alt={modalData.title} />
          <h3>{modalData.title}</h3>
          <p>{modalData.description}</p>
          <p>Genres: {modalData.genres}</p>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      )}
    </div>
  );
};

export default MoviesPage;







