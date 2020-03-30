import React from "react";
import SwapiService from "../../service/SwapiService";
import withData from "../hocHelper/WithData";
import ItemList from "../itemList/ItemList";

const swapiService = new SwapiService();

const {getAllPeople, getAllPlanets, getAllStarships} = swapiService;

const PersonList = withData(ItemList, getAllPeople);
const PlanetList = withData(ItemList, getAllPlanets);
const StarshipList = withData(ItemList, getAllStarships);

export {PersonList, PlanetList, StarshipList}