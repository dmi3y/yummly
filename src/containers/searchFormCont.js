/**
 * @module containers/searchFormCont
 * @description Search form for recipes
 */

import { connect } from 'react-redux'
import {
  fetchRecipesData,
  resetRecipesData,
  setFormData,
  resetFormData
} from '../actions'

import searchForm from '../components/searchForm'

import $ from 'jquery'
import '../plugins/serializeObject'

const mapStateToProps = (state) => {
  let q = state.recipesData.query && state.recipesData.query.q
  return {
    isFetching: state.recipesData.isFetching,
    isChanged: q !== state.formData.input,
    input: state.formData.input
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
      let data = {
        input: ev.target.value
      }
      dispatch(setFormData(data))
    },
    onReset (ev) {
      dispatch(resetRecipesData())
      dispatch(resetFormData())
    }
  }
}

const searchFormCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(searchForm)

export default searchFormCont
