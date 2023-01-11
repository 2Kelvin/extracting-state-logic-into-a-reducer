export default function ContactList({ contacts, selectedId, dispatch }) {
  return (
    <ul>
      {contacts.map((contact) => {
        <li key={contact.id}>
          <button
            onClick={() => {
              // do something here with the dispatch action, 'changed_selection
            }}
          >
            {selectedId === contact.id ? <b>{contact.name}</b> : contact.name}
          </button>
        </li>;
      })}
    </ul>
  );
}
