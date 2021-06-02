import React, { FC } from 'react'
import { NUMBERS } from 'typings'
import { Container } from './styles'
import NumberButton from './button'

const Numbers: FC = () => (
  <Container>
    {([1, 2, 3, 4, 5, 6, 7, 8, 9] as NUMBERS[]).map((value) => (
      <NumberButton key={value} value={value} />
    ))}
  </Container>
)

export default Numbers
