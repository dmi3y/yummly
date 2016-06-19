/**
 * @module components/app
 * @description Assembles application
 */

import React from 'react'

class RecipeDetail extends React.Component {
  render () {
    let {recipe, isFetching} = this.props
    return (
      <article>
        {
          isFetching ? <div>loading</div>
          : (
            <div>{recipe.name}</div>
          )
        }
      </article>
    )
  }
}

export default RecipeDetail
