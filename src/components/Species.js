import React from "react";
import agent from "../agent";
import TableRenderer from "./grid";

export default class Species extends React.Component {
  state = {
    species: []
  };

  componentWillMount() {
    agent.API.all("species").then(res => {
      this.setState({ species: res.results });
    });
  }

  render() {
    var header = [
      "name",
      "designation",
      "classification",
      "skin_colors",
      "language"
    ];
    return (
      <TableRenderer data={this.state.species} header={header} part="Species" />
    );
  }
}
