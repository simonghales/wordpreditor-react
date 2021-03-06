import React from 'react'
import classes from './ComponentEditor.scss'
import ComponentEditorHeader from '../ComponentEditorHeader'
import ComponentEditorNav from '../ComponentEditorNav'
import { EDITOR_FIELDS } from '../../constants/editor/fields'
import { EDITOR_FIELDS_MAPPING } from '../../constants/editor/mapping'

class ComponentEditor extends React.Component {

  constructor(props) {
    super(props);
    this.renderFields = this.renderFields.bind(this);
  }

  renderFields() {

    const { editor } = this.props;
    const selectedTab = editor.get('selectedTab');

    const fields = EDITOR_FIELDS[selectedTab].fields;
    let fieldsComponents = [];

    for (let i = 0, len = fields.length; i < len; i++) {
      let field = fields[i];
      const { type } = field;
      let fieldComponent = EDITOR_FIELDS_MAPPING[type](field);
      fieldsComponents.push(
        <div className={classes['field-wrapper']}>
          {fieldComponent}
        </div>
      );
    }

    return fieldsComponents;

  }

  render() {

    const { editor, setSelectedTab } = this.props;

    const selectedComponent = editor.get('selectedComponent');
    const selectedTab = editor.get('selectedTab');

    return (
      <div className={classes['root']}>
        <ComponentEditorHeader selectedComponent={selectedComponent} />
        <ComponentEditorNav selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className={classes['tab-content']}>
          {this.renderFields()}
        </div>
      </div>
    );

  }

}

ComponentEditor.propTypes = {
  editor: React.PropTypes.object.isRequired,
  setSelectedTab: React.PropTypes.func.isRequired,
}

export default ComponentEditor
