import React, { Component } from 'react';
import { Link } from 'react-scroll';
import Fade from 'react-reveal/Fade';
import ReactGA from 'react-ga';

import Nav from '../components/Nav';
import Home from '../containers/Home';
import Who from '../containers/Who';
import What from '../containers/What';
import Work from '../containers/Work';
import Where from '../containers/Where';
import How from '../containers/How';

const propTypes = {};

class App extends Component {
  onNavigate(nav) {
    ReactGA.event({
      category: 'Navigation Links',
      action: 'Clicked',
      label: nav,
    });
  }
  render() {
    return (
      <div>
        <Nav>
          <Link
            activeClass="active"
            className="nav-item"
            to="home"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => this.onNavigate('home')}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            className="nav-item"
            to="who"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => this.onNavigate('who')}
          >
            Who
          </Link>
          <Link
            activeClass="active"
            className="nav-item"
            to="what"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => this.onNavigate('what')}
          >
            What
          </Link>
          <Link
            activeClass="active"
            className="nav-item"
            to="work"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => this.onNavigate('work')}
          >
            Work
          </Link>
          <Link
            activeClass="active"
            className="nav-item"
            to="where"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => this.onNavigate('where')}
          >
            Where
          </Link>
          <Link
            activeClass="active"
            className="nav-item"
            to="how"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => this.onNavigate('how')}
          >
            How
          </Link>
        </Nav>
        <main>
          <Home />
          <Who />
          <What />
          <Fade>
            <Where />
          </Fade>
          <Fade>
            <How />
          </Fade>
        </main>
      </div>
    );
  }
}

App.propTypes = propTypes;

export default App;
