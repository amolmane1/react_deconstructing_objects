import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

var [honda, tesla] = cars;
var [teslaTopColour] = tesla.coloursByPopularity;
var { teslaTopSpeed } = tesla.speedStats;
var [hondaTopColour] = honda.coloursByPopularity;
var { hondaTopSpeed } = honda.speedStats;
// var {coloursByPopularity: [teslaTopColour, _], speedStats: {teslaTopSpeed} } = tesla;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
