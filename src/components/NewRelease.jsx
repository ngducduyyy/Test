import React, { useEffect, useState } from 'react'
import data from "../data.json";
import Movie from './Movie';
import { Link } from 'react-router-dom';
const NewRelease = () => {
    const [release, setRelease] = useState([]);
  return (
    <div className='release'>
        <h2>New Realease</h2>
        <Link to={`/Detail/${data.id}`}>
        <Movie key={data.id}/>
        </Link>
    </div>
  )
}

export default NewRelease