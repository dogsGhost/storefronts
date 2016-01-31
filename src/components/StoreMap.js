import React from 'react';
import Store from './Store';

function buildList(array) {
  return array.sort((a, b) => b.address - a.address)
    .map((store) => {
      return (
        <Store key={store._id} {...store} />
      );
    });
}

const StoreMap = (props) => {
  return (
    <div className="map-container">
      <div className="odds map-list">
        {buildList(props.data.filter((store) => store.address % 2))}
      </div>
      <div className="evens map-list">
        {buildList(props.data.filter((store) => !(store.address % 2)))}
      </div>
    </div>
  );
};

StoreMap.propTypes = {
  data: React.PropTypes.array.isRequired
};

export default StoreMap;
