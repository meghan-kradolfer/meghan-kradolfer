import React, { Component } from 'react';

const propTypes = {};

class Work extends Component {
  render() {
    return (
      <div id="work" className="work">
        <div className="container">
          <div className="row text-center">
            <div className="col-12">
              <h5>What have I done?</h5>
              <h1>My work</h1>
              <p>
                A small collection of my most recent website work. <br />
                More examples available upon request.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <img
                src="./images/clients/abchomes.png"
                alt="Meghan Nicole Kradolfer - Frontend developer"
              />
            </div>
            <div className="col-6">
              <img
                src="./images/clients/heartridge.png"
                alt="Meghan Nicole Kradolfer - Frontend developer"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <img
                src="./images/clients/manager.png"
                alt="Meghan Nicole Kradolfer - Frontend developer"
              />
            </div>
            <div className="col-6">
              <img
                src="./images/clients/masterpiece.png"
                alt="Meghan Nicole Kradolfer - Frontend developer"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <img
                src="./images/clients/simonds.png"
                alt="Meghan Nicole Kradolfer - Frontend developer"
              />
            </div>
            <div className="col-6">
              <img
                src="./images/clients/springfox.png"
                alt="Meghan Nicole Kradolfer - Frontend developer"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Work.propTypes = propTypes;

export default Work;
