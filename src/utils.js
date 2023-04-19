export const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0)

const plusOp = (x, y) => x + y

const minusOp = (x, y) => x - y

const findStep = (arr, elem, op, stp) => {
  const curr = arr.findIndex((x) => x === elem)
  const to = op(curr, stp)
  if (to >= 0 && typeof arr[to] !== 'undefined') {
    return arr[to]
  } else {
    return curr < to ? arr[0] : arr[arr.length - 1]
  }
}

export const findNext = (arr, elem) => findStep(arr, elem, plusOp, 1)

export const findPrev = (arr, elem) => findStep(arr, elem, minusOp, 1)
