import React from 'react'
import styled from 'styled-components'

import Filter from '../filter'
import PostList from '../post-list'

const App = () => {
  return (
    <AppWrapper>
      <Filter />
      <PostList />
    </AppWrapper>
  )
}

export default App

const AppWrapper = styled.main`
  padding: 2rem 0;
`
