import React, { Component } from "react";
import Header from "../header/Header";
import RandomPlanet from "../randomPlanet/RandomPlanet";
import "./app.css";
import ErrorIndicator from "../errorIndicator/ErrorIndicator";
import ErrorButton from "../errorButton/ErrorButton";
import ErrorBoundary from "../errorBoundry/ErrorBoundary";
import {PersonList, StarshipList, PlanetList} from "../swComponents/ItemLists";
import {PersonDetails, PlanetDetails, StarshipDetails} from "../swComponents/Details";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
  }

  render() {
    return (
        <ErrorBoundary>
          <div className="container-fluid">
            <Header />
            <RandomPlanet />
            <div className="mb-3">
              <ErrorButton />
            </div>
              <PersonList>
                  {({name}) => <span>{name}</span>}
              </PersonList>
              <PersonDetails itemId={11} />

              <StarshipList>
                  {({name}) => <span>{name}</span>}
              </StarshipList>
              <StarshipDetails itemId={9}/>

              <PlanetList>
                  {({name}) => <span>{name}</span>}
              </PlanetList>
              <PlanetDetails itemId={2}/>

          </div>
        </ErrorBoundary>
    );
  }
}
