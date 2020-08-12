import React, { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import "./messageInput.css";

const MessageInput = ({ friend, onMessageSent }) => {
  const [message, setMessage] = useState({ [friend]: "" });
  const onSubmit = (e) => {
    e.preventDefault();
    onMessageSent(message[friend]);
    setMessage({ ...message, [friend]: "" });
  };

  useEffect(() => {
      setMessage({...message, [friend] : message[friend] || ""});
  }, [friend]);

  return (
    <form className="message-input" onSubmit={onSubmit}>
      <TextField
        name="message"
        value={message[friend]}
        className="message-bar"
        variant={"outlined"}
        onChange={(e) => {
          setMessage({ ...message, [friend]: e.target.value });
        }}
      />
      <SendIcon onClick={onSubmit} />
    </form>
  );
};

export default MessageInput;
