import React from 'react'
import classes from './FieldColor.scss'
import ColorPicker from 'coloreact'
import FieldColorPicker from '../../FieldColorPicker'

class FieldColor extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;
    const { label } = data;

    return(
      <div className={classes['root']}>

        {/*<div>*/}
          {/*/!*<ColorPicker />*!/*/}
          {/*<div>Color Picker</div>*/}
        {/*</div>*/}

        <div className={classes['main-label-wrapper']}>
          <label className={classes['label-text']}>{label}</label>
        </div>
        <div className={classes['options']}>
          <div className={classes['options-row']}>
            <label className={classes['option']}>
              <FieldColorPicker>
                <input className={classes['input']} type="text" placeholder="#000000"/>
                <span className={classes['option__label']}>Text</span>
              </FieldColorPicker>
            </label>
            <label className={classes['option']}>
              <FieldColorPicker>
                <input className={classes['input']} type="text" placeholder="#000000"/>
                <div className={classes['color-swatch']}></div>
                <span className={classes['option__label']}>Background</span>
              </FieldColorPicker>
            </label>
          </div>
        </div>
      </div>
    );
  }

}

FieldColor.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default FieldColor
