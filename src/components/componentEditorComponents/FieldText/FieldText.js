import React from 'react'
import classes from './FieldText.scss'


class FieldText extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { data } = this.props;
    const { label } = data;

    return(
      <div className={classes['root']}>
        <label className={classes['label']}>
          <span className={classes['label-text']}>{label}</span>
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
