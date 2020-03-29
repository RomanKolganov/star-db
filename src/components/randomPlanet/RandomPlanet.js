import React, { Component } from "react";
import SwapiService from "../../service/SwapiService";
import "./randomPlanet.css";

export default class RandomPlanet extends Component {
  constructor() {
    super();

    this.state = {
      id: null,
      population: null,
      rotationPeriod: null,
      diameter: null,
      name: null
    };

    this.updatePlanet();
  }
  swapiService = new SwapiService();

  updatePlanet() {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService.getPlanet(id).then(planet => {
      this.setState({
        id: id,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
        name: planet.name
      });
    });
  }

  render() {
    const { id, population, rotationPeriod, diameter, name } = this.state;
    return (
      <div className="random-planet jumbotron rounded">
        <img
          className="planet-image"
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
          alt="planet"
        />
        <div>
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Population</span>
              <span>{population}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Rotation Period</span>
              <span>{rotationPeriod}</span>
            </li>
            <li className="list-group-item">
              <span className="term">Diameter</span>
              <span>{diameter}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
