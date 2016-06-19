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
      <article>
        {
          isFetching ? <div>loading</div>
          : (
            <div className='wrapper'>
              <h1>{recipe.name}</h1>
              <time datetime={moment(new Date(recipe.totalTime)).format()}>
                {recipe.totalTime}
              </time>
              <img
                src={recipe.images[0].imageUrlsBySize[360]}
                alt={recipe.name}
              />
              <ol>
                {recipe.ingredientLines.map((ing, ix) => <li key={ix}>{ing}</li>)}
              </ol>
            </div>
          )
        }
      </article>
    )
  }
}

export default RecipeDetail
