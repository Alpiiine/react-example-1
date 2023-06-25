import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { apiSlice } from '@features/api/api-slice.ts';
import { cocktailReducer } from '@features/cocktail/cocktail-slice.ts';

export const store = configureStore({
  reducer: {
    cocktail: cocktailReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
