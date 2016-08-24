import React from 'react'
import classes from './FieldSharedStyles.scss'


class FieldSharedStyles extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;
    const { label } = data;

    return(
      <div className={classes['root']}>
        <label className={classes['label']}>
          <span className={classes['label-text']}>{label}</span>
          <input className={classes['input']} placeholder="No Shared Style" type="text" readOnly/>
        </label>
      </div>
    );
  }

}

FieldSharedStyles.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default FieldSharedStyles
