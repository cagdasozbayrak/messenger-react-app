import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import "./messageInput.css";

const MessageInput = ({ onMessageSent }) => {
  const [message, setMessage] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    onMessageSent(message);
    setMessage("");
  };
  return (
    <form className="message-input" onSubmit={onSubmit}>
      <TextField
        name="message"
        value={message}
        className="message-bar"
        variant={"outlined"}
        onChange={(e) => setMessage(e.target.value)}
      />
      <SendIcon onClick={onSubmit} />
    </form>
  );
};

export default MessageInput;
