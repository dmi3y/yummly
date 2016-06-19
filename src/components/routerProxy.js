/**
 * @module components/router
 * @description Router to container proxy
 */

import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import AppCont from '../containers/appCont'
import RecipesListCont from '../containers/recipesListCont'
import RecipeDetailCont from '../containers/recipeDetailCont'

class RouterProxy extends React.Component {
  render () {
    let {onRecipeEnter, onRecipeLeave} = this.props
    let afterRecipeLeave = () => setTimeout(() => onRecipeLeave(), 0)
    return (
      <Router history={hashHistory}>
        <Route component={AppCont}>
          <Route path='/' component={RecipesListCont} />
          <Route
            path='/:id'
            component={RecipeDetailCont}
            onEnter={onRecipeEnter}
            onLeave={afterRecipeLeave}
          />
        </Route>
      </Router>
    )
  }
}

export default RouterProxy
