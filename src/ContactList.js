export default function ContactList({ contacts, selectedId, dispatch }) {
  return (
    <ul className="flex flex-col mr-10">
      {contacts.map((contact) => (
        <li key={contact.id}>
          <button
            className="bg-blue-500 p-2 mb-2 rounded active:bg-blue-400 w-24 shadow-xl"
            onClick={() => {
              // do something here with the dispatch action, 'changed_selection
              dispatch({
                type: "changed_selection",
                id: selectedId,
                // message: "",
              });
            }}
          >
            {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
