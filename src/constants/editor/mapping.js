
import React                  from 'react'
import { fieldPropsPrep }     from './fieldPrep'
import * as types             from './types'
import FieldLink              from '../../components/componentEditorComponents/FieldLink'
import FieldText              from '../../components/componentEditorComponents/FieldText'
import FieldSharedStyles      from '../../components/componentEditorComponents/FieldSharedStyles'

export const EDITOR_FIELDS_MAPPING = {
  [types.FIELD_LINK]: (data) => {
    let props = fieldPropsPrep(data);
    return <FieldLink {...props} />
  },
  [types.FIELD_TEXT]: (data) => {
    let props = fieldPropsPrep(data);
    return <FieldText {...props} />
  },
  [types.FIELD_SHARED_STYLES]: (data) => {
    let props = fieldPropsPrep(data);
    return <FieldSharedStyles {...props} />
  },
};