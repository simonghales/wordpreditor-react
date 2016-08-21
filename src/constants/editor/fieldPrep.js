

let _ = require('underscore');

export function fieldPropsPrep(fieldData) {

  let data = fieldDataPrep(fieldData);

  return { data };

}

export function fieldDataPrep(data) {

  let clonedData = _.clone(data); // warning: this is a shallow clone?
  return clonedData;

}