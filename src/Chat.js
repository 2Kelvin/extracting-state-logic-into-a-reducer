export default function Chat({ message, contact, dispatch }) {
  return (
    <section>
      <textarea
        className="border border-blue-400 rounded-md p-2 mb-2"
        value={message}
        placeholder={`Chat to ${contact.name}`}
        onChange={() => {
          // do something here with dispatch, edited_message
          // read the input value from e.target.value
          dispatch({
            type: "edited_message",
            message: message,
          });
        }}
      />
      <br />
      <button className="bg-blue-300 py-2 px-4 my-1 rounded-lg active:bg-blue-500 w-fit shadow-xl border-2 border-solid">
        Send to {contact.email}
      </button>
    </section>
  );
}
