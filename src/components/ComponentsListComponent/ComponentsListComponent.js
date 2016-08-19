import React from 'react'
import classes from './ComponentsListComponent.scss'

import { returnComponentChildrenCount, returnComponentDescendantsCount } from '../../utilities/component'

class ComponentsListComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;

    let childrenCount = returnComponentChildrenCount(data);
    let descendantsCount = returnComponentDescendantsCount(data);

    return(
      <div className={classes['root']}>
        <div className={classes['icon']}></div>
        <div className={classes['info']}>
          <div className={classes['name']}>Component Name</div>
          <div className={classes['children']}>{childrenCount} children</div>
          <div className={classes['descendants']}>{descendantsCount} descendants</div>
        </div>
      </div>
    );
  }

}

export default ComponentsListComponent
