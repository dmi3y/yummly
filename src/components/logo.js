/**
 * @module components/app
 * @description Assembles application
 */

import React from 'react'
import {Link} from 'react-router'

class Logo extends React.Component {
  render () {
    return (
      <Link to='/'>
        <img src='http://s.yumm.ly/yummly-website/908c649bc85ca7b079db8897c6e4ce32f1ba7ccb/img/yum-white.png' />
      </Link>
    )
  }
}

export default Logo
