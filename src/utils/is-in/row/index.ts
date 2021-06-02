import { GRID, NUMBERS } from 'typings'

interface IInput {
  grid: GRID
  row: number
  value: NUMBERS
}

/**
 * A function that returns true if the value is already being used in the current grid row
 * Object with 9x9 Sudoku Grid, row index and value
 * @param grid
 * @param row
 * @param value
 */
function isInRow({ grid, row, value }: IInput): boolean {
  return grid[row].includes(value)
}

export default isInRow
