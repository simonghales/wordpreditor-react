
import { INITIAL_STATE } from '../../constants/initialState'

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const SET_SELECTED_TAB = 'SET_SELECTED_TAB'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

export function setSelectedTab(tab) {
  return {
    type: SET_SELECTED_TAB,
    payload: { tab }
  }
}

/*  This is a thunk, meaning it is a function that immediately
 returns a function for lazy evaluation. It is incredibly useful for
 creating async actions, especially when combined with redux-thunk!

 NOTE: This is solely for demonstration purposes. In a real application,
 you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
 reducer take care of this logic.  */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(increment(getState().counter))
        resolve()
      }, 200)
    })
  }
}

export const actions = {
  increment,
  doubleAsync,
  setSelectedTab
}

// ------------------------------------
// Action Handlers
// ------------------------------------

export function handleSetSelectedTab(state, payload) {
  const { tab } = payload;
  return state.set('selectedTab', tab);
}

const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => state + action.payload,
  [SET_SELECTED_TAB]: (state, action) => handleSetSelectedTab(state, action.payload)
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = INITIAL_STATE.editor
export function editorReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

