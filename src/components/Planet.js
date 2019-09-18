import React from "react";
import agent from "../agent";
import TableRenderer from "./grid";

export default class Planet extends React.Component {
  state = {
    planets: []
  };

  componentWillMount() {
    agent.API.all("planets").then(res => {
      this.setState({ planets: res.results });
    });
  }

  render() {
    var header = ["name", "population", "climate", "orbital_period", "terrain"];
    return (
      <TableRenderer data={this.state.planets} header={header} part="Planets" />
    );
  }
}
