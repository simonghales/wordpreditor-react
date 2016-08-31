import React from 'react'
import classes from './FieldColor.scss'
import ColorPicker from 'coloreact'
import FieldColorPicker from '../../FieldColorPicker'

class FieldColor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      color: '#000000',
      backgroundColor: '#000000'
    };

  }

  handleColorChange = (color) => {
    this.setState({
      color: color
    });
    console.log("color updated", color);
  }

  handleBackgroundColorChange = (color) => {
    this.setState({
      backgroundColor: color
    });
    console.log("backgroundcolor updated", color);
  }

  render() {

    const { data } = this.props;
    const { label } = data;
    const { backgroundColor, color } = this.state;

    return(
      <div className={classes['root']}>
        <div className={classes['main-label-wrapper']}>
          <label className={classes['label-text']}>{label}</label>
        </div>
        <div className={classes['options']}>
          <div className={classes['options-row']}>
            <div className={classes['option']}>
              <FieldColorPicker defaultColor={color} handleColorChange={this.handleColorChange}>
                <label>
                  <input className={classes['input']} type="text" value={color} />
                  <span className={classes['option__label']}>Text</span>
                </label>
              </FieldColorPicker>
            </div>
            <div className={classes['option']}>
              {/*<FieldColorPicker>*/}
                <label>
                  <input className={classes['input']} type="text" placeholder="#000000"/>
                  <span className={classes['option__label']}>Background</span>
                </label>
              {/*</FieldColorPicker>*/}
            </div>
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
