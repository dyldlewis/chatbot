import constants from "./../constants";
const { types } = constants;


const userMessage = (state = [], action) => {
  switch(action.type) {
    case types.ADD_MESSAGE:
    console.log(action);
    var newState = state.splice()
    var newMessage = {
      message: action.message,
      id: action.id
    }
    newState = newState.push(newMessage);
    return newState;
    default:
      return state;
  }
}

export default userMessage;
