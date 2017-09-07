import { connect } from "react-redux";
import App from "../components/App";
import { newMessage } from "../actions/actions";
import { typing } from "../actions/actions";
import { loadMessages } from "../actions/actions";
import Messenger from "../components/Messenger";
import { toJS } from "immutable";

const mapStateToProps = state => {
  var messages = state.get("messages").toJS();
  var formattedMessages = [];
  var groupedMessages = {};
  groupedMessages.from = messages[0].from;
  groupedMessages.messages = [messages[0].message];
  console.log(messages);
  for (let i = 1; i < messages.length; i++) {
    if (groupedMessages.from == messages[i].from) {
      groupedMessages.messages.push(messages[i].message);
    } else {
      formattedMessages.push(JSON.parse(JSON.stringify(groupedMessages)));
      groupedMessages.from = messages[i].from;
      groupedMessages.messages = [messages[i].message];
    }
  }

  formattedMessages.push(JSON.parse(JSON.stringify(groupedMessages)));
  console.log("formattedMessages", formattedMessages);
  return {
    messages: formattedMessages,
    isTyping: state.get("typing")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    newMessage: message => {
      dispatch(newMessage(message));
    },
    loadMessages: message => {
      dispatch(loadMessages(message));
    },
    typing: message => {
      dispatch(typing(message));
    }
  };
};

const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(
  Messenger
);

export default MessengerContainer;
