import React from 'react'
import classes from './FieldColorPicker.scss'


class FieldColorPicker extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { children } = this.props;

    return(
      <div className={classes['root']}>
        {children}
        <div className={classes['swatch']}></div>
        <div className={classes['picker']}>
          Color Picker
        </div>
      </div>
    );
  }

}

FieldColorPicker.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default FieldColorPicker
