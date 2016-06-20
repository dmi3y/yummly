/**
 * @module reducers/searchFormData
 */

const DEFAULT_STATE = {
  input: ''
}

function formData (state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'RESET_FORM_DATA':
      return Object.assign({}, state, DEFAULT_STATE)
    case 'SET_FORM_DATA':
      return Object.assign({}, state, {
        input: action.data.input
      })
    default:
      return state
  }
}

export default formData
