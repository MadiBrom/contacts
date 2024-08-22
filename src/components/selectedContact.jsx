import React, { useState, useEffect } from "react";

function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error("Error fetching contact:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, [selectedContactId]);

  return (
    <div>
      <button onClick={() => setSelectedContactId(null)}>
        Back to Contact List
      </button>
      <h1>Name: {contact.name}</h1>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <p>Username: {contact.username}</p>
      <p>Website: {contact.website}</p>
      <p>Comany: {contact.company.name}</p>
      <p>
        {" "}
        Address:
        {contact.address.street}, {contact.address.suite},{" "}
        {contact.address.city}, {contact.address.zipcode}
      </p>
    </div>
  );
}
export default SelectedContact;
