import React, { FC } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

// Здесь обычно прописываются алиасы в webpack для исключения такого пути
import { filterPosts } from '../../store/actions/filter-actions'

interface FilterProps {
  filterValue: any
  onFilterPosts: any
}

const Filter: FC<FilterProps> = ({ filterValue, onFilterPosts }) => {
  return (
    <FilterInput
      value={filterValue}
      placeholder="Enter some text..."
      onChange={e => onFilterPosts(e.target.value)}
    />
  )
}

const mapStateToProps = ({ filter }: { filter: any }) => ({
  filterValue: filter.filterValue
})

const mapDispatchToProps = (dispatch: any) => ({
  onFilterPosts: (val: string) => dispatch(filterPosts(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)

const FilterInput = styled.input`
  width: 60rem;
  background: none;
  border: none;
  border-bottom: 1px solid #333;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;

  &:focus {
    outline: none;
  }
`
