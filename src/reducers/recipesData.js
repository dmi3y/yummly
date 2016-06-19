/**
 * @module reducers/recipesData
 */

const DEFAULT_STATE = {
  isFetching: false,
  maxResult: 30,
  start: 0,
  query: null,
  recipes: []
}

function recipesData (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'RESET_RECIPES_DATA':
      return Object.assign({}, state, DEFAULT_STATE)
    case 'REQUEST_RECIPES_DATA':
      return Object.assign({}, state, {
        isFetching: true,
        query: action.query,
        start: state.start + state.maxResult
      })
    case 'RECEIVE_RECIPES_DATA':
      return Object.assign({}, state, {
        isFetching: false,
        recipes: state.recipes.concat(action.recipes)
      })
    default:
      return state
  }
}

export default recipesData
