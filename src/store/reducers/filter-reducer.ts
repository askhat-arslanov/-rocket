import * as types from '../types/filter-types'

const initialState = {
  filterValue: ''
}

export default function (state = initialState, { type, payload }: { type: string; payload: any }) {
  switch (type) {
    case types.FILTER_POSTS:
      const { filterValue } = payload
      return {
        ...state,
        filterValue
      }

    default:
      return state
  }
}
