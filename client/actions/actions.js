import { TEST_ACTION } from "./actionList";
import { NEW_MESSAGE } from "./actionList";
import { LOAD_MESSAGES } from "./actionList";
import { TYPING } from "./actionList";

export const doMagic = message => {
  return {
    type: TEST_ACTION,
    message
  };
};
export const newMessage = message => {
  return {
    type: NEW_MESSAGE,
    message
  };
};
export const typing = typing => {
  return {
    type: TYPING,
    typing
  };
};
export const loadMessages = messages => {
  return {
    type: LOAD_MESSAGES,
    messages
  };
};
