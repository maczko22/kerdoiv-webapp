import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  redirectMe(link) {
    console.log(123123);
    window.open(link, "_blank");
  }
  renderByType(message) {
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if (message.match(regex)) {
      var link = message;
      if (!message.includes("http://") && !message.includes("https://")) {
        link = "http://" + message;
      }
      return (
        <div>
          {this.props.from} : <a onClick={_ => this.redirectMe(link)}>{link}</a>
        </div>
      );
    }

    return (
      <div>
        {this.props.from} : {message}
      </div>
    );
  }
  messageClass() {
    if (this.props.from == "a") {
      return "own_message_container";
    }
    return "another_message_container";
  }
  render() {
    return (
      <div className={this.messageClass()}>
        <div className="message">
          {this.props.message.map((val, ind) => {
            return (
              <div className="singleMessage" key={ind}>
                {this.renderByType(val)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Message;
