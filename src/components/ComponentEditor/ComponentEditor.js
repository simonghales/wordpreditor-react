import React from 'react'
import classes from './ComponentEditor.scss'
import { EDITOR_FIELDS } from '../../constants/editor/fields'
import { EDITOR_FIELDS_MAPPING } from '../../constants/editor/mapping'

class ComponentEditor extends React.Component {

  constructor(props) {
    super(props);
    this.renderFields = this.renderFields.bind(this);
  }

  renderFields() {

    const fields = EDITOR_FIELDS.main.fields;
    let fieldsComponents = [];

    for (let i = 0, len = fields.length; i < len; i++) {
      let field = fields[i];
      const { type } = field;
      let fieldComponent = EDITOR_FIELDS_MAPPING[type](field);
      fieldsComponents.push(fieldComponent);
    }

    console.log("fields components", fieldsComponents);

    return fieldsComponents;

  }

  render() {

    return (
      <div className={classes['root']}>
        <header className={classes['header']}>
          Name of Element
        </header>
        <nav className={classes['nav']}>
          <div className={[classes['nav__link'],classes['state--active']].join(' ')}>
            Main
          </div>
          <div className={classes['nav__link']}>
            Size
          </div>
        </nav>
        <div className={classes['tab-content']}>
          {this.renderFields()}
        </div>
      </div>
    );

  }

}

export default ComponentEditor
