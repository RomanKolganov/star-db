import React from "react";

import "./itemList.css";
import ErrorBoundary from "../errorBoundry/ErrorBoundary";

const ItemList = (props) => {

  const { data, onItemSelected, children: renderLabel } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderLabel(item);

    return (
        <li className="list-group-item"
            key={id}
            onClick={() => onItemSelected(id)}>
          {label}
        </li>
    );
  });

  return (
      <ErrorBoundary>
        <ul className="item-list list-group">
          {items}
        </ul>
      </ErrorBoundary>
  );
};

export default ItemList
