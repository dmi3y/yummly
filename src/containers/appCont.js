/**
 * @module containers/appCont
 * @description app container
 */

import { connect } from 'react-redux'
import app from '../components/app'

const mapStateToProps = (state) => ({
  isFetching: state.recipeData.isFetching || state.recipeData.isFetching
})

const appCont = connect(
  mapStateToProps
)(app)

export default appCont
