import * as types from "./../constants/ActionTypes";
import v4 from "uuid/v4";

export const requestMessage = () => ({
  type: types.REQUEST_MESSAGE,
  message: {}
});

export const recieveMessage = (message) => ({
  type: types.RECEIVE_MESSAGE,
  message
})

export function getMessage() {
  return function (dispatch) {
    dispatch(requestMessage());
    return fetch("http://www.cleverbot.com/getreply?key=CC4nk9X4z41fzu0DjzLCTfxQ5qg&input=hi").then(
      response => response.json(),
      error => console.log("An error occured.", error)
    ).then(function(json) {
      console.log(json)
    });
  };
}
