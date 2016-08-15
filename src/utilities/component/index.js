
import React from 'react'
import { COMPONENT_MAPPING } from '../../constants/component/mapping'

export function returnComponentObject(componentData) {
  const { type } = componentData;
  console.log("type", type);
  const component = COMPONENT_MAPPING[type](componentData);
  console.log("returned component", component);
  return component ? component : '';
}