import React from 'react'
import classes from './FieldLink.scss'


class FieldLink extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;
    const { label } = data;

    return(
      <div className={classes['root']}>
        <label className={classes['main-label']}>
          <span className={classes['main-label-text']}>
            <span>
              {label}
            </span>
            <label className={classes['extra-option']}>
              <span className={classes['extra-option__label']}>Open link in new tab</span>
              <input className={classes['extra-option__input']} type="checkbox" checked="true"/>
            </label>
          </span>
          <input className={classes['main-input']} type="text"/>
        </label>
        <div>
        </div>
      </div>
    );
  }

}

FieldLink.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default FieldLink
