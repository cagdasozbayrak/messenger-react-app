import React from "react";
import { List } from "@material-ui/core";
import Friend from "./Friend/Friend";
import "./friendList.css";

const FriendList = ({ friends, selectedFriend, onSelectFriend }) => {
  return (
    <List className="friend-list">
      {friends.map((friend, index) => (
        <Friend
          key={`friend-${index}`}
          name={friend}
          selected={index === selectedFriend}
          onClickFriend={() => {
            onSelectFriend(index);
          }}
        />
      ))}
    </List>
  );
};

export default FriendList;
