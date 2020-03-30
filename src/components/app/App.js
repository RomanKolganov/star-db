import React, { Component } from "react";
import Header from "../header/Header";
import RandomPlanet from "../randomPlanet/RandomPlanet";
import PeoplePage from "../peoplePage/PeoplePage";
import "./app.css";
import ErrorIndicator from "../errorIndicator/ErrorIndicator";
import SwapiService from "../../service/SwapiService";
import ItemList from "../itemList/ItemList";
import PersonDetails from "../personDetails/PersonDetails";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    };
  }

  swapiService = new SwapiService();

  componentDidCatch() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <Header />
        <RandomPlanet />
        <PeoplePage />
        {
          // <div className="row mb2">
          //   <div className="col-md-6">
          //     <ItemList
          //       onItemSelected={this.onPersonSelected}
          //       getData={this.swapiService.getAllPlanets}
          //       renderItem={item => item.name}
          //     />
          //   </div>
          //   <div className="col-md-6">
          //     <PersonDetails personId={this.state.selectedPerson} />
          //   </div>
          // </div>
          // <div className="row mb2">
          //   <div className="col-md-6">
          //     <ItemList
          //       onItemSelected={this.onPersonSelected}
          //       getData={this.swapiService.getAllStarships}
          //       renderItem={item => item.name}
          //     />
          //   </div>
          //   <div className="col-md-6">
          //     <PersonDetails personId={this.state.selectedPerson} />
          //   </div>
          // </div>
        }
      </div>
    );
  }
}
