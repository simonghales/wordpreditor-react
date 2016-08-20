import React from 'react'
import classes from './ComponentsListComponent.scss'

import { returnComponentChildrenCount, returnComponentDescendantsCount } from '../../utilities/component'

class ComponentsListComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;

    const { label } = data;

    let childrenCount = returnComponentChildrenCount(data);
    let descendantsCount = returnComponentDescendantsCount(data);

    return(
      <div className={classes['root']}>
        <div className={classes['name-wrapper']}>
          <span className={classes['icon']}></span>
          <span className={classes['name']}>{label}</span>
        </div>
        <div className={classes['info']}>
          <span className={classes['children']}>
            <span className={classes['count']}>{childrenCount}</span> children
          </span>
          <span className={classes['descendants']}>
            <span className={classes['count']}>{descendantsCount}</span> descendants</span>
        </div>
      </div>
    );
  }

}

export default ComponentsListComponent
