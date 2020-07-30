import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Months from './Months';
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      persons:[],
      month: [
        "January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
      ],
      showMonths: false
    }
  }
  
  toggleBtn = () => {
    axios.get('https://yalantis-react-school-api.yalantis.com/api/task0/users').then(res=>{
      this.setState({
        persons:res.data,
        showMonths:!this.state.showMonths
      });
    })
  }

  render(){
    return (
      <div className="App">
        <h1 style={{boxShadow:'0 0 10px 0 #ccc'}}>Customer list</h1>
          <button className="Btn" onClick={this.toggleBtn}>Show Months</button>
          {/* // show block with months on display */}
          {this.state.showMonths?<div><Months months = {this.state.month} users={this.state.persons}/></div>: null}
           
      </div>     
    );
  }
}
 
export default App;

