export function onMessage(msg) {
  console.log('onMessage', msg);
  return {
    type:"ON_MESSAGE",
    message: msg
  }
}
