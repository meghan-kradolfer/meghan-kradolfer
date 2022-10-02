import React, { Component } from 'react';

const propTypes = {};

class Home extends Component {
  render() {
    return (
      <div id="home" className="home">
        <div className="container center text-center">
          <h1>MNK</h1>
          <h4>Meghan Nicole Kradolfer</h4>
          <h5>Frontend Developer</h5>
        </div>
      </div>
    );
  }
}

Home.propTypes = propTypes;

export default Home;
