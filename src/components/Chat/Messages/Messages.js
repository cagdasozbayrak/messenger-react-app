import React from "react";
import { List } from "@material-ui/core";
import Message from "./Message/Message";
import "./messages.css";

const Messages = ({ messages, username }) => {
  return (
    <List className="messages">
      {messages.map((message, index) => (
        <Message
          key={`message-${index}`}
          message={message}
          isSent={message.sentBy === username}
        />
      ))}
    </List>
  );
};

export default Messages;
