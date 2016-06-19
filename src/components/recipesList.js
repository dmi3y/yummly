/**
 * @module components/recipesList
 * @description Recepies list
 */

import React from 'react'
import ImageItem from './imageItem'

class RecipesList extends React.Component {
  render () {
    let recipes = this.props.recipes
    return recipes.length ? (
      <div className='recipes-list'>
        {recipes.map((recipe, ix) => <ImageItem key={ix} {...recipe} />)}
      </div>
    ) : null
  }
}

export default RecipesList
