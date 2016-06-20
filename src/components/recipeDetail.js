/**
 * @module components/app
 * @description Assembles application
 */

import React from 'react'
import moment from 'moment'

class RecipeDetail extends React.Component {
  render () {
    let {
      recipe,
      isFetching
    } = this.props
    return (
      <div className='wrapper'>
        <article>
          {
            isFetching ? (
              <div className='detail-loading'>
                <i className='fa fa-cog fa-spin fa-3x fa-fw'></i>
                <span className='sr-only'>Loading...</span>
              </div>
            )
            : (
              <div className='recipe-detail'>
                <h1>{recipe.name}</h1>
                <div className='meta'>
                  <time datetime={moment(new Date(recipe.totalTime)).format()}>
                    <i className='fa fa-clock-o fa-1x fa-fw'></i>
                    {recipe.totalTime}
                  </time>
                  <span>
                    <i className='fa fa-cutlery fa-1x fa-fw'></i>
                    {recipe.numberOfServings}
                  </span>
                </div>
                <div className='clear'></div>
                <img
                  src={recipe.images[0].imageUrlsBySize[360]}
                  alt={recipe.name}
                />
                <ol>
                  {recipe.ingredientLines.map((ing, ix) => <li key={ix}>
                    <span>{ing}</span>
                  </li>)}
                </ol>
              </div>
            )
          }
        </article>
      </div>
    )
  }
}

export default RecipeDetail
