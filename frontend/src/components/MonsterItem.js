import React from 'react';
import { string } from 'prop-types';
import MonsterImage from 'components/MonsterImage';

class MonsterItem extends React.Component {
  static propTypes = {
    genes: string,
  };

  render() {
    const { genes } = this.props;

    return (
      <div>
        <MonsterImage genes={genes} small/>
      </div>
    );
  }
}

export default MonsterItem;
