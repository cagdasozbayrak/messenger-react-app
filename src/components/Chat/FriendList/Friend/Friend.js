import React from "react";
import ListItem from "@material-ui/core/ListItem";

const Friend = ({ name, selected, onClickFriend }) => (
  <ListItem button selected={selected} onClick={onClickFriend}>
    {name}
  </ListItem>
);

export default Friend;
