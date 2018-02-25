import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import * as d3 from "d3";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [
        {id: 1},
        {id: 2},
        {id: 3},
        {id: 4},
        {id: 5},
        {id: 6}
      ]
    };
  }
  render() {
    return (
      <div className="App">
      <Graph activities={this.state.activities} activitiesCount={this.state.activities.length}/>
      </div>
    );
  }
}

class Graph extends Component {
  constructor(props) {
    super(props);
    this.createGraph = this.createGraph.bind(this);
   }
   componentDidMount() {
      this.createGraph()
   }
   componentDidUpdate() {
      this.createGraph()
   }
   createGraph(props) {
     const svg = d3.select("#chart-area-1")
                  .append("svg")
                  .attr("width", 300)
                  .attr("height", 60)
                  .attr("fill", "dodgerblue")
                  .attr("class", "graph-svg-component");

     svg.selectAll("circle")
       .data(this.props.activities)
       .enter()
       .append("circle")
       .attr("r", 10)
       .attr("cx", (d) => d.id * 30)
       .attr("cy", 30);
   }

  render() {
    return(
      <div className="chart-wrapper">
      <h3>Your Activities</h3>
      <div id="chart-area-1">
        <h4>You are on a {this.props.activitiesCount}-day streak</h4>
      </div>
      </div>
    );
  }
}


export default App;
