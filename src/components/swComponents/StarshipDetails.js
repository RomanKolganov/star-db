import {SwapiServiceConsumer} from "../../swapiServiceContext/SwapiServiceContext";
import ItemDetails, {Record} from "../itemDetails/ItemDetails";
import React from "react";

const StarshipDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getStarship, getStarshipImage}) => {
                    return(<ItemDetails
                        itemId={itemId}
                        getData={getStarship}
                        getImageUrl={getStarshipImage}>

                        <Record field="model" label="Model" />
                        <Record field="length" label="Length" />
                        <Record field="costInCredits" label="Cost" />
                    </ItemDetails>)
                }
            }
        </SwapiServiceConsumer>
    );
};

export default StarshipDetails