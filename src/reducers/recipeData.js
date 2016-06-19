/**
 * @module reducers/recipeData
 */

const DEFAULT_STATE = {
  isFetching: false,
  id: null,
  recipe: {}
}

function recipeData (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'RESET_RECIPE_DATA':
      return Object.assign({}, state, DEFAULT_STATE)
    case 'REQUEST_RECIPE_DATA':
      return Object.assign({}, state, {
        isFetching: true,
        id: action.id
      })
    case 'RECEIVE_RECIPE_DATA':
      return Object.assign({}, state, {
        isFetching: false,
        recipe: action.recipe
      })
    default:
      return state
  }
}

export default recipeData
