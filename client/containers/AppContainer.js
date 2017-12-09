import { connect } from "react-redux";
import App from "../components/App";
import { doMagic } from "../actions/actions";

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    doMagic: message => {
      dispatch(doMagic(message));
    }
  };
};

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
