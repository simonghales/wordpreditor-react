
import React          from 'react'
import * as types     from './types'
import FieldText      from '../../components/componentEditorComponents/FieldText'

export const EDITOR_FIELDS_MAPPING = {
  [types.FIELD_TEXT]: (data) => (<FieldText data={data} />),
};