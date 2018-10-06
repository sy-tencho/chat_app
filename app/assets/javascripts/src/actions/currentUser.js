import request from 'superagent'
import appDispatcher from '../dispatcher'
import {ActionTypes, APIEndpoints, CSRFToken} from '../constants/app'

export default {

  getCurrentUser() {
    return new Promise((resolve, reject) => {
      request
        .get(`${APIEndpoints.CURRENT}`)
        .end((error, res) => {
          if (!error && res.status === 200) {
            const json = JSON.parse(res.text)
            appDispatcher.handleServerAction({
              type: ActionTypes.LOAD_CURRENT,
              json: json,
            })
            console.log(json)
            resolve(json)
          } else {
            reject(res)
          }
        })
    })
  },
}