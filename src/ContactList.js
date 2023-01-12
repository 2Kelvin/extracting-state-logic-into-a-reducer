export default function ContactList({ contacts, selectedId, dispatch }) {
  return (
    <ul className="flex flex-col mr-10">
      {contacts.map((contact) => (
        <li key={contact.id}>
          <button
            className="bg-blue-500 p-2 mb-2 rounded active:bg-blue-400 w-24 shadow-xl"
            onClick={() => {
              dispatch({
                type: "changed_selection",
                contactId: contact.id,
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
