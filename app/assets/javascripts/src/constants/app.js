import keyMirror from 'keymirror'

export const ActionTypes = keyMirror({
  GET_MESSAGES: null,
  SAVE_MESSAGES: null,
})

export function CSRFToken() {
  return document.querySelector('meta[name="csrf-token"]').getAttribute('content')
}

const Root = window.location.origin || `${window.location.protocol}//${window.location.hostname}`
const APIRoot = `${Root}/api`
export const APIEndpoints = {
  MESSAGES: APIRoot + '/messages',
}
