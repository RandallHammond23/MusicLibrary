import React, { Component } from 'react';




class SearchBar extends Component{
    state = {
        songTitle:[],
        album: [],
        artist: [],
        genre: [],
        releaseDate: [],
    


    }


 < nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
             </form>
        </div>
    </nav>
}