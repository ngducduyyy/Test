import React, { useEffect, useState } from 'react'
import data from "../data.json";
import Movie from './Movie';
import { Link } from 'react-router-dom';
const NewRelease = () => {
    const [release, setRelease] = useState([]);
  return (
    <div className='release'>
        <h2>New Realease</h2>
        {data.map((movieItem) => (
          <li key={movieItem.id}>
            <Link to={`/Detail/${movieItem.id}`}>
            <Movie key={movieItem.id}/>
            </Link>
          </li>
        ))}
        
        
    </div>
  )
}

export default NewRelease