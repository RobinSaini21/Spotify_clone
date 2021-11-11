import { Grid, Slider } from '@material-ui/core'
import {  PlayCircleOutline,  PlaylistPlay,  RepeatOutlined,  Shuffle, SkipNext, SkipPrevious, VolumeDown } from '@material-ui/icons'
import React from 'react'
import "./Footer.css"


function Footer() {
    return (
        <div className="footer">
         <div className="footer_left">
             <img className="footer_albumlogo" src="https://i1.sndcdn.com/artworks-000235892531-osgk53-t500x500.jpg" alt=""/>
             <div className = "footer__songInfo">
<h4>Breaking The Habit</h4>
<p>Linkin Park</p>
             </div>
            
             </div> 
            <div className="footer_center">
<Shuffle className="footer_green" fontSize="large"/>
<SkipPrevious className="footer_icon"/>
<PlayCircleOutline fontSize="large" className="footer_icon"/>
   <SkipNext className="footer_icon"/>
   <RepeatOutlined className="footer_green "/>
            </div>
         
<div className="footer_rigth">
    <Grid container spacing={2}>
        <Grid item>
            <PlaylistPlay className="playlist"/>
            </Grid>
            <Grid item>
                <VolumeDown className="volume" />
                </Grid>
                <Grid item xs>
                    <Slider className="slide" />
                    </Grid>
                    </Grid>
<p>volume Control</p>

</div>

        </div>
    )
}

export default Footer
