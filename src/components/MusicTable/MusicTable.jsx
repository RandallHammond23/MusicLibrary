import React, { Component } from 'react';
import './MusicTable.css'





function MusicTable(props){
   
    
    return(
       
            <ul>
                {props.music.map((song,index)=>
                 <li className= 'font-white' key= {index}>{song.title} by {song.artist} in the album {song.album} the genre {song.genre} released on {song.releaseDate}</li> )}
                 
            </ul>
       
    );
        
}

export default MusicTable