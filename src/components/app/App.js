import React, { Component } from "react";
import Header from "../header/Header";
import RandomPlanet from "../randomPlanet/RandomPlanet";
import ItemList from "../itemList/ItemList";
import PersonDetails from "../personDetails/PersonDetails";
import "./app.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      selectedPerson: 5
    };
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    return (
      <div>
        <Header />
        <RandomPlanet />

        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className="col-md-6">
            <PersonDetails personId={this.state.selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}
