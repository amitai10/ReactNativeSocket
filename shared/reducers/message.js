export default function onMessage(state = "no message", action) {
  switch (action.type) {
    case 'ON_MESSAGE':
      console.log('ON_MESSAGE', action.message);
        return action.message;
      break;
    default:
      return state;
  }
}
