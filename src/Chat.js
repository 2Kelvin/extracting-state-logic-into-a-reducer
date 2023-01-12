export default function Chat({ message, contact, dispatch }) {
  return (
    <section>
      <textarea
        className="border border-blue-300 rounded-lg p-2 mb-2 shadow w-full h-40"
        rows="4"
        value={message}
        placeholder={`Chat to ${contact.name}`}
        onChange={(e) => {
          dispatch({
            type: "edited_message",
            message: e.target.value,
          });
        }}
      />
      <br />
      <button
        className="bg-orange-300 py-2 px-4 my-1 rounded-lg active:bg-orange-500 w-fit shadow-xl border-2 border-solid"
        onClick={() => {
          if (message !== "") {
            // alert with user.email & message
            alert(message + " (Receiver: " + contact.email + ")");
            // clear textarea
            dispatch({
              type: "sent_message",
              message: "",
            });
          } else {
            alert("Please type in a message");
          }
        }}
      >
        Send to {contact.email}
      </button>
    </section>
  );
}
