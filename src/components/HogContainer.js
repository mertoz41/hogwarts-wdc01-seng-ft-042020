import React, { Component } from "react";
import hogs from "../porkers_data";
import Hog from './Hog'
import Filter from "./Filter"

class HogContainer extends Component {
  constructor(){
    super()
    this.state = {
      greased: [],
      filter: "all"
    }
  }

  changeFilter = () => {
    const greasedPigs = hogs.filter(hog => hog.greased === true
     )
     let filter 
    if (this.state.filter === "greased") {
      filter = "all"
    } else {
      filter = "greased"
    }
    this.setState({
      greased: greasedPigs,
      filter: filter
    })
  }
  
  render() {
    console.log(this.state.filter)
    // debugger
    return (
      <div className="ui grid container">
      <Filter changeFilter={this.changeFilter}/>
      <h1>Hog Container </h1>

      {this.state.filter === "all" ? 
      
          hogs.map(hog => {
            return (
           < Hog name={hog.name} specialty={hog.specialty} weight={hog.weight}/>)})
       :
       this.state.greased.map(hog => {
        return (
       < Hog name={hog.name} specialty={hog.specialty} weight={hog.weight} />)})
        }
      </div>
    );
  }
}

export default HogContainer;
