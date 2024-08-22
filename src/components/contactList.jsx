import React, { useState, useEffect } from "react";
import ContactRow from "./contactRow";

function ContactList({ setSelectedContactId }) {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(setSelectedContactId);

    const fetchContacts = async () => {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const json = await response.json();
        setContacts(json);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContacts();
  }, []);

  const handleRowClick = (id) => {
    console.log(id);

    setSelectedContactId(id);
  };

  return (
    <div>
      <h1 class="title">Contact List</h1>
      <table class="table">
        <thead>
          <tr>
            <th class="header">Name</th>
            <th class="header">Email</th>
            <th class="header">Phone</th>
          </tr>
        </thead>
        <tbody class="cells">
          {contacts.map((contact) => (
            <ContactRow
              key={contact.id}
              name={contact.name}
              email={contact.email}
              phone={contact.phone}
              onClick={() => handleRowClick(contact.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;
