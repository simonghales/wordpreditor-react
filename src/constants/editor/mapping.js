
import React                  from 'react'
import { fieldPropsPrep }     from './fieldPrep'
import * as types             from './types'
import FieldBorder            from '../../components/componentEditorComponents/FieldBorder'
import FieldBorderRadius      from '../../components/componentEditorComponents/FieldBorderRadius'
import FieldColor             from '../../components/componentEditorComponents/FieldColor'
import FieldLink              from '../../components/componentEditorComponents/FieldLink'
import FieldMargin            from '../../components/componentEditorComponents/FieldMargin'
import FieldPadding           from '../../components/componentEditorComponents/FieldPadding'
import FieldShadow            from '../../components/componentEditorComponents/FieldShadow'
import FieldSharedStyles      from '../../components/componentEditorComponents/FieldSharedStyles'
import FieldSize              from '../../components/componentEditorComponents/FieldSize'
import FieldText              from '../../components/componentEditorComponents/FieldText'

export const EDITOR_FIELDS_MAPPING = {
  [types.FIELD_BORDER]: (data) => {
    let props = fieldPropsPrep(data);
    return <FieldBorder {...props} />
  },
  [types.FIELD_BORDER_RADIUS]: (data) => {
    let props = fieldPropsPrep(data);
    return <FieldBorderRadius {...props} />
  },
  [types.FIELD_COLOR]: (data) => {
    let props = fieldPropsPrep(data);
    return <FieldColor {...props} />
  },
  [types.FIELD_LINK]: (data) => {
    let props = fieldPropsPrep(data);
    return <FieldLink {...props} />
  },
  [types.FIELD_MARGIN]: (data) => {
    let props = fieldPropsPrep(data);
    return <FieldMargin {...props} />
  },
  [types.FIELD_PADDING]: (data) => {
    let props = fieldPropsPrep(data);
    return <FieldPadding {...props} />
  },
  [types.FIELD_SHADOW]: (data) => {
    let props = fieldPropsPrep(data);
    return <FieldShadow {...props} />
  },
  [types.FIELD_SHARED_STYLES]: (data) => {
    let props = fieldPropsPrep(data);
    return <FieldSharedStyles {...props} />
  },
  [types.FIELD_SIZE]: (data) => {
    let props = fieldPropsPrep(data);
    return <FieldSize {...props} />
  },
  [types.FIELD_TEXT]: (data) => {
    let props = fieldPropsPrep(data);
    return <FieldText {...props} />
  },
};