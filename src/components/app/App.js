import React, { Component } from "react";
import Header from "../header/Header";
import RandomPlanet from "../randomPlanet/RandomPlanet";
import PeoplePage from "../peoplePage/PeoplePage";
import "./app.css";
import ErrorIndicator from "../errorIndicator/ErrorIndicator";
import SwapiService from "../../service/SwapiService";
import ErrorButton from "../errorButton/ErrorButton";
import ErrorBoundary from "../errorBoundry/ErrorBoundary";
import ItemList from "../itemList/ItemList";
import ItemDetails, {Record} from "../itemDetails/ItemDetails";
import Row from "../row/Row";

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
    const { getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage } = this.swapiService;

    const personDetails = (
        <ItemDetails
            itemId={11}
            getData={getPerson}
            getImageUrl={getPersonImage} >

          <Record field="gender" label="Gender" />
          <Record field="eyeColor" label="Eye Color" />

        </ItemDetails>
    );

    const starshipDetails = (
        <ItemDetails
            itemId={5}
            getData={getStarship}
            getImageUrl={getStarshipImage}>

          <Record field="model" label="Model" />
          <Record field="length" label="Length" />
          <Record field="costInCredits" label="Cost" />
        </ItemDetails>);

    return (
        <ErrorBoundary>
          <div className="container-fluid">
            <Header />
            <Row
                left={personDetails}
                right={starshipDetails} />
            <RandomPlanet />
            <div className="mb-3">
              <ErrorButton />
            </div>
            <PeoplePage />

          </div>
        </ErrorBoundary>
    );
  }
}
