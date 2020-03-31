import {SwapiServiceConsumer} from "../../swapiServiceContext/SwapiServiceContext";
import ItemDetails, {Record} from "../itemDetails/ItemDetails";
import React from "react";

const PersonDetails = ({ itemId }) => {
    return (
        <SwapiServiceConsumer>
            {
                ({getPerson, getPersonImage}) => {
                    return(
                        <ItemDetails
                            itemId={itemId}
                            getData={getPerson}
                            getImageUrl={getPersonImage} >

                            <Record field="gender" label="Gender" />
                            <Record field="eyeColor" label="Eye Color" />
                        </ItemDetails>
                    )
                }
            }

        </SwapiServiceConsumer>
    );
};

export default PersonDetails