/**
 * @module components/router
 * @description Router to container proxy
 */

import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import App from './app'
import RecipesListCont from '../containers/recipesListCont'
import RecipeDetailCont from '../containers/recipeDetailCont'

class RouterProxy extends React.Component {
  render () {
    let {onRecipeEnter, onRecipeLeave} = this.props
    return (
      <Router history={hashHistory}>
        <Route component={App}>
          <Route path='/' component={RecipesListCont} />
          <Route
            path='/:id'
            component={RecipeDetailCont}
            onEnter={onRecipeEnter}
            onLeave={onRecipeLeave}
          />
        </Route>
      </Router>
    )
  }
}

export default RouterProxy
