import keyMirror from 'keymirror'

export const ActionTypes = keyMirror({
  GET_MESSAGES: null,
  SAVE_MESSAGES: null,

  LOAD_USERS: null,
  LOAD_SEARCH_USERS: null,

  SAVE_FRIENDS: null,
  LOAD_FRIENDS: null,
})

export function CSRFToken() {
  return document.querySelector('meta[name="csrf-token"]').getAttribute('content')
}

const Root = window.location.origin || `${window.location.protocol}//${window.location.hostname}`
const APIRoot = `${Root}/api`
export const APIEndpoints = {
  MESSAGES: APIRoot + '/messages',
  USERS: APIRoot + '/users',
  FRIENDS: APIRoot + '/friends',
}
