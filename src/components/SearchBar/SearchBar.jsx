import React, { Component } from 'react';




class SearchBar extends Component{
    constructor(){
        super();

        this.state = {
            title:[],
            album: [],
            artist: [],
            genre: [],
            releaseDate: [],
        }

    }



                handleChange = (event) => {
                    console.log(event.target.value)
                    this.setState({
                        [event.target.name]: event.target.value
                    });
                }


                handleSubmit = (event) => {
                    event.preventDefault()
                    this.props.createNewBook(this.state)
                }

   
              
                    render(){
                        return(
                            <nav className ="navbar navbar-light bg-light">
                        <div class="container-fluid">
                            <form class="d-flex"  onSubmit={this.handleSubmit}>
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <input name="title" onChange={this.handleChange} value={this.state.title}/>
                                <input name="artist" onChange={this.handleChange} value={this.state.artist}/>
                                <input name="album" onChange={this.handleChange} value={this.state.album}/>
                                <input name="genre" onChange={this.handleChange} value={this.state.genre}/>
                                <input name="releaseDate" onChange={this.handleChange} value={this.state.releaseDate}/>
                                <button class="btn btn-outline-success" type="submit" >Search</button>
                            </form>
                    </div>
                </nav>

                        )
                        

                    }
                           
                  
              


    
    
}




export default SearchBar;