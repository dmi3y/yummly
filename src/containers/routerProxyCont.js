/**
 * @module containers/routerProxyCont
 * @description Router proxy container for onEnter/onLeave
 */

import { connect } from 'react-redux'
import routerProxy from '../components/routerProxy'
import {
  fetchRecipeData,
  resetRecipeData
} from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onRecipeEnter (ev) {
      let id = ev.params.id
      dispatch(fetchRecipeData(id))
    },
    onRecipeLeave (ev) {
      dispatch(resetRecipeData())
    }
  }
}

const mapStateToProps = (state) => ({
})

const routerProxyCont = connect(
  mapStateToProps,
  mapDispatchToProps
)(routerProxy)

export default routerProxyCont
