import React from "react";
import ContactList from "./components/contactList.jsx";
import "./App.css";
import { useState } from "react";
import ContactRow from "./components/contactRow.jsx";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

const App = () => {
  const [contacts, setContacts] = useState(dummyContacts);
  console.log("Contacts: ", contacts);
  return (
    <>
      <h1>Contact List</h1>
      <table>
        <caption>do not stalk</caption>
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
    </>
  );
};
