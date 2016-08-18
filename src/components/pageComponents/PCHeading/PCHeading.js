import React from 'react'
import classes from './PCHeading.scss'
import { getStyles } from '../../../utilities/component/styles'

class PCHeading extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;
    const { content } =  data;
    const styles = getStyles(data);

    return(
      <h1 className={classes['root']} style={styles}>
        {content}
      </h1>
    );
  }

}

PCHeading.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default PCHeading
