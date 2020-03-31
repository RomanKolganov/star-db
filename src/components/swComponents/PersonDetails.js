import ItemDetails, {Record} from "../itemDetails/ItemDetails";
import React from "react";
import WithSwapiService from "../hocHelper/WithSwapiService";

const PersonDetails = (props) => {
    return(
        <ItemDetails {...props}>

            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};

export default WithSwapiService(PersonDetails, mapMethodsToProps)