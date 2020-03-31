import React, {Component} from "react";
import Row from "../row/Row";
import {PersonList} from "../swComponents/ItemLists";
import PersonDetails from "../swComponents/PersonDetails";

export default class PeoplePage extends Component {

    state = {
        selectedItem: null
    };

    onItemSelected = (selectedItem) => {
        this.setState({ selectedItem });
    };

    render() {
        const { selectedItem } = this.state;

        return (
            <Row
                left={<PersonList onItemSelected={this.onItemSelected} />}
                right={<PersonDetails itemId={selectedItem} />} />
        );
    }
}