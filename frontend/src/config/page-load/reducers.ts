import { AnyAction } from 'redux'

import CurrentUserTypes from './types'
import actions from './actions'

const initialState: CurrentUserTypes = {
  loading: false,
}

export default function pageLoad(state = initialState, action: AnyAction): CurrentUserTypes {
  switch (action.type) {
    case actions.START_PAGE_LOAD:
      return {
        ...initialState,
        loading: true,
      }
    case actions.END_PAGE_LOAD:
      return {
        ...initialState,
        loading: false,
      }
    default:
      return state
  }
}
