import React from 'react'
import classes from './PCHeading.scss'


class PCHeading extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;
    const { content } =  data;

    return(
      <div className={classes['PCHeading']}>
        <h1>{content}</h1>
      </div>
    );
  }

}

PCHeading.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default PCHeading
