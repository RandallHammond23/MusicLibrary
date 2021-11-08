import React, { Component } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar/NavBar';
import  './App.css';



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      music: [],
    };
  }



  async componentDidMount() {
    await axios.get(`http://www.devcodecampmusiclibrary.com/api/music`) 
  
  }



  render(){
    return (
      <div> <NavBar/> </div>
    )
    

  }
}



export default App;
