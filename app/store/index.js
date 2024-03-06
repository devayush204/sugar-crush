
const { createSlice, configureStore, createAsyncThunk } = require("@reduxjs/toolkit");
const { dragEndReducer } = require("./reducers/dragEnd");
const { moveBelowReducer } = require("./reducers/moveBelow");

const initialState = {
  board: [],
  boardSize: 8,
  squareBeingDragged: undefined,
  squareBeingReplaced: undefined,
};

const candyCrushSlice = createSlice({
  name: "candyCrush",
  initialState,
  reducers: {
    updateBoard: (state, action) => {
      state.board = action.payload;
    },
    dragStart: (state, action) => {
      state.squareBeingDragged = action.payload;
    },
    dragDrop: (state, action) => {
      state.squareBeingReplaced = action.payload;
    },
    dragEnd: dragEndReducer,
    moveBelow: moveBelowReducer,
  },
});

const store = configureStore({
  reducer: {
    candyCrush: candyCrushSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const { updateBoard, moveBelow, dragDrop, dragEnd, dragStart } =
  candyCrushSlice.actions;

module.exports = { store, updateBoard, moveBelow, dragDrop, dragEnd, dragStart };
