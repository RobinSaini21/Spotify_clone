import { Favorite, MoreHoriz, PlayCircleFilledOutlined } from '@material-ui/icons';
import React from 'react';
import "./Body.css";
import { useDataLayerValue } from './DataLayer';
import Header from './Header';
import SongRow from './SongRow';

function Body({spotify}) {
    const [{discover_weekly}, dispatch] = useDataLayerValue();
    return (
        <div className="body">
       <Header  spotify={spotify} />
      <div className="body_info">
          <img src ="https://cdn.shortpixel.ai/client/q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png" alt =""/>
          <div className="body_Sinfotext">
<strong>PLAYLIST</strong>
<h2>Discover Weekly</h2>
<p>{discover_weekly?.description}</p>
          </div>
<div className="body_song">
              <div className="body__song">
                    <div className="songicon">
             
                 <div className="songicon2">
              
                 </div>
                    </div>
              </div> 
{discover_weekly?.tracks.items.map( item =>
<SongRow track={item.track} />

)}
          </div>
      </div>
        </div>
    );
}

// import React from 'react'




export default Body
