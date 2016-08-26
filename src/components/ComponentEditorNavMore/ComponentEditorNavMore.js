import React from 'react'
import classes from './ComponentEditorNavMore.scss'
import { EDITOR_TAB_CUSTOM } from '../../constants/editor/fields'
var classNames =            require('classnames');


class ComponentEditorNavMore extends React.Component {

  constructor(props) {
    super(props);
    this.selectTab = this.selectTab.bind(this);
  }

  isATabSelected() {

    const { fields, selectedTab } = this.props;

    for (let tab in fields) {

      const tabData = fields[tab];

      const { label, id, mainField } = tabData;

      if(!mainField) {

        let active = (id === selectedTab);

        if(active) return true;

      }

    }

    return false;

  }

  selectTab() {

    const { fields, setSelectedTab } = this.props;

    let tab = fields[EDITOR_TAB_CUSTOM];

    const { id } = tab;

    setSelectedTab(id);

  }

  render() {

    let mainClasses = classNames(
      classes['root'],
      {
        [classes['state--selected']]: this.isATabSelected()
      }
    );

    return(
      <div className={mainClasses} onClick={this.selectTab}>
        ::
      </div>
    );
  }

}

ComponentEditorNavMore.propTypes = {
  fields: React.PropTypes.object.isRequired,
  selectedTab: React.PropTypes.string.isRequired,
  setSelectedTab: React.PropTypes.func.isRequired
}

export default ComponentEditorNavMore
