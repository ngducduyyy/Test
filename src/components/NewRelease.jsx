import React, { useEffect, useState } from 'react'
import data from "../data.json";
import Movie from './Movie';
const NewRelease = () => {
    const [release, setRelease] = useState([]);
  return (
    <div className='release'>
<Movie key={data.id}/>
    </div>
  )
}

export default NewRelease