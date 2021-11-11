 import React from 'react';
 import "./Sidebar.css";
import SiderbarOption from './SiderbarOption';
import { Home, LibraryMusic, Search } from '@material-ui/icons';
import { useDataLayerValue } from './DataLayer';



 
 function Sidebar() {
     const[{playlists}, dispatch] = useDataLayerValue();
     return (
         <div className="sidebar">
            <img className="sidebar_img"
            src="Screenshot(9).png" alt="" />
         <SiderbarOption Icon={Home} title ="Home" />
         <SiderbarOption Icon={Search}  title ="Search" />
         <SiderbarOption Icon={LibraryMusic}  title ="Your Library" />
         <br />
         <strong className="sidebar_title">PLAYLIST</strong>
         
         <hr />
        <div className='Weekly'>
            <p>Hip Hop</p>
            <p>Heavy Metal</p>
            <p>Skillet</p>
            <p>Funk</p>
            <p>Rock</p>
            <p>FrontEnd Dev Podcast</p>
            <p>Linkin Park</p>
             <p>AOT Soundtrack</p>
            <p>Mick Gordan</p>
            <p>Metallica</p>
              <p>Pop music</p>
            <p>Jazz</p>
            <p>Punk rock</p>
            <p>Dance music</p>
            <p></p>
            <p>FrontEnd Dev Podcast</p>
            <p>Linkin Park</p>
             <p>AOT Soundtrack</p>
            <p>Mick Gordan</p>
            <p>Metallica</p>
        </div>
         {playlists?.items?.map( 
             playlist => (
                  <SiderbarOption title={playlist.name} />
             )
         )}

        
         {/* <SiderbarOption title="ROCK" />
         <SiderbarOption title="HEAVY METAL" /> */}
         {/* <SiderbarOption title="HIP-HOP" /> */}
         </div>
     )
 }
 
 export default Sidebar
 