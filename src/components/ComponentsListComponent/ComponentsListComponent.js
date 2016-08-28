import React from 'react'
import classes from './ComponentsListComponent.scss'
import { isComponentShaded, isComponentSelected,
  returnComponentIcon,
  returnComponentChildrenCount,
  returnComponentDescendantsCount } from '../../utilities/component'
var classNames =            require('classnames');
var FontAwesome = require('react-fontawesome');

class ComponentsListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.selectComponent = this.selectComponent.bind(this);
  }

  selectComponent() {

    const { data, setSelectedComponent } = this.props;

    setSelectedComponent(data);

  }

  renderChildInfo() {

    const { data } = this.props;

    const { children } = data;

    if(!children) return '';

    let childrenCount = returnComponentChildrenCount(data);
    let descendantsCount = returnComponentDescendantsCount(data);

    return(
      <div className={classes['info']}>
          <span className={classes['children']}>
            <span className={classes['count']}>{childrenCount}</span> children
          </span>
        <span className={classes['descendants']}>
            <span className={classes['count']}>{descendantsCount}</span> descendants
          </span>
      </div>
    );

  }

  renderChildComponents() {

    const { data, level, selectedComponent, setSelectedComponent } = this.props;

    const { children } = data;

    if(!children) return '';

    let childComponents = [];

    let shaded = isComponentShaded(level);

    for(let i = 0, len = children.length; i < len; i++) {
      let child = children[i];
      childComponents.push(
        <ComponentsListComponent data={child} level={level + 1}
                                 childIndex={i}
                                 parentShaded={shaded}
                                 selectedComponent={selectedComponent}
                                 setSelectedComponent={setSelectedComponent} />
      );
    }

    return (
      <div className={classes['children-container']}>
        {childComponents}
      </div>
    );

  }

  renderIcon() {
    const { data } = this.props;
    return returnComponentIcon(data);
  }

  render() {

    const { data, level, selectedComponent } = this.props;

    const { label, type } = data;

    let shaded = isComponentShaded(level);
    let selected = isComponentSelected(data, selectedComponent);

    let rootClasses = classNames(
      classes['root'],
      classes['level--' + level],
      classes['type--' + type],
      {
        [classes['selected']]: selected,
        [classes['shaded']]: shaded,
        [classes['not-shaded']]: !shaded,
      }
    );

    return(
      <div className={rootClasses}>
        <div className={classes['main']} onClick={this.selectComponent}>
          <div className={classes['name-wrapper']}>
            <span className={classes['folder-icon']}>
              <FontAwesome name='caret-down' />
            </span>
            <span className={classes['icon']}>
              {this.renderIcon()}
            </span>
            <span className={classes['name']}>{label}</span>
          </div>
          <div className={classes['trash-icon']}>
            <FontAwesome name='trash' />
          </div>
          {this.renderChildInfo()}
        </div>
        {this.renderChildComponents()}
      </div>
    );
  }

}

ComponentsListComponent.propTypes = {
  childIndex: React.PropTypes.number.isRequired,
  data: React.PropTypes.object.isRequired,
  level: React.PropTypes.number.isRequired,
  parentShaded: React.PropTypes.bool.isRequired,
  selectedComponent: React.PropTypes.object.isRequired,
  setSelectedComponent: React.PropTypes.func.isRequired,
}

export default ComponentsListComponent
