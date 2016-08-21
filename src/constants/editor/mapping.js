
import React          from 'react'
import { fieldPropsPrep }  from './fieldPrep'
import * as types     from './types'
import FieldText      from '../../components/componentEditorComponents/FieldText'

export const EDITOR_FIELDS_MAPPING = {
  [types.FIELD_TEXT]: (data) => {
    let props = fieldPropsPrep(data);
    return <FieldText {...props} />
  },
};