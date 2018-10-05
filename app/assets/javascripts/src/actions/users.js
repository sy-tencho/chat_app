// SearchBox.jsで受け取った情報をjson方式でRailsに接続

import request from 'superagent'
import appDispatcher from '../dispatcher'
import {ActionTypes, APIEndpoints} from '../constants/app'

export default {
    // loadUsers() {
    //   return new Promise((resolve, reject) => {
    //     request
    //     .get(`${APIEndpoints.USERS}`)
    //     .end((error, res) => {
    //       if (!error && res.status === 200) {
    //         const json = JSON.parse(res.text)
    //         Dispatcher.handleServerAction({
    //           type: ActionTypes.LOAD_USERS,
    //           json: json,
    //         })
    //         resolve(json)
    //       } else {
    //         reject(res)
    //       }
    //     })
    //   })
    // },

  loadSearchUsers(search_string) {
    return new Promise((resolve, reject) => {
      console.log(search_string)
      request
        .get(`${APIEndpoints.USERS}`)
        .query({input: search_string})
        .end((error, res) => {
          if (!error && res.status === 200) {
            const json = JSON.parse(res.text)
            console.log(json)
            appDispatcher.handleServerAction({
              type: ActionTypes.LOAD_SEARCH_USERS,
              json,
            })
            resolve(json)
          } else {
            reject(res)
          }
        })
    })
  },
}
