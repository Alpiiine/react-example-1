import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@app/store.ts';

const initialState = {
  cocktails: [],
};

export const cocktailSlice = createSlice({
  name: 'cocktail',
  initialState,
  reducers: {
    setCocktails(state, action) {
      state.cocktails = action.payload;
    },
  },
});

export const selectCocktails = (state: RootState) => state.cocktail.cocktails;

export const { setCocktails } = cocktailSlice.actions;

export const cocktailReducer = cocktailSlice.reducer;
