import React from 'react'
import classes from './HeaderComponentsList.scss'
import { COMPONENT_TYPES_SETTINGS } from '../../constants/component/types'
var FontAwesome = require('react-fontawesome');

class HeaderComponentsList extends React.Component {

  constructor(props) {
    super(props);
  }

  renderComponents() {

    let components = [];

    for (let type in COMPONENT_TYPES_SETTINGS) {

      let typeData = COMPONENT_TYPES_SETTINGS[type];

      const { icon } = typeData;

      components.push(
        <div className={classes['component']}>
          <FontAwesome name={icon} />
        </div>
      );

    }

    return components;

  }

  render() {
    return(
      <div className={classes['root']}>
        {/*<header className={classes['header']}>*/}
          {/*ELEM*/}
        {/*</header>*/}
        <div>
          {this.renderComponents()}
        </div>
      </div>
    );
  }

}

HeaderComponentsList.propTypes = {
}

export default HeaderComponentsList
