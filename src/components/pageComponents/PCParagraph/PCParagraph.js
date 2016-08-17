import React from 'react'
import classes from './PCParagraph.scss'


class PCParagraph extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={classes['root']}>
        <h1>PCParagraph</h1>
      </div>
    );
  }

}

PCParagraph.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default PCParagraph
