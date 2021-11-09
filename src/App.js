import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import  './App.css';
import MusicTable from './components/MusicTable/MusicTable';



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      music: []
    };
  }



  componentDidMount() {
   this.getAllSongs();
  
  }
  async getAllSongs(){
    let response = await axios.get(`http://www.devcodecampmusiclibrary.com/api/music`);
    this.setState({
      music: response.data
    });
  }



  render(){
    return (
      <div> 
        <NavBar/>
        <MusicTable music = {this.state.music}/>
       </div>
    )
    

  }
}



export default App;
