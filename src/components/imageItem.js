/**
 * @module components/imageItem
 * @description Single image wraped up in the link
 */

import React from 'react'
import {Link} from 'react-router'

let imageItem = ({id, imageUrlsBySize, recipeName}) => {
  let imgSrc = imageUrlsBySize && imageUrlsBySize[90]
  return (
    <Link to={`recipie/${id}`} title={recipeName}>
      {
        imgSrc
        ? <img src={imgSrc} alt={recipeName} />
        : <div className='noimage'></div>
      }
    </Link>
  )
}

export default imageItem
