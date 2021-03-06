import React, { useEffect } from "react";

import FriendList from "./FriendList/FriendList";
import Messages from "./Messages/Messages";
import {
  retrieveFriends,
  retrieveMessages,
  selectFriend,
  sendMessage,
} from "../../reducers/rootReducer";
import { connect } from "react-redux";
import MessageInput from "./Messages/MessageInput/MessageInput";
import "./chat.css";

const mapStateToProps = (state) => {
  return {
    username: state.username,
    messages: state.messages,
    friends: state.friends,
    selectedFriend: state.selectedFriend,
  };
};

const mapDispatchToProps = {
  retrieveMessages,
  retrieveFriends,
  selectFriend,
  sendMessage,
};

const Chat = ({
  username,
  messages,
  friends,
  retrieveMessages,
  retrieveFriends,
  selectedFriend,
  selectFriend,
  sendMessage,
}) => {
  useEffect(() => {
    retrieveFriends(username);
  }, [username]);

  useEffect(() => {
    const friend = friends[selectedFriend];
    retrieveMessages(username, friend, friend ? friend.toLowerCase().startsWith("group") : "");
  }, [friends, selectedFriend]);
  const getFriend = () => friends[selectedFriend];

  return (
    <div className="chat-container">
      <FriendList
        friends={friends}
        onSelectFriend={selectFriend}
        selectedFriend={selectedFriend}
      />
      <div className="messages-container">
        <Messages messages={messages} username={username} />
        <MessageInput
          onMessageSent={(message) => sendMessage(message, username, getFriend())}
          friend={getFriend()}
        />
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
