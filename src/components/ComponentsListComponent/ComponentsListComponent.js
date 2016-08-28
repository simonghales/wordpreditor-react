import React from 'react'
import classes from './ComponentsListComponent.scss'
import { isComponentShaded, returnComponentIcon, returnComponentChildrenCount, returnComponentDescendantsCount } from '../../utilities/component'
var classNames =            require('classnames');

class ComponentsListComponent extends React.Component {

  constructor(props) {
    super(props);
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

    const { childIndex, data, level, parentShaded } = this.props;

    const { children } = data;

    if(!children) return '';

    let childComponents = [];

    let parentOdd = ((childIndex) % 2) ? true : false;
    let shaded = isComponentShaded(childIndex, parentOdd, parentShaded);

    for(let i = 0, len = children.length; i < len; i++) {
      let child = children[i];
      childComponents.push(
        <ComponentsListComponent data={child} level={level + 1}
                                 childIndex={i}
                                 parentShaded={shaded} />
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

    const { childIndex, data, level, parentShaded } = this.props;

    const { label } = data;

    let shaded = isComponentShaded(childIndex, parentShaded);

    let rootClasses = classNames(
      classes['root'],
      classes['level--' + level],
      {
        [classes['shaded']]: shaded,
        [classes['not-shaded']]: !shaded,
      }
    );

    return(
      <div className={rootClasses}>
        <div className={classes['main']}>
          <div className={classes['name-wrapper']}>
            <span className={classes['icon']}>
              {this.renderIcon()}
            </span>
            <span className={classes['name']}>{label}</span>
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
}

export default ComponentsListComponent
