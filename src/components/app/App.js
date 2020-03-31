import React, { Component } from "react";
import Header from "../header/Header";
import RandomPlanet from "../randomPlanet/RandomPlanet";
import "./app.css";
import ErrorIndicator from "../errorIndicator/ErrorIndicator";
import ErrorButton from "../errorButton/ErrorButton";
import ErrorBoundary from "../errorBoundry/ErrorBoundary";
import {SwapiServiceProvider} from "../../swapiServiceContext/SwapiServiceContext";
import SwapiService from "../../service/SwapiService";
import DummySwapiService from "../../service/DummySwapiService";
import PeoplePage from "../pages/PeoplePage";
import PlanetsPage from "../pages/PlanetsPage";
import StarshipsPage from "../pages/StarshipsPage";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
      swapiService: new SwapiService()
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

              <PeoplePage />
              <PlanetsPage />
              <StarshipsPage />

            </div>
          </SwapiServiceProvider>
        </ErrorBoundary>
    );
  }
}
