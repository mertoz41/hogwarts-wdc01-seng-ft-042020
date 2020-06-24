import React, { Component } from 'react';

class Filter extends Component { 
    render(){
      return (
        <div>
          Filter Greased Hogs:<input type="checkbox" onClick={this.props.changeFilter}></input>
        </div>

      )}}
      


export default Filter