import ItemDetails, {Record} from "../itemDetails/ItemDetails";
import React from "react";
import WithSwapiService from "../hocHelper/WithSwapiService";

const StarshipDetails = (props) => {
    return(<ItemDetails {...props}>

        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
    </ItemDetails>)
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImageUrl: swapiService.getStarshipImage
    }
};

export default WithSwapiService(StarshipDetails, mapMethodsToProps)