/**
 * @module components/imageItem
 * @description Single image wraped up in the link
 */

import React from 'react'

class imageItem extends React.Component {
  render () {
    let {id, imageUrlsBySize, recipeName} = this.props
    let imgSrc = imageUrlsBySize && imageUrlsBySize[90]
    return (
      <a href={`#${id}`} title={recipeName}>
        {
          imgSrc
          ? <img src={imgSrc} alt={recipeName} />
          : <div className='noimage'></div>
        }
      </a>
    )
  }
}

export default imageItem
