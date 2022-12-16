function MovieDetails ({posterUrl, title, rated, runtime, genre, plot, actors, rating}) {
    return (
      <div className='app'>
        <h1>Movies</h1>
    
        <div className='search'>
          <input
            placeholder='Search for movies'
            value=''
            onChange={() => {}}
          />
    
          <img 
            src={SearchIcon}
            alt='search'
            onClick={() => {}}
          />
    
        </div>
    
        <div className='container'>
        <div className='movie-card'>
                <div className='poster'>
                <img src={posterUrl} alt={title} />
                </div>
            
                <div className='card-body'>
                    <h1>Movie title</h1>
                    <h2>{rated}, {runtime}</h2>
                    <h2>{genre}</h2><br></br>
                    <h2>Plot</h2>
                    <p>{plot}</p><br></br>
                    <h2>Actors</h2>
                    <p>{actors}</p>
                    
    
                    
    
                </div>
    
            </div> 
    
        </div>
    
      </div>
    );
    }
    
    
    export default App;