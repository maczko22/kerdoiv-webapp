import React, { Component } from "react";
import Message from "./Message";
import io from "socket.io-client";

class Messenger extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.socket = io();
  }
  componentDidMount() {
    var self = this;
    this.socket.on("messageThread", function(messageThread) {
      console.log(messageThread);
    });
    this.socket.on("message", function(message) {
      self.props.newMessage(message);
    });
    this.socket.on("typing", function(typing) {
      self.props.typing(typing);
    });
  }
  sendMessage() {
    console.log(this.message.value);
    this.socket.emit("message", this.message.value);
  }
  typing() {
    console.log("okok");
    if (this.message.value.length > 0) {
      this.socket.emit("typing", true);
    } else {
      this.socket.emit("typing", false);
    }
  }
  render() {
    return (
      <div className="messenger">
        {this.props.messages.map((val, ind) => {
          return <Message key={ind} from={val.from} message={val.messages} />;
        })}
        {this.props.typing && <div>typing</div>}
        {this.props.seen && <div>seen</div>}
        <hr />
        <div className="row">
          <div className="col-xs-10">
            <input
              type="text"
              className="form-control"
              ref={message => (this.message = message)}
              onChange={_ => this.typing()}
            />
          </div>
          <div className="col-xs-2">
            <button
              onClick={_ => this.sendMessage()}
              className="btn btn-success form-control"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Messenger;
