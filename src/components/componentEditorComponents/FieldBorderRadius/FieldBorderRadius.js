import React from 'react'
import classes from './FieldBorderRadius.scss'


class FieldBorderRadius extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;
    const { label } = data;

    return(
      <div className={classes['root']}>
        <div className={classes['main-label-wrapper']}>
          <label className={classes['label-text']}>{label}</label>
        </div>
        <div className={classes['options']}>
          <label className={classes['option']}>
            <input className={classes['input']} type="text"/>
            <span className={classes['option__label']}>Top</span>
          </label>
          <label className={classes['option']}>
            <input className={classes['input']} type="text"/>
            <span className={classes['option__label']}>Right</span>
          </label>
          <label className={classes['option']}>
            <input className={classes['input']} type="text"/>
            <span className={classes['option__label']}>Bottom</span>
          </label>
          <label className={classes['option']}>
            <input className={classes['input']} type="text"/>
            <span className={classes['option__label']}>Left</span>
          </label>
        </div>
      </div>
    );
  }

}

FieldBorderRadius.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default FieldBorderRadius
