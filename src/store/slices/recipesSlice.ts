import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Recipe } from '~/lib/types';

type INITIAL_STATE_PROPS = {
  recipes: Recipe[];
};

const initialState = {
  recipes: [],
} as INITIAL_STATE_PROPS;

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addRecipes: (state, action: PayloadAction<Recipe[]>) => {
      return { ...state, recipes: [...state.recipes, ...action.payload] };
    },
    clearRecipes: (state) => {
      return { ...state, recipes: [] };
    },
  },
});

export const { addRecipes } = recipesSlice.actions;

export default recipesSlice.reducer;
