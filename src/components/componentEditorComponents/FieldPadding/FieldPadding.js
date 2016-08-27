import React from 'react'
import classes from './FieldPadding.scss'


class FieldPadding extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;
    const { label } = data;

    return(
      <div className={classes['root']}>
        <div className={classes['main-label-wrapper']}>
          <label className={classes['label-text']}>
            <span>{label}</span>
            <label className={classes['extra-option']}>
              <span className={classes['extra-option__label']}>Link properties</span>
              <input className={classes['extra-option__input']} type="checkbox" checked="true"/>
            </label>
          </label>
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

FieldPadding.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default FieldPadding
