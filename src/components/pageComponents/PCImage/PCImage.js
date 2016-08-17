import React from 'react'
import classes from './PCImage.scss'


class PCImage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;
    const { content } = data;

    return(
      <div className={classes['root']}>
        <img src={content} alt=""/>
      </div>
    );
  }

}

PCImage.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default PCImage
