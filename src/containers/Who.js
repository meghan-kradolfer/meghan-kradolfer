import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

const propTypes = {};

class Who extends Component {
  render() {
    return (
      <div id="who" className="who">
        <div className="container">
          <div className="row">
            <div className="col-5"></div>
            <div className="col-7">
              <Fade>
                <h5>Who am I?</h5>
              </Fade>
              <Fade>
                <h1>About Me</h1>
              </Fade>
              <Fade>
                <p>
                  Hello, welcome to my website! <br />
                  I'm Meghan, a Frontend developer from{' '}
                  <b>Christchurch, New Zealand</b>. <br />
                  <br />
                  I love to create things and development is my output. <br />
                  For the past 7 years, I have worked primarily as a frontend
                  developer for a range of different agencies, product teams and
                  freelancer roles. After finding a love for Javascript, my
                  primary career focus is in front-end development and
                  Javascript-based frameworks such as React, Vue and Angular.
                  Along the way, I have also gained a lot of experience working
                  with APIs, databases, backend frameworks, CMSs and design
                  systems.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Who.propTypes = propTypes;

export default Who;
