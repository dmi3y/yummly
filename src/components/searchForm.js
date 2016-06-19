/**
 * @module components/searchForm
 * @description Search form
 */

import React from 'react'

class searchForm extends React.Component {
  render () {
    let {
      onSubmit,
      onChange,
      onReset,
      maxResult,
      start
    } = this.props

    return (
      <div className='search-form'>
        <form onReset={onReset} onSubmit={onSubmit} onChange={onChange} autocomplete='off'>
          <input
            type='text'
            name='q'
            className='input'
            autoComplete='off'
            placeholder='Find Recipe'
          />
          {/** the allowed diet below seems not working as advertized **/}
          {/** see @ https://developer.yummly.com/documentation **/}
          <input type='hidden' name='allowedDiet[]' value='390^Vegan' />
          <button type='submit' className='submit'>Go</button>
        </form>
      </div>
    )
  }
}

export default searchForm
