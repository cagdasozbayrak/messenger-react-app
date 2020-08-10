import React from "react";
import { List } from "@material-ui/core";
import Message from "./Message/Message";
import "./messages.css";

const Messages = ({ messages, friend }) => {
  return (
    <List className="messages">
      {messages.map((message, index) => (
        <Message
          key={`message-${index}`}
          message={message}
          isReceived={message.sentBy === friend}
        />
      ))}
    </List>
  );
};

export default Messages;
