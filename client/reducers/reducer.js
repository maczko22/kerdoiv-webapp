import { TEST_ACTION } from "../actions/actionList";
import { NEW_MESSAGE } from "../actions/actionList";
import { TYPING } from "../actions/actionList";
import { fromJS } from "immutable";
const initialState = fromJS({
  typing: false,
  seen: false,
  messages: [
    {
      from: "a",
      message: "asdasd"
    },
    {
      from: "b",
      message: "asdasd"
    },
    {
      from: "b",
      message: "google.com"
    },
    {
      from: "a",
      message: "http://google.com"
    },
    {
      from: "b",
      message: "www.youtube.com"
    },
    {
      from: "b",
      message: "www.youtube.com"
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

  return state;
};

export default reducer;
