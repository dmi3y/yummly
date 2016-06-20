/**
 * @module components/searchForm
 * @description Search form
 */

import React from 'react'
import classNames from 'classnames'
import { hashHistory } from 'react-router'

class searchForm extends React.Component {
  render () {
    let {
      onSubmit,
      onChange,
      onReset,
      isFetching,
      isChanged,
      input
    } = this.props

    let buttonIconSubmitClasses = classNames({
      'fa fa-2x fa-fw': true,
      'fa-cog fa-spin': isFetching,
      'fa-search': !isFetching
    })

    let buttonIconResetClasses = classNames({
      'fa fa-2x fa-fw': true,
      'fa-cog fa-spin': isFetching,
      'fa-times': !isFetching
    })

    let buttonSubmitStyle = {
      display: isChanged ? 'inline' : 'none'
    }
    let buttonResetStyle = {
      display: !isChanged ? 'inline' : 'none'
    }

    let beforeSubmit = (ev) => {
      hashHistory.push('/')
      onSubmit(ev)
    }
    return (
      <div className='search-form'>
        <form onReset={onReset} onSubmit={beforeSubmit} autocomplete='off'>
          <input
            onChange={onChange}
            type='text'
            name='q'
            autoComplete='off'
            placeholder='Find Recipe'
            value={input}
          />
          {/** the allowed diet below seems not working as advertized **/}
          {/** see @ https://developer.yummly.com/documentation **/}
          <input type='hidden' name='allowedDiet[]' value='390^Vegan' />
          <button style={buttonSubmitStyle} type='submit'>
            <i className={buttonIconSubmitClasses}></i>
          </button>
          <button style={buttonResetStyle} type='reset'>
            <i className={buttonIconResetClasses}></i>
          </button>
        </form>
      </div>
    )
  }
}

export default searchForm
