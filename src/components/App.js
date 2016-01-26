import React from 'react';

export default class App extends React.Component {
  render() {
    return(
      <div>
        Test url: {this.props.url}
      </div>
    );
  }
}

App.propTypes = {
  url: React.PropTypes.string.isRequired
};
