import React, { Component } from "react";
import Header from "../header/Header";
import RandomPlanet from "../randomPlanet/RandomPlanet";
import "./app.css";
import ErrorIndicator from "../errorIndicator/ErrorIndicator";
import ErrorButton from "../errorButton/ErrorButton";
import ErrorBoundary from "../errorBoundry/ErrorBoundary";
import {SwapiServiceProvider} from "../../swapiServiceContext/SwapiServiceContext";
import SwapiService from "../../service/SwapiService";
import PlanetDetails from "../swComponents/PlanetDetails";
import {PersonList, PlanetList, StarshipList} from "../swComponents/ItemLists";
import StarshipDetails from "../swComponents/StarshipDetails";
import PersonDetails from "../swComponents/PersonDetails";
import DummySwapiService from "../../service/DummySwapiService";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
      swapiService: new DummySwapiService()
    };
  }

  componentDidCatch() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
  }

  onServiceChange = () => {
    this.setState(({swapiService}) => {
      const Service = swapiService instanceof SwapiService ? DummySwapiService : SwapiService

      return {
        swapiService: new Service()
      }
    })
  };

  render() {
    return (
        <ErrorBoundary>
          <SwapiServiceProvider value={this.state.swapiService}>
            <div className="container-fluid">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <div className="mb-3">
                <ErrorButton />
              </div>
              <PersonList/>
              <PersonDetails itemId={11} />

              <StarshipList/>
              <StarshipDetails itemId={9}/>

              <PlanetList/>
              <PlanetDetails itemId={2}/>
            </div>
          </SwapiServiceProvider>
        </ErrorBoundary>
    );
  }
}
