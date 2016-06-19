/**
 * @module components/searchForm
 * @description Search form
 */

import React from 'react'
import classNames from 'classnames'

class searchForm extends React.Component {
  render () {
    let {
      onSubmit,
      onChange,
      onReset,
      maxResult,
      start
    } = this.props

    var formClasses = classNames({
      'search-bar': true
    })
    return (
      <div id='search-form'>
        <form onReset={onReset} onSubmit={onSubmit} onChange={onChange} className={formClasses} autocomplete='off'>
          <input type='text' name='q' className='input' autoComplete='off' />
          <input type='hidden' name='maxResult' value={maxResult} />
          <input type='hidden' name='start' value={start} />
          {/** the allowed diet below seems not working as advertized **/}
          {/** see @ https://developer.yummly.com/documentation **/}
          <input type='hidden' name='allowedDiet[]' value='390^Vegan' />
          <button type='submit' className='submit'>Show</button>
          <button type='reset' className='reset'>Reset</button>
        </form>
      </div>
    )
  }
}

export default searchForm
