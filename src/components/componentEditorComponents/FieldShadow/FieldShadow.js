import React from 'react'
import classes from './FieldShadow.scss'


class FieldShadow extends React.Component {

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
            <span className={classes['option__label']}>Color</span>
          </label>
          <label className={classes['option']}>
            <input className={classes['input']} type="text"/>
            <span className={classes['option__label']}>X</span>
          </label>
          <label className={classes['option']}>
            <input className={classes['input']} type="text"/>
            <span className={classes['option__label']}>Y</span>
          </label>
          <label className={classes['option']}>
            <input className={classes['input']} type="text"/>
            <span className={classes['option__label']}>Blur</span>
          </label>
          <label className={classes['option']}>
            <input className={classes['input']} type="text"/>
            <span className={classes['option__label']}>Spread</span>
          </label>
        </div>
      </div>
    );
  }

}

FieldShadow.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default FieldShadow
