import React from "react";
import agent from "../agent";
import TableRenderer from "./grid";

export default class Starships extends React.Component {
  state = {
    starships: []
  };

  componentWillMount() {
    agent.API.all("starships").then(res => {
      this.setState({ starships: res.results });
    });
  }

  render() {
    var header = [
      "name",
      "model",
      "starship_class",
      "manufacturer",
      "hyperdrive_rating"
    ];
    return (
      <TableRenderer
        data={this.state.starships}
        header={header}
        part="Starships"
      />
    );
  }
}
