import React from 'react';

const Store = (props) => {
  let classes = 'store';
  if (props.isOccupied) classes += ' isOccupied';

  return (
    <div
      className={classes}
      onClick={(e) => {
        let tar = e.target;
        if (tar.classList.length) {
            tar.classList.toggle('active');
        } else {
          tar.parentNode.classList.toggle('active');
        }
      }}>
      {props.address}
      <div className="store-details">
        <h4>{props.address} {props.street.name}</h4>
        <p>{props.isOccupied ? null : 'Vacant'}</p>
        <p>{props.occupantName ? `Occupant: ${props.occupantName}` : null}</p>
        <p>{
          props.category ?
            props.category.name :
            null
        }</p>

        <p>{
          props.notes ?
            props.notes :
            null
        }</p>
      </div>
    </div>
  );
};

Store.propTypes = {
  address: React.PropTypes.number.isRequired,
  isOccupied: React.PropTypes.bool,
  occupantName: React.PropTypes.string,
  street: React.PropTypes.object,
  category: React.PropTypes.object,
  notes: React.PropTypes.string
};

export default Store;
