/**
 * @module containers/searchFormCont
 * @description Search form for recipes
 */

import { connect } from 'react-redux'
import {
  fetchRecipesData,
  resetRecipesData
} from '../actions'

import searchForm from '../components/searchForm'

import $ from 'jquery'
import '../plugins/serializeObject'

const mapStateToProps = (state) => {
  return {
    isFetching: state.recipesData.isFetching,
    maxResult: state.recipesData.maxResult,
    start: state.recipesData.start
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit (ev) {
      ev.preventDefault()
      let query = $(ev.target).serializeObject()
      dispatch(fetchRecipesData(query))
    },
    onChange (ev) {
      dispatch(resetRecipesData())
    },
    onReset (ev) {
      dispatch(resetRecipesData())
    }
  }
}

const searchFormCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(searchForm)

export default searchFormCont
