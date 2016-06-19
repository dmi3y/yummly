/**
 * @module containers/recipeDetailCont
 * @description Recipes data
 */

import { connect } from 'react-redux'
import recipeDetail from '../components/recipeDetail'

const mapStateToProps = (state) => ({
  recipe: state.recipeData.recipe,
  isFetching: state.recipeData.isFetching
})

const recipeDetailCont = connect(
  mapStateToProps
)(recipeDetail)

export default recipeDetailCont
