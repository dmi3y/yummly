/**
 * @module reducers/index
 * @description Default reducer for redux architeture
 */

import { combineReducers } from 'redux'

import recipesData from './recipesData'
import recipeData from './recipeData'
import formData from './formData'

/* Shape for the state data
  {
    recipesData: {
      isFetching: false,
      maxResult: 10,
      start: 0,
      query: null,
      recipes: [] // <-- matches
    },
    recipeData: {
      isFetching: false,
      id: null,
      recipe: {}
    },
    formData: {
      input: ''
    }
  }
*/

const appReducers = combineReducers({
  recipesData,
  recipeData,
  formData
})

export default appReducers
