import { connect } from "react-redux";
import App from "../components/App";
import { newMessage } from "../actions/actions";
import { typing } from "../actions/actions";
import { loadMessages } from "../actions/actions";
import { setUser } from "../actions/actions";
import Messenger from "../components/Messenger";
import { toJS } from "immutable";

const mapStateToProps = state => {
  var messages = state.get("messages").toJS();
  console.log("messages", messages);
  var formattedMessages = [];
  if (messages.length > 0) {
    var groupedMessages = {};
    groupedMessages.from = messages[0].from;
    groupedMessages.messages = [messages[0].message];
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
  }

  console.log("formattedMessages", formattedMessages);
  return {
    user: state.get("user"),
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
    },
    setUser: user => {
      dispatch(setUser(user));
    }
  };
};

const MessengerContainer = connect(mapStateToProps, mapDispatchToProps)(
  Messenger
);

export default MessengerContainer;
