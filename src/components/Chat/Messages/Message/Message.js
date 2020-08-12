import React from "react";
import ListItem from "@material-ui/core/ListItem";
import "./message.css";

const Message = ({ message: { text }, isSent }) => {
  const className = !isSent ? "received-message" : "sent-message";
  return (
    <ListItem className={`${className}-container`}>
      <span className={className}>{text}</span>
    </ListItem>
  );
};

export default Message;
