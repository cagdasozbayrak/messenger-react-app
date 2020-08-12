import { createAction } from "redux-actions";
import MessageData from "../data/messages.json";
import Friends from "../data/friends.json";

const actionTypes = {
  LOGIN: "login",
  RETRIEVE_FRIENDS: "retrieve_friends",
  RETRIEVE_MESSAGES: "retrieve_messages",
  SELECT_FRIEND: "select_friend",
  SEND_MESSAGE: "send_message",
};

export const initialState = {
  // the dummy data is available only for this user, change this to "" and isLoggedIn to false to test the login page
  username: "cagdas",
  isLoggedIn: true,
  friends: [],
  messages: [],
  selectedFriend: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return { ...state, username: action.payload, isLoggedIn: true };
    case actionTypes.RETRIEVE_FRIENDS:
      return { ...state, friends: action.payload };
    case actionTypes.RETRIEVE_MESSAGES:
      return { ...state, messages: action.payload };
    case actionTypes.SELECT_FRIEND:
      return { ...state, selectedFriend: action.payload };
    case actionTypes.SEND_MESSAGE:
      const message = action.payload;
      return { ...state, messages: [...state.messages, message] };
    default:
      return state;
  }
}

export const login = createAction(actionTypes.LOGIN);
export const retrieveFriends = (username) => (dispatch) => {
  return dispatch({
    type: actionTypes.RETRIEVE_FRIENDS,
    payload: Friends[username],
  });
};
export const retrieveMessages = (username, friend, isGroup) => (dispatch) => {
  if (!username || !friend) {
    return;
  }

  const messages = MessageData.filter((message) =>
    isGroup
      ? message.sentTo === friend
      : (message.sentBy === friend || message.sentBy === username) &&
        (message.sentTo === username || message.sentTo === friend)
  ).sort((m1, m2) => m1.timeStamp - m2.timeStamp);
  return dispatch({
    type: actionTypes.RETRIEVE_MESSAGES,
    payload: messages,
  });
};

export const selectFriend = createAction(actionTypes.SELECT_FRIEND);
export const sendMessage = (message, user, friend) => (dispatch) => {
  return dispatch({
    type: actionTypes.SEND_MESSAGE,
    payload: {
      text: message,
      timestamp: new Date().getTime(),
      sentBy: user,
      sentTo: friend,
    },
  });
};
