import React, { useEffect, useState } from 'react'
import "../styles/RowPost.css"
import YouTube from 'react-youtube'
import axios from './axios'
import { API_KEY, imageUrl } from '../constants/constants'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response => {
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err => {
      // alert('network error')
    })
  }, [])
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleMovies = (id) => {
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0])
      }
    })
  }
  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {
          movies.map(obj => {
            return <img onClick={() => handleMovies(obj.id)} className='poster' src={`${imageUrl + obj.backdrop_path}`} alt="poster" />
          })
        }
      </div>
      {urlId && <YouTube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost
