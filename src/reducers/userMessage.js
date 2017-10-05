import constants from "./../constants";
const { types } = constants;


const userMessage = (state = [], action) => {
  switch(action.type) {
    case types.ADD_MESSAGE:
    var newState = state.slice()
    var newMessage = {
      message: action.message,
      id: action.id
    }
    newState.push(newMessage);
    console.log(newState);
    return newState;
    default:
      return state;
  }
}

export default userMessage;
