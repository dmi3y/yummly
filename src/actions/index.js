/**
 * @module actions/index
 *
 */

import $ from 'jquery'

const headers = {
  'X-Yummly-App-ID': 'decfb99e',
  'X-Yummly-App-Key': ' 6fe05346f049b28255378b6e7936acc2'
}
const apiUri = 'http://api.yummly.com/v1/api'
const recipesUri = `${apiUri}/recipes`
const recipeUri = `${apiUri}/recipe`

$.ajaxSetup({headers})

/* request recipes (multiply) data */
export function requestRecipesData (query) {
  return { type: 'REQUEST_RECIPES_DATA', query }
}

export function receiveRecipesData (recipes) {
  return { type: 'RECEIVE_RECIPES_DATA', recipes }
}

export function resetRecipesData () {
  return { type: 'RESET_RECIPES_DATA' }
}

export function fetchRecipesData (query) {
  return function (dispatch, getState) {
    let state = getState()
    let {maxResult, start} = state.recipesData
    query.maxResult = maxResult
    query.start = start
    dispatch(requestRecipesData(query))
    let data = query
    return $.get(
      recipesUri,
      data
    )
    .then(
      (data) => dispatch(receiveRecipesData(data.matches || []))
    )
  }
}

/* request recipe (singe) data */
export function requestRecipeData (id) {
  return { type: 'REQUEST_RECIPE_DATA', id }
}

export function receiveRecipeData (recipe) {
  return { type: 'RECEIVE_RECIPE_DATA', recipe }
}

export function resetRecipeData () {
  return { type: 'RESET_RECIPE_DATA' }
}

export function fetchRecipeData (id) {
  return function (dispatch) {
    dispatch(requestRecipeData(id))
    return $.get(
      `${recipeUri}/${id}`
    )
    .then(
      (data) => dispatch(receiveRecipeData(data))
    )
  }
}
