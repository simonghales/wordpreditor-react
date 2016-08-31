import React from 'react'
import classes from './FieldColorPicker.scss'
import { ChromePicker } from 'react-color';
import { getColorString } from '../../utilities/color'

class FieldColorPicker extends React.Component {

  constructor(props) {
    super(props);

    const { defaultColor } = props;

    this.state = {
      colorSwatch: defaultColor
    };

  }

  handleColorPickerChange = (color) => {

    const { handleColorChange } = this.props;

    const colorString = getColorString(color);

    this.setState({
      colorSwatch: colorString
    });

    handleColorChange(colorString);

  }

  render() {

    const { children } = this.props;
    const { colorSwatch } = this.state;

    const swatchStyles = {
      background: colorSwatch
    };

    return(
      <div className={classes['root']}>
        {children}
        <div className={classes['swatch']} style={swatchStyles}></div>
        <div className={classes['picker']}>
          <ChromePicker color={colorSwatch} onChangeComplete={this.handleColorPickerChange} />
        </div>
      </div>
    );
  }

}

FieldColorPicker.propTypes = {
  children: React.PropTypes.object.isRequired, // array?
  defaultColor: React.PropTypes.string.isRequired,
  handleColorChange: React.PropTypes.func.isRequired,
}

export default FieldColorPicker
