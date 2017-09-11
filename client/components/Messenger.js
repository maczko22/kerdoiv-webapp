import React, { Component } from "react";
import Message from "./Message";
import io from "socket.io-client";
class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = { focused: true, ISaw: false, seen: false };
    var self = this;
  }
  updateScroll() {
    var element = document.getElementById("messenger");
    element.scrollTop = element.scrollHeight;
  }
  componentDidMount() {
    this.socket = io();
    var self = this;
    window.onfocus = _ => {
      self.setState({ focused: true });
      self.socket.emit("seen");
      self.setState({ ISaw: true });
      document.title = "Iris69 Chat";
      clearInterval(self.alertInterval);
    };
    window.onblur = _ => {
      self.setState({ focused: false });
    };
    this.socket.on("user", function(user) {
      self.props.setUser(user);
    });
    this.socket.on("messageThread", function(messageThread) {
      self.props.loadMessages(messageThread);

      self.updateScroll();
    });
    this.socket.on("message", function(message) {
      var first = "New message (1)";
      var second = "Iris69 Chat";
      self.alertInterval = setInterval(_ => {
        if (document.title == first) {
          document.title = second;
        } else {
          document.title = first;
        }
      }, 1000);

      /* later */

      self.setState({ ISaw: false });
      self.props.newMessage(message);
      if (self.state.focused) {
        self.socket.emit("seen");
        self.setState({ ISaw: true });
        document.title = "Iris69 Chat";
        clearInterval(self.alertInterval);
      }
      self.updateScroll();
    });
    this.socket.on("typing", function(typing) {
      self.props.typing(typing);
    });
    this.socket.on("seen", function() {
      self.setState({ seen: true });
    });
  }
  sendMessage() {
    this.socket.emit("message", this.message.value);
    this.setState({ seen: false });
    this.message.value = "";
    this.socket.emit("typing", false);
  }
  typing() {
    if (this.message.value.length > 0) {
      this.socket.emit("typing", true);
    } else {
      this.socket.emit("typing", false);
    }
  }
  render() {
    return (
      <div id="messenger" className="messenger">
        {this.props.messages.map((val, ind) => {
          return (
            <Message
              key={ind}
              from={val.from}
              message={val.messages}
              user={this.props.user}
            />
          );
        })}
        {this.props.isTyping && <div>typing</div>}
        {this.state.seen && <div>seen</div>}
        <hr />
        <div className="row">
          <div className="col-xs-10">
            <input
              type="text"
              className="form-control"
              ref={message => (this.message = message)}
              onChange={_ => this.typing()}
              onKeyDown={e => {
                console.log(e.keyCode);
                if (e.keyCode == 13) {
                  this.sendMessage();
                }
              }}
            />
          </div>
          <div className="col-xs-2">
            <button
              onClick={_ => this.sendMessage()}
              className="btn btn-success form-control"
            >
              Send {this.props.user}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Messenger;
