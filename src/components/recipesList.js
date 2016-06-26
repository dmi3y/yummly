/**
 * @module components/recipesList
 * @description Recepies list
 */

import React from 'react'
import ImageItem from './imageItem'
import classNames from 'classnames'

let RecipesList = ({
  onClickMore,
  query,
  recipes,
  hasNothingFound,
  isFetching
}) => {
  var buttonIconClasses = classNames({
    'fa fa-2x fa-fw': true,
    'fa-cog fa-spin': isFetching,
    'fa-plus': !isFetching
  })

  let listIconClasses = classNames({
    'fa fa-3x fa-fw': true,
    'fa-cog fa-spin': isFetching,
    'fa-cutlery': !isFetching
  })

  let MoreButton = <button className='more-recipes' onClick={() => onClickMore(query)} type='button'>
    <i className={buttonIconClasses}></i>
  </button>
  return (
    <div className='recipes-list wrapper'>
      {
        recipes.length
        ? recipes.map((recipe, ix) => <ImageItem key={ix} {...recipe} />)
        : <div>
          <div className='list-loading'>
            <i className={listIconClasses}></i>
            <span className='sr-only'>Loading...</span>
          </div>
          <div className='clear'></div>
          <span>{hasNothingFound ? 'Try Something Else.' : 'Look For the Recipes!'}</span>
        </div>
      }
      <div class='clear'></div>
      {!!recipes.length && MoreButton}
    </div>
  )
}

export default RecipesList
