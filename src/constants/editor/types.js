
import { EDITOR_FIELD_SHARED_HEIGHT, EDITOR_FIELD_SHARED_WIDTH } from './fields'

export const FIELD_TEXT                = 'text'
export const FIELD_SHARED_STYLES       = 'sharedstyles'

export const FIELD_TYPES_SETTINGS = {
  [FIELD_TEXT]: {
    "disabled": [
      EDITOR_FIELD_SHARED_HEIGHT,
      EDITOR_FIELD_SHARED_WIDTH
    ]
  },
  [FIELD_SHARED_STYLES]: {},
};