import React, { Component } from 'react';
import Icon from '../components/Icon';

const propTypes = {};

class What extends Component {
  render() {
    return (
      <div id="what" className="what">
        <div className="container center">
          <div className="row">
            <div className="col-5"></div>
            <div className="col-7">
              <h5>What do I offer?</h5>
              <h1>My Skills</h1>
              <p>
                <b>Frontend Development</b> is my passion. I love being able to
                combine design and development together to create websites that
                serve as both a functional element and a great design. I love
                working in this forever changing field and try to keep up to
                date with all the latest developments.
              </p>
              <p>
                My roots are in <b>Web & Graphic Design</b>. It is what sparked
                my interest for all things design and web related. I believe to
                be a great web developer you need to have a good understanding
                of design and the user experience. The art of combining this
                with smooth backend functionality is something that goes so
                unnoticed but can make all the difference.
              </p>
              <p>
                Over the past few years working as a developer I have been
                expanding my knowledge of <b>back-end development</b> on the
                web. A lot of projects I have been involved in included
                server-side work and databases. I have also helped setting up
                data-structure and the the creation of CMS systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

What.propTypes = propTypes;

export default What;
