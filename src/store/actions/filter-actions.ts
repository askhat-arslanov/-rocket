import * as types from '../types/filter-types'

export const filterPosts = (filterValue: string) => ({
  type: types.FILTER_POSTS,
  payload: { filterValue }
})
