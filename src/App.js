import React, { Component } from 'react';
import axios from 'axios';
import navBar from './components/NavBar/NavBar';




class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      music: [],
    };
  }



  async componentDidMount() {
    await axios.get(`http://www.devcodecampmusiclibrary.com/`) 
  
  }



  render(){
    return (
      <div> <navBar/> </div>
    )
    

  }
}



export default App;
