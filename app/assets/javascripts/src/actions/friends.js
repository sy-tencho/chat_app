import request from 'superagent'
import appDispatcher from '../dispatcher'
import {ActionTypes, APIEndpoints, CSRFToken} from '../constants/app'

export default {

  loadFriends() {
    return new Promise((resolve, reject) => {
      request
        .get(`${APIEndpoints.FRIENDS}`)
        .end((error, res) => {
          if (!error && res.status === 200) {
            const json = JSON.parse(res.text)
            appDispatcher.handleServerAction({
              type: ActionTypes.LOAD_FRIENDS,
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

  buildFriendRelationship(connected_user_id) {
    return new Promise((resolve, reject) => {
      request
          .post(`${APIEndpoints.FRIENDS}`)
          .set('X-CSRF-Token', CSRFToken())
          .send({connected_user_id: connected_user_id})
          .end((error, res) => {
            if (!error && res.status === 200) {
              const json = JSON.parse(res.text)
              appDispatcher.handleServerAction({
                type: ActionTypes.SAVE_FRIENDS,
                json,
              })
            } else {
              reject(res)
            }
          })
    })
  },

  loadFriendsId(id) {
    appDispatcher.handleViewAction({
      type: ActionTypes.LOAD_FRIENDS_ID,
      toUserId: id,
    })
  },   

    // loadFriendsId(id) {
    //     appDispatcher.waitFor({
    //     type: ActionTypes.LOAD_FRIENDS_ID,
    //     toUserId: id
    //     })
    // },
}
