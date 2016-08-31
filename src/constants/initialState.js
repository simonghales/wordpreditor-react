import { List, Map, fromJS } from 'immutable'
import { EDITOR_TAB_MAIN, EDITOR_TAB_STYLING } from './editor/fields'

export const INITIAL_STATE = {
  editor: Map({
    selectedComponent: null,
    selectedTab: EDITOR_TAB_STYLING
  }),
  router: {}
};