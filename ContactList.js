export default function ContactList(_ref) {
  var contacts = _ref.contacts,
      selectedId = _ref.selectedId,
      dispatch = _ref.dispatch;

  return React.createElement(
    "ul",
    null,
    contacts.map(function (contact) {
      React.createElement(
        "li",
        { key: contact.id },
        React.createElement(
          "button",
          {
            onClick: function onClick() {
              // do something here with the dispatch action, 'changed_selection
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