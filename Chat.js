export default function Chat(_ref) {
  var message = _ref.message,
      contact = _ref.contact,
      dispatch = _ref.dispatch;

  return React.createElement(
    "section",
    { className: "chat" },
    React.createElement("textArea", {
      value: message,
      placeholder: "Chat to " + contact.name,
      onChange: function onChange() {
        // do something here with dispatch, edited_message
        // read the input value from e.target.value
      }
    }),
    React.createElement("br", null),
    React.createElement(
      "button",
      null,
      "Send to ",
      contact.email
    )
  );
}