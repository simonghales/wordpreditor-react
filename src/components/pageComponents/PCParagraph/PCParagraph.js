import React from 'react'
import classes from './PCParagraph.scss'
import { getStyles } from '../../../utilities/component/styles'


class PCParagraph extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;
    const { content } =  data;
    const styles = getStyles(data);

    return(
      <p className={classes['root']} style={styles}>
        {content}
      </p>
    );
  }

}

PCParagraph.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default PCParagraph
