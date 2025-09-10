import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

type TextState = {
  text: string;
};

const initialState: TextState = {
  text: "",
};

const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { setText } = textSlice.actions;

export const store = configureStore({
  reducer: {
    text: textSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
