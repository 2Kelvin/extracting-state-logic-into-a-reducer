export default function ContactList(_ref) {
  var contacts = _ref.contacts,
      selectedId = _ref.selectedId,
      dispatch = _ref.dispatch;

  return React.createElement(
    "ul",
    { className: "flex flex-col mr-10" },
    contacts.map(function (contact) {
      return React.createElement(
        "li",
        { key: contact.id },
        React.createElement(
          "button",
          {
            className: "bg-blue-500 p-2 mb-2 rounded active:bg-blue-400 w-24 shadow-xl",
            onClick: function onClick() {
              dispatch({
                type: "changed_selection",
                contactId: contact.id
              });
            }
          },
          selectedId === contact.id ? React.createElement(
            "b",
            null,
            contact.name
          ) : contact.name
        )
      );
    })
  );
}