import { TEST_ACTION } from "../actions/actionList";
import { NEW_MESSAGE } from "../actions/actionList";
import { TYPING } from "../actions/actionList";
import { LOAD_MESSAGES } from "../actions/actionList";
import { SET_USER } from "../actions/actionList";
import { fromJS } from "immutable";
const initialState = fromJS({
  user: "",
  typing: false,
  seen: false,
  messages: [
    {
      from: "a",
      message: "asdasd"
    }
  ]
});
const reducer = (state = initialState, action) => {
  if (action.type == TEST_ACTION) {
    return state.set("test", "lónak a fasza");
  }
  if (action.type == NEW_MESSAGE) {
    return state.set("messages", state.get("messages").push(action.message));
  }
  if (action.type == TYPING) {
    console.log(action.typing);
    return state.set("typing", action.typing);
  }
  if (action.type == LOAD_MESSAGES) {
    console.log("blabla", action.messages);
    return state.set("messages", fromJS(action.messages));
  }
  if (action.type == SET_USER) {
    return state.set("user", action.user);
  }

  return state;
};

export default reducer;
