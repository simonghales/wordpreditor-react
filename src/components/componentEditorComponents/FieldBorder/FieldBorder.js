import React from 'react'
import classes from './FieldBorder.scss'


class FieldBorder extends React.Component {

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
              <span className={classes['option__label']}>Color</span>
            </label>
            <label className={classes['option']}>
              <input className={classes['input']} type="text"/>
              <span className={classes['option__label']}>Thickness</span>
            </label>
          </div>
        </div>
      </div>
    );
  }

}

FieldBorder.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default FieldBorder
