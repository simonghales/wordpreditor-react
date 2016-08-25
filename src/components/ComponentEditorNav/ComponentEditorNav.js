import React from 'react'
import classes from './ComponentEditorNav.scss'
import { EDITOR_FIELDS } from '../../constants/editor/fields'
import ComponentEditorNavMore from '../ComponentEditorNavMore'
var classNames =            require('classnames');

class ComponentEditorNav extends React.Component {

  constructor(props) {
    super(props);
    this.setSelectedTab = this.setSelectedTab.bind(this);
  }

  setSelectedTab(id) {

    const { setSelectedTab } = this.props;

    setSelectedTab(id);

  }

  renderLinks() {

    const { selectedTab } = this.props;
    let linksComponents = [];

    for (let tab in EDITOR_FIELDS) {

      const tabData = EDITOR_FIELDS[tab];

      const { label, id, mainField } = tabData;

      // Only mainField tabs are rendered here
      if(!mainField) continue;

      let active = (id === selectedTab);

      let linkClasses = classNames(
        classes['link'],
        {
          [classes['state--active']]: active
        }
      );

      linksComponents.push(
        <div className={linkClasses}
             onClick={() => {this.setSelectedTab(id)}}>
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
        <ComponentEditorNavMore />
      </nav>
    );
  }

}

ComponentEditorNav.propTypes = {
  selectedTab: React.PropTypes.string.isRequired,
  setSelectedTab: React.PropTypes.func.isRequired
}

export default ComponentEditorNav
