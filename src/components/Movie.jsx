import React, {useState} from 'react';
import data from "../data.json";

const Movie = () => {
  const [select, setSelect] = useState(null);

  const handleMovieClick = (item) => {
    setSelect(item);
  };

  return (
    <div>
      <div>
        <h2>Explore</h2>
        <h3 className='gonna-watch'>What are you gonna watch today ?</h3>
        <div>
      </div>
        <div className='explore-main'>
        {select && (
            <div className='explore' key={select.id}>
              <div className='select-img'>
              <img src={select.image} />
              </div>
              <div className='explore-container'>
              <h1>{select.movieName}</h1>
              <h5>{select.description}</h5>
              </div>
            </div>
          )}
          {!select &&
            data.slice(0,1).map((item) => (
              <div className='explore' key={item.id}>
                <div>
                  <img src={item.image}/>
                </div>
                <div className='explore-container'>
                  <h1>{item.movieName}</h1>
                  <h5>{item.description}</h5>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className='release-container'>
        <h2>New Release</h2>
        <div className='movie-release'>
          {data.slice(1).map((data) => (
            <div className="grid-container" key={data.id} onClick={() => handleMovieClick(data)}>
              <img src={data.image} />
              <h5 >Episode {data.episode}</h5>
              <h4>{data.movieName}</h4>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default Movie;