export default function Chat(_ref) {
  var message = _ref.message,
      contact = _ref.contact,
      dispatch = _ref.dispatch;

  return React.createElement(
    "section",
    null,
    React.createElement("textarea", {
      className: "border border-blue-400 rounded-md p-2 mb-2",
      value: message,
      placeholder: "Chat to " + contact.name,
      onChange: function onChange() {
        // do something here with dispatch, edited_message
        // read the input value from e.target.value
        dispatch({
          type: "edited_message",
          message: message
        });
      }
    }),
    React.createElement("br", null),
    React.createElement(
      "button",
      { className: "bg-blue-300 py-2 px-4 my-1 rounded-lg active:bg-blue-500 w-fit shadow-xl border-2 border-solid" },
      "Send to ",
      contact.email
    )
  );
}