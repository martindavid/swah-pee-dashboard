import React from "react";
import agent from "../agent";

import TableRenderer from "./grid";

export default class People extends React.Component {
  state = {
    peoples: []
  };

  componentDidMount() {
    agent.API.all("people").then(res => {
      this.setState({ peoples: res.results });
    });
  }

  render() {
    var selectedField = [
      "name",
      "height",
      "birth_year",
      "gender",
      "hair_color",
      "skin_color"
    ];
    return (
      <>
        <h3>People</h3>
        <TableRenderer
          data={this.state.peoples}
          part="People"
          header={selectedField}
        />
      </>
    );
  }
}
