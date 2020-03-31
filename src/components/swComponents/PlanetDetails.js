import ItemDetails, {Record} from "../itemDetails/ItemDetails";
import React from "react";
import WithSwapiService from "../hocHelper/WithSwapiService";

const PlanetDetails = ({ itemId, swapiService }) => {
    const {getPlanet, getPlanetImage} = swapiService;

    return(
        <ItemDetails
            itemId={itemId}
            getData={getPlanet}
            getImageUrl={getPlanetImage}>

            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    );
};

export default WithSwapiService(PlanetDetails)