import { Action, AnyAction } from 'redux'
import * as types from './types'
import { BLOCK_COORDS, NUMBERS } from 'typings'

export const createGrid = (): Action => ({ type: types.CREATE_GRID })
export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
  coords,
  type: types.SELECT_BLOCK,
})
export const fillBlock = (value: NUMBERS, coords: BLOCK_COORDS): AnyAction => ({
  coords,
  type: types.FILL_BLOCK,
  value,
})
