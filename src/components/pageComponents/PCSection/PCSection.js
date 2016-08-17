import React from 'react'
import classes from './PCSection.scss'
import { returnChildren } from '../../../utilities/component'

class PCSection extends React.Component {

  constructor(props) {
    super(props);

    this.renderChildren = this.renderChildren.bind(this);

  }

  renderChildren() {

    const { data } = this.props;

    return returnChildren(data);

  }

  render() {

    const { data } = this.props;

    return(
      <div className={classes['root']}>
        <div className={classes['content']}>
          {this.renderChildren()}
        </div>
      </div>
    );

  }

}

PCSection.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default PCSection
