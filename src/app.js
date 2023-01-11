import Chat from "./Chat.js";
import ContactList from "./ContactList.js";
import { initialState, messengerReducer } from "./messengerReducer.js";

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@email.com" },
  { id: 1, name: "Alice", email: "alice@email.com" },
  { id: 2, name: "Bob", email: "bob@email.com" },
];

function Messenger() {
  const [state, dispatch] = React.useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

export default function App() {
  return <Messenger />;
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
