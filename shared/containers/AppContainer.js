import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';
import * as message from '../actions/message'

function mapStateToProps(state) {
  return {
    message: state.onMessage
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(message, dispatch);
// }

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (text) => {
      console.log(text);
      dispatch(message.onMessage(text))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
