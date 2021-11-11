import React, {useEffect, useState} from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();


function App() {
//  const [token , setToken] = useState(null);
const [{ user, token } , dipatch] = useDataLayerValue();


  useEffect(() => {
  const hash = getTokenFromUrl();
  window.location.hash ="";
  const _token = hash.access_token;


  if (_token){
    dipatch({
      type: "SET_TOKEN",
      token: _token
    })
    // setToken(_token);
  
    spotify.setAccessToken(_token)
    spotify.getMe().then((user) => {
 
        dipatch({
          type: 'SET_USER',
          user: user,
        });
    });
    spotify.getUserPlaylists().then((playlist) => {
      dipatch({
         type: 'SET_USER',
         playlist: playlist
      })
    })
    spotify.getUserPlaylists('37i9dQZEVXcEzopsMFo4vc1').then(response =>
      dipatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
      )

    
  }
  
  }, []);
  console.log(user);
  console.log("hey",token)

  



  return (
    <div className="app">
  {
    token ?
    <Player spotify={spotify}/>
    :
    <Login />
    
  }</div>
  );
}


export default App;
