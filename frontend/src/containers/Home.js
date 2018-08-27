import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="row">
          <div className="column">
            <div className="jumbo">
              <h1>Collectible.</h1>
              <h1>Breedable.</h1>
              <h1>Horrible.</h1>
              <h4>
                Collect and breed crypto monsters
              </h4>
              <Link to="catalogue" className="button button-large">
                Start now
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
