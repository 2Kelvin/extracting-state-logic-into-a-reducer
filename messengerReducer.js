export var initialState = { selectedId: 0, message: "Hello" };

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
          message: action.message
        });
      }
    default:
      {
        throw Error("Unknown action: " + action.type);
      }
  }
}