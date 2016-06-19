/**
 * @module components/recipesList
 * @description Recepies list
 */

import React from 'react'
import ImageItem from './imageItem'

class RecipesList extends React.Component {
  render () {
    let {
      onClickMore,
      query,
      recipes,
      hasNothingFound
    } = this.props
    let MoreButton = <button className='more-recipes' onClick={() => onClickMore(query)} type='button'>More...</button>
    return (
      <div className='recipes-list wrapper'>
        {
          recipes.length
          ? recipes.map((recipe, ix) => <ImageItem key={ix} {...recipe} />)
          : <span>{hasNothingFound ? 'Try Something Else.' : 'Look For the Recipes!'}</span>
        }
        <div class='clear'></div>
        {!!recipes.length && MoreButton}
      </div>
    )
  }
}

export default RecipesList
