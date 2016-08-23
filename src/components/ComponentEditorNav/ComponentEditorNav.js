import React from 'react'
import classes from './ComponentEditorNav.scss'
import { EDITOR_FIELDS } from '../../constants/editor/fields'
var classNames =            require('classnames');

class ComponentEditorNav extends React.Component {

  constructor(props) {
    super(props);
  }

  renderLinks() {

    const { selectedTab } = this.props;
    let linksComponents = [];

    for (let tab in EDITOR_FIELDS) {

      const tabData = EDITOR_FIELDS[tab];

      const { label, id } = tabData;

      let active = (id === selectedTab);

      let linkClasses = classNames(
        classes['link'],
        {
          [classes['state--active']]: active
        }
      );

      linksComponents.push(
        <div className={linkClasses}>
          {label}
        </div>
      );
    }

    return linksComponents;

  }

  render() {

    return(
      <nav className={classes['root']}>
        {this.renderLinks()}
      </nav>
    );
  }

}

ComponentEditorNav.propTypes = {
  selectedTab: React.PropTypes.string.isRequired
}

export default ComponentEditorNav
