import { connect } from 'react-redux';
import Login from '../components/Login';
import { sendLogin } from '../actions/actions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    sendLogin: user => dispatch(sendLogin(user))
  };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
