import React, { Component } from "react";
import ItemList from "../itemList/ItemList";
import PersonDetails from "../personDetails/PersonDetails";
import ErrorIndicator from "../errorIndicator/ErrorIndicator";
import SwapiService from "../../service/SwapiService";
import Row from "../row/Row";
import ErrorBoundary from "../errorBoundry/ErrorBoundary";

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

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}>

        {(i) =>
          `${i.name} (${i.birthYear})`}
      </ItemList>
    );

    const personDetails = (
        <ErrorBoundary>
          <PersonDetails personId={this.state.selectedPerson} />
        </ErrorBoundary>
    );

    return (
        <Row left={itemList} right={personDetails} />
    )
  }
}
