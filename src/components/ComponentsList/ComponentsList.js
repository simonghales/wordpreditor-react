import React from 'react'
import classes from './ComponentsList.scss'
import ComponentsListComponent from '../ComponentsListComponent'

const EXAMPLE_PAGE_DATA = require('../../data/example/page.json');
const { components } = EXAMPLE_PAGE_DATA;

class ComponentsList extends React.Component {

    constructor(props) {
        super(props);
        this.renderComponents = this.renderComponents.bind(this);
    }

    renderComponents() {

        const { editor, setSelectedComponent } = this.props;

        const selectedComponent = editor.get('selectedComponent');

        let componentsHTML = [];

        for (var i = 0, len = components.length; i < len; i++) {
            let component = components[i];
            componentsHTML.push(
              <div className={classes['component-container']}>
                  <ComponentsListComponent data={component}
                                           level={0}
                                           childIndex={i}
                                           parentShaded={true}
                                           selectedComponent={selectedComponent}
                                           setSelectedComponent={setSelectedComponent} />
              </div>
            );
        }

        return componentsHTML;

    }

    render() {

        return(
          <div className={classes['root']}>
              <header className={classes['header']}>
                  Components List
              </header>
              <section>
                  {this.renderComponents()}
              </section>
          </div>
        );
    }

}

ComponentsList.propTypes = {
  editor: React.PropTypes.object.isRequired,
  setSelectedComponent: React.PropTypes.func.isRequired,
}

export default ComponentsList
