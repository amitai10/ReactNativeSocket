import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import App from '../components/App';

function mapStateToProps(state) {
  return {
    message: state.onMessage
  }
}

export default connect(mapStateToProps)(App);
