/**
 * @module containers/recipesListCont
 * @description Recipes data
 */

import { connect } from 'react-redux'
import recipesList from '../components/recipesList'

const mapStateToProps = (state) => ({
  recipes: state.recipesData.recipes
})

const recipesListCont = connect(
  mapStateToProps
)(recipesList)

export default recipesListCont
