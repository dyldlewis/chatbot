import constants from "./../constants";
const { types } = constants;


const message = (state = [], action) => {
  switch(action.type) {
    case types.REQUEST_MESSAGE:
    var newState = action.response;
    return newState;
    case types.RECEIVE_MESSAGE:
    console.log(action.repos)
    var newState = action.response;
    return newState
    default:
      return state;
  }
}

export default message;
