import React from "react";
import Row from "../row/Row";
import {PersonList} from "../swComponents/ItemLists";
import PersonDetails from "../swComponents/PersonDetails";
import {withRouter} from "react-router-dom";

const PeoplePage = ({history, match}) => {
    const {id} = match.params;
    return (
        <Row
            left={<PersonList onItemSelected={(id) => history.push(id)} />}
            right={<PersonDetails itemId={id} />} />
    );
};

export default withRouter(PeoplePage)