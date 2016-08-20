import React from 'react'
import classes from './PCSection.scss'
import { returnChildren } from '../../../utilities/component'
import { getStyles } from '../../../utilities/component/styles'

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
    const styles = getStyles(data);

    return(
      <div className={classes['root']} style={styles}>
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
