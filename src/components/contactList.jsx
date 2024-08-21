import React from "react";
import ContactRow from "./contactRow";

const ContactList = ({ contacts }) => {
  return (
    <div>
      <h1>Contact List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <ContactRow
              key={contact.id}
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
