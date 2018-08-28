import React from 'react';
import { Link } from 'react-router-dom';
import exampleMonsters from 'img/examples.png';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="row">
          <div className="column">
            <div className="jumbo">
              <h1>Collectible.</h1>
              <h1>Tradeable.</h1>
              <h1>Horrible.</h1>
              <h4>
                Collect and trade crypto monsters
              </h4>
              <Link to="catalogue" className="button button-large">
                Start now
              </Link>
            </div>
          </div>

          <div className="column">
            <img src={exampleMonsters} alt="Examples" width={500} />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
