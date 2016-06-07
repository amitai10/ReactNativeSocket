export default function onMessage(state = "no message", action) {
  switch (action.type) {
    case 'ON_MESSAGE':
        return action.message;
      break;
    default:
      return state;
  }
}
