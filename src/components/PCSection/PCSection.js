import React from 'react'
import classes from './PCSection.scss'
import { returnComponentObject } from '../../utilities/component'

class PCSection extends React.Component {

  constructor(props) {
    super(props);

    this.renderChildren = this.renderChildren.bind(this);

  }

  renderChildren() {

    const { data } = this.props;

    let children = [];

    for(let i = 0, len = data.children.length; i < len; i++) {
      let child = data.children[i];
      children.push(
        returnComponentObject(child)
      );
    }

    return children;

  }

  render() {

    const { data } = this.props;

    return(
      <div className={classes['PCSection']}>
        <h1>PCSection</h1>
        <h2>{data.label}</h2>
        <div>
          {this.renderChildren()}
        </div>
      </div>
    );

  }

}

export default PCSection
