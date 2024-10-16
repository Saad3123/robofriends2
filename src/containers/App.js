import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox"
import { robots } from "../robots";
import "./App.css"
import Scroll from "../components/Scroll";

//app is a smart component as it has state
//whereas other 2 are pure function
// state is used to communicate from 1 
// component ot another, in this case searbox to cardlist

//we are using class to create the hierarchy,
//component from React is used to write predefined methods such as super and 
// render
class App extends Component{
  constructor() {
    super()
    this.state= {
      robots:[],
      searchfield:""
    }
  }

//constructor, render componentdidmount all belong to react life
//cycle hooks
//we can use componentDidMount as a flag and if true, we can further use it to 
// to proceed,(PROFESSIONAL NIGGA)
componentDidMount(){
  //fetch is a method in the window object so that it's not
  //attached to anything
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response=>{return response.json();})
  .then(users=>{this.setState({robots:users})})
  console.log("Sexy Moan")
  this.setState({robots:robots})
}
//whatever user enters, the emply searchfield will be filled with the value
onSearchChange=(event)=> {
  this.setState(
    {
      searchfield:event.target.value
    }
  )
  // console.log(filteredRobots);
}


render() {
  //a no name func that stores the value obtained from robots arr that includes the searchfield
  //purpose of this func is to extract the user requested robot and send it to CArdList to process
  //further and display it 
  const filteredRobots = this.state.robots.filter(robots =>{
    return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
  })
  if(robots.length===0){
    return <h1>Loading</h1>
  }
  else{
  return(
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange}/>
      <Scroll>
      <CardList robots={filteredRobots}/>
      </Scroll>
    </div>
  )
}
}
}
export default App;