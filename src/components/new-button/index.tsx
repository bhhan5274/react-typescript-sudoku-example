import React, { FC, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { Dispatch, Action } from 'redux'
import { Button } from 'components'
import { createGrid } from 'reducers'

const NewButton: FC = () => {
  const dispatch = useDispatch<Dispatch<Action>>()
  const createNewGrid = useCallback(() => {
    if (window.confirm('Are you sure you want to start a new game?')) {
      dispatch(createGrid())
    }
  }, [dispatch])

  return <Button onClick={createNewGrid}>New Game</Button>
}

export default NewButton
