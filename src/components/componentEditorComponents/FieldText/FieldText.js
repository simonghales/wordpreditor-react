import React from 'react'
import classes from './FieldText.scss'


class FieldText extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={classes['root']}>
        <label>
          <span className={classes['label']}>Field Label</span>
          <input className={classes['input']} type="text"/>
        </label>
      </div>
    );
  }

}

FieldText.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default FieldText
