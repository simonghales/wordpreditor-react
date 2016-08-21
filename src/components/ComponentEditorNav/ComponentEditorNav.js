import React from 'react'
import classes from './ComponentEditorNav.scss'
import { EDITOR_FIELDS } from '../../constants/editor/fields'


class ComponentEditorNav extends React.Component {

  constructor(props) {
    super(props);
  }

  renderLinks() {

    let linksComponents = [];

    for (let tab in EDITOR_FIELDS) {

      const tabData = EDITOR_FIELDS[tab];

      const { label } = tabData;

      linksComponents.push(
        <div className={classes['link']}>
          {label}
        </div>
      );
    }

    return linksComponents;

  }

  render() {
    return(
      <nav className={classes['root']}>
        <div className={[classes['link'],classes['state--active']].join(' ')}>
          Main
        </div>
        <div className={classes['link']}>
          Size
        </div>
        {this.renderLinks()}
      </nav>
    );
  }

}

ComponentEditorNav.propTypes = {
}

export default ComponentEditorNav
