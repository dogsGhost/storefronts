import React from 'react';
import StoreMap from './StoreMap';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      stores: []
    };
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((response) => {
        return response.json();
      }).then((json) => {
        this.setState({
          stores: json
        });
      }).catch((ex) => {
        console.log('init parsing failed');
        // backup fetch from local file
        fetch('/data.json')
          .then((response) => {
            return response.json();
          }).then((json) => {
            this.setState({
              stores: json
            });
          }).catch((ex) => {
            console.log('local parsing failed');
          });
      });
  }

  render() {
    return(
      <div>
        <header className="page-header">
          <div className="inner">
            <h1>Storefronts</h1>
            <h2>Current Street:&nbsp;
              {
                this.state.stores.length ?
                  this.state.stores[0].street.name :
                  ''
              }
            </h2>
          </div>
        </header>
        <StoreMap data={this.state.stores} />
      </div>
    );
  }
}

App.propTypes = {
  url: React.PropTypes.string.isRequired
};
