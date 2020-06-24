import React, { Component } from "react";
import hogs from "../porkers_data";
import Hog from './Hog'
class HogContainer extends Component {
  
  render() {
    
    return (
      <div className="ui grid container">
      <h1>Hog Container </h1>
        {hogs.map(hog => {
          return (
         < Hog name={hog.name} specialty={hog.specialty} weight={hog.weight} greased={hog.greased}/>
         
          )
        })}
      </div>
    );
  }
}

export default HogContainer;
