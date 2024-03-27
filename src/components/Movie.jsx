import React from 'react'
import { Link } from 'react-router-dom'
import data from "../data.json";
const Movie = () => {
  return (
    <div key={data.id}>
        {data.slice(1, 8).map((data) => (
            <div>
            <div>
                <img src={data.image} />
                <div >
                   <h5 >Episode {data.episode}</h5>
                </div>
             </div>
             <div>
             <h4>{data.movieName}</h4>
             </div>
        </div>
        ))}
    </div>
  )
}

export default Movie