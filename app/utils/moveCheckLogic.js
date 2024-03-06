export const isColumnOfFour = (
    newBoard,
    boardSize,
    formulaForColumnOfFour
  ) => {
    for (let i = 0; i <= formulaForColumnOfFour; i++) {
      const columnOfFour = [i, i + boardSize, i + boardSize * 2, i + boardSize * 3];
      const decidedColor = newBoard[i];
      const isBlank = newBoard[i] === "";
  
      if (
        columnOfFour.every(
          (square) => newBoard[square] === decidedColor && !isBlank
        )
      ) {
        columnOfFour.forEach((square) => (newBoard[square] = ""));
        return true;
      }
    }
  };
  
  export const checkForRowOfFour = (
    newBoard,
    boardSize,
    invalidMovesForColumnOfFour
  ) => {
    for (let i = 0; i < boardSize * boardSize; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3];
      const decidedColor = newBoard[i];
      const isBlank = newBoard[i] === "";
  
      if (invalidMovesForColumnOfFour.includes(i)) continue;
      if (
        rowOfFour.every((square) => newBoard[square] === decidedColor && !isBlank)
      ) {
        rowOfFour.forEach((square) => (newBoard[square] = ""));
        return true;
      }
    }
  };
  
  export const checkForColumnOfThree = (
    newBoard,
    boardSize,
    formulaForColumnOfThree
  ) => {
    for (let i = 0; i <= formulaForColumnOfThree; i++) {
      const columnOfThree = [i, i + boardSize, i + boardSize * 2];
      const decidedColor = newBoard[i];
      const isBlank = newBoard[i] === "";
  
      if (
        columnOfThree.every(
          (square) => newBoard[square] === decidedColor && !isBlank
        )
      ) {
        columnOfThree.forEach((square) => (newBoard[square] = ""));
        return true;
      }
    }
  };
  
  export const checkForRowOfThree = (
    newBoard,
    boardSize,
    invalidMovesForColumnOfThree
  ) => {
    for (let i = 0; i < boardSize * boardSize; i++) {
      const rowOfThree = [i, i + 1, i + 2];
      const decidedColor = newBoard[i];
      const isBlank = newBoard[i] === "";
  
      if (invalidMovesForColumnOfThree.includes(i)) continue;
  
      if (
        rowOfThree.every(
          (square) => newBoard[square] === decidedColor && !isBlank
        )
      ) {
        rowOfThree.forEach((square) => (newBoard[square] = ""));
        return true;
      }
    }
  };
  