
import React from 'react'
import { COMPONENT_MAPPING } from '../../constants/component/mapping'
import { COMPONENT_TYPES_SETTINGS } from '../../constants/component/types'

export function areChildrenAllowed(type) {
  return COMPONENT_TYPES_SETTINGS[type].childrenAllowed;
}

export function recursiveGetChildrenCount(children) {

  let count = children.length;

  for (var i = 0, len = children.length; i < len; i++) {
    let childChildren = children[i].children;
    if(childChildren) {
      count += recursiveGetChildrenCount(childChildren);
    }
  }

  return count;

}

export function returnComponentChildrenCount(componentData) {
  const { children } = componentData;
  return (children) ? children.length : 0;
}

export function returnComponentDescendantsCount(componentData) {
  const { children } = componentData;
  return (children) ? recursiveGetChildrenCount(children) : 0;
}

export function returnComponentObject(componentData) {
  const { type } = componentData;
  const component = COMPONENT_MAPPING[type](componentData);
  return component ? component : '';
}

export function returnChildren(data) {

  const { children, type } = data;
  let childrenComponents = [];

  if(!areChildrenAllowed(type)) {
    console.warn("children detected, but children are not supported by this type", type);
    return childrenComponents;
  }

  for(let i = 0, len = children.length; i < len; i++) {
    let child = children[i];
    childrenComponents.push(
      returnComponentObject(child)
    );
  }

  return childrenComponents;

}

export function returnPageComponents(componentsData) {

  let components = [];

  for(let i = 0, len = componentsData.length; i < len; i++) {
    components.push(returnComponentObject(componentsData[i]));
  }

  return components;

}