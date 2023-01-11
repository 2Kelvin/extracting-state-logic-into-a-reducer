export default function Chat({ message, contact, dispatch }) {
  return (
    <section className="chat">
      <textArea
        value={message}
        placeholder={`Chat to ${contact.name}`}
        onChange={() => {
          // do something here with dispatch, edited_message
          // read the input value from e.target.value
        }}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
