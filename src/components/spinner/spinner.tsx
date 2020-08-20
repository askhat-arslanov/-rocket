import React, { FC } from 'react'
import styled from 'styled-components'

import SpinnerCube from './img/spinner-cube.svg'

const Spinner: FC = () => (
  <SpinnerWrapper>
    <SpinnerImage src={SpinnerCube} alt="Spinner" />
  </SpinnerWrapper>
)

export default Spinner

const SpinnerWrapper = styled.div`
  
`
const SpinnerImage = styled.img`
  width: 2wv;
  height: auto;
`
