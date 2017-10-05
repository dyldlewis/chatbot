import constants from "./../constants";
const { types } = constants;


const userMessage = (state = [], action) => {
  switch(action.type) {
    case types.ADD_MESSAGE:
    var newState = state.slice()
    var newMessage = {
      message: action.message,
      id: action.id,
      sender: action.sender
    }
    newState.push(newMessage);
    // newState = newState.reverse()
    console.log(newState);
    return newState;
    case types.REQUEST_MESSAGE:
    var newApiMessage = {
      message: "",
      id: action.id
    }
    newState = state.slice();
    newState.push(newApiMessage)
    return newState;
    case types.RECEIVE_MESSAGE:
    var newState = state.slice();
    var apiMessage = {
      message: action.message,
      id: action.id,
      sender: "api"
    }
    // for (var i = 0; i < newState.length; i++) {
    //   if (newState[i].id === apiMessage.id) {
    //     newState[i].message = apiMessage.message;
    //   }
    // }
    newState.push(apiMessage)

    console.log(newState)
    return newState
    default:
      return state;
  }
}

export default userMessage;
