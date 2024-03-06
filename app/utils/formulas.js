export const formulaForColumnOfFour = (boardSize) =>
  boardSize * boardSize - (boardSize + boardSize + boardSize) - 1;

export const formulaForColumnOfThree = (boardSize) =>
  boardSize * boardSize - (boardSize + boardSize) - 1;

export const formulaForMoveBelow = (boardSize) =>
  boardSize * boardSize - boardSize - 1;

export const generateInvalidMoves = (boardSize, isFour = false) => {
  const invalidMoves = [];
  for (let i = boardSize; i <= boardSize * boardSize; i += boardSize) {
    if (isFour) invalidMoves.push(i - 3);
    invalidMoves.push(i - 2);
    invalidMoves.push(i - 1);
  }
  return invalidMoves;
};
