/**
 * @module containers/recipesListCont
 * @description Recipes data
 */

import { connect } from 'react-redux'
import recipesList from '../components/recipesList'
import {
  fetchRecipesData
} from '../actions'

const mapStateToProps = (state) => {
  let r = state.recipesData
  return ({
    recipes: r.recipes,
    hasNothingFound: r.query && !r.recipes.lenght && !r.isFetching,
    query: r.query,
    isFetching: r.isFetching
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickMore (query) {
      dispatch(fetchRecipesData(query))
    }
  }
}

const recipesListCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(recipesList)

export default recipesListCont
