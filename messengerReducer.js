function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

export var initialState = {
  selectedId: 0,
  messages: {
    0: "Hello Taylor",
    1: "Hello Alice",
    2: "Hello Bob"
  }
};

export function messengerReducer(state, action) {
  switch (action.type) {
    case "changed_selection":
      {
        return Object.assign({}, state, {
          selectedId: action.contactId,
          message: ""
        });
      }
    case "edited_message":
      {
        return Object.assign({}, state, {
          messages: Object.assign({}, state.messages, _defineProperty({}, state.selectedId, action.message))
        });
      }
    case "sent_message":
      {
        return Object.assign({}, state, {
          message: ""
        });
      }
    default:
      {
        throw Error("Unknown action: " + action.type);
      }
  }
}