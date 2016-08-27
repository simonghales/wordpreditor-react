import React from 'react'
import classes from './FieldSize.scss'


class FieldSize extends React.Component {

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
          <div className={classes['options-row']}>
            <label className={classes['option']}>
              <input className={classes['input']} type="text"/>
              <span className={classes['option__label']}>Width</span>
            </label>
            <label className={classes['option']}>
              <input className={classes['input']} type="text"/>
              <span className={classes['option__label']}>Height</span>
            </label>
          </div>
          <div className={classes['options-row']}>
            <label className={classes['option']}>
              <input className={classes['input']} type="text"/>
              <span className={classes['option__label']}>Max Width</span>
            </label>
            <label className={classes['option']}>
              <input className={classes['input']} type="text"/>
              <span className={classes['option__label']}>Max Height</span>
            </label>
          </div>
        </div>
      </div>
    );
  }

}

FieldSize.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default FieldSize
