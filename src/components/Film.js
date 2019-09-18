import React from "react";
import agent from "../agent";

import TableRenderer from "./grid";

export default class Film extends React.Component {
  state = {
    films: []
  };

  componentWillMount() {
    agent.API.all("films").then(res => {
      this.setState({ films: res.results });
    });
  }

  render() {
    var header = ["episode_id", "title", "release_date", "director"];
    return (
      <TableRenderer data={this.state.films} header={header} part="Film" />
    );
  }
}
