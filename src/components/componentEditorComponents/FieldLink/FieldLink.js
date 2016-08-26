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
        <label className={classes['label']}>
          <span className={classes['label-text']}>{label}</span>
          <input className={classes['input']} type="text"/>
        </label>
        <div>Link option 1</div>
        <div>Link option 2</div>
      </div>
    );
  }

}

FieldLink.propTypes = {
  data: React.PropTypes.object.isRequired
}

export default FieldLink
