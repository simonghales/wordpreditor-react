import React from 'react'
import classes from './ComponentEditorHeader.scss'

class ComponentEditorHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { selectedComponent } = this.props;

    if(selectedComponent) {
      var { label } = selectedComponent;
    } else {
      var label = 'NOTHING SELECTED';
    }

    return (
      <header className={classes['root']}>
        {label}
      </header>
    );

  }

}

ComponentEditorHeader.propTypes = {
  selectedComponent: React.PropTypes.object.isRequired,
}

export default ComponentEditorHeader
