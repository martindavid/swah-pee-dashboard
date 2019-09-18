import React from "react";
import agent from "../agent";
import TableRenderer from "./grid";

export default class Vehicle extends React.Component {
  state = {
    vehicles: []
  };

  componentWillMount() {
    agent.API.all("vehicles").then(res => {
      this.setState({ vehicles: res.results });
    });
  }

  render() {
    var header = ["name", "model", "crew", "passengers", "manufacturer"];
    return (
      <TableRenderer
        data={this.state.vehicles}
        header={header}
        part="Vehicle"
      />
    );
  }
}
