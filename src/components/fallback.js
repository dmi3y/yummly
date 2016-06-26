/**
 * @module components/fallback
 * @description Fallback page for any reason
 */

import React from 'react'
import {Link} from 'react-router'

let Fallback = () => (
  <div className='wrapper fallback'>
    <i className='fa fa-lemon-o fa-3x fa-fw'></i>
    <div>
      Something went wrong, pease try everything from the <Link to='/'>beginning</Link>.
    </div>
  </div>
)

export default Fallback
