var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import Chat from "./Chat.js";
import ContactList from "./ContactList.js";
import { initialState, messengerReducer } from "./messengerReducer.js";

var contacts = [{ id: 0, name: "Taylor", email: "taylor@email.com" }, { id: 1, name: "Alice", email: "alice@email.com" }, { id: 2, name: "Bob", email: "bob@email.com" }];

function Messenger() {
  var _React$useReducer = React.useReducer(messengerReducer, initialState),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      state = _React$useReducer2[0],
      dispatch = _React$useReducer2[1];

  var message = state.messages[state.selectedId];
  var contact = contacts.find(function (c) {
    return c.id === state.selectedId;
  });

  return React.createElement(
    "div",
    { className: "flex justify-evenly w-fit items-center border border-blue-300 shadow-lg rounded-xl p-12 bg-white" },
    React.createElement(ContactList, {
      contacts: contacts,
      selectedId: state.selectedId,
      dispatch: dispatch
    }),
    React.createElement(Chat, {
      key: contact.id,
      message: message,
      contact: contact,
      dispatch: dispatch
    })
  );
}

export default function App() {
  return React.createElement(
    "div",
    { className: "grid place-content-center h-screen bg-slate-100" },
    React.createElement(Messenger, null)
  );
}

var root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(React.createElement(App, null));