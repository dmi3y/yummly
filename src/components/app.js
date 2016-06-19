/**
 * @module components/app
 * @description Assembles application
 */

import React from 'react'
import SearchFormCont from '../containers/searchFormCont'
import classNames from 'classnames'
import Logo from './logo'

class App extends React.Component {
  render () {
    var headerClasses = classNames({
      'header': true,
      'loading': this.props.isFetching
    })

    return (
      <div className='container'>
        <header className={headerClasses}>
          <Logo />
          <SearchFormCont />
        </header>
        <main>
          {this.props.children}
        </main>
      </div>
    )
  }
}

export default App
