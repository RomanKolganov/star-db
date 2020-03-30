import React, { Component } from "react";
import SwapiService from "../../service/SwapiService";
import Spinner from "../spinner/Spinner";

import "./personDetails.css";

export default class PersonDetails extends Component {
  constructor() {
    super();

    this.state = {
      person: null,
      loading: true
    };
  }

  swapiService = new SwapiService();

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.setState({ loading: true });
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) {
      return;
    }

    this.swapiService.getPerson(personId).then(person => {
      this.setState({
        person: person,
        loading: false
      });
    });
  }

  render() {
    if (!this.state.person) {
      return <span>Select a person from a list</span>;
    }

    const { loading, person } = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = !loading ? <PersonView person={person} /> : null;

    return (
      <div className="person-details card">
        {spinner}
        {content}
      </div>
    );
  }
}

const PersonView = ({ person }) => {
  const { id, name, gender, birthYear, eyeColor } = person;

  return (
    <>
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt="person"
      />

      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender</span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year</span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color</span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
