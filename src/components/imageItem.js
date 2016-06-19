/**
 * @module components/imageItem
 * @description Single image wraped up in the link
 */

import React from 'react'

class imageItem extends React.Component {
  render () {
    let {id, imageUrlsBySize, recipeName} = this.props
    return (
      <a href={`#${id}`}>
        <img src={imageUrlsBySize[90]} alt={recipeName} />
      </a>
    )
  }
}

export default imageItem
