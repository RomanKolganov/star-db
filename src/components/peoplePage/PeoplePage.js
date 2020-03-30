import React, { Component } from "react";
import ItemList from "../itemList/ItemList";
import PersonDetails from "../personDetails/PersonDetails";
import ErrorIndicator from "../errorIndicator/ErrorIndicator";
import SwapiService from "../../service/SwapiService";

export default class PeoplePage extends Component {
  constructor() {
    super();

    this.state = {
      selectedPerson: 3,
      hasError: false
    };
  }

  swapiService = new SwapiService();

  componentDidCatch() {
    if (this.state.hasError) {
      this.setState({
        hasError: true
      });
    }
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.swapiService.getAllPeople}
            renderItem={({ name, gender, birthYear }) =>
              `${name} (${gender}, ${birthYear})`
            }
          />
        </div>
        <div className="col-md-6">
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}
