/**
 * @module components/app
 * @description Assembles application
 */

import React from 'react'
import SearchFormCont from '../containers/searchFormCont'
import classNames from 'classnames'
import Logo from './logo'

let App = ({isFetching, children}) => {
  var headerClasses = classNames({
    'loading': isFetching
  })

  return (
    <div className='container'>
      <header className={headerClasses}>
        <Logo />
        <div className='wrapper'>
          <SearchFormCont />
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>
  )
}

export default App
