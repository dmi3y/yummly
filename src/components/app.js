/**
 * @module components/app
 * @description Assembles application
 */

import React from 'react'
import SearchFormCont from '../containers/searchFormCont'
import classNames from 'classnames'
import {Link} from 'react-router'

class App extends React.Component {
  render () {
    var logoClasses = classNames({
      'loader': true,
      'loading': this.props.isFetching
    })

    return (
      <main>
        <div className='container'>
          <div className={logoClasses}>
            <Link to='/'>
              <img src='http://s.yumm.ly/yummly-website/908c649bc85ca7b079db8897c6e4ce32f1ba7ccb/img/yum-white.png' />
            </Link>
          </div>
        </div>
        <SearchFormCont />
        {this.props.children}
      </main>
    )
  }
}

export default App
