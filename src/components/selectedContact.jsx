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
    <div class="ticket">
      {" "}
      {contact && (
        <div class="background">
          <h1 class="name">{contact.name}</h1>
          <h2 class="name" id="small">
            (a.k.a {contact.username})
          </h2>
          <div class="contact">
            <h3 id="contactTitle">Contact:</h3>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
            <p>{contact.website}</p>
          </div>
          <div class="company">
            <p id="companyName">{contact.company.name}</p>
            <p>
              {contact.address.street}, {contact.address.suite},{" "}
              {contact.address.city}, {contact.address.zipcode}
            </p>
          </div>
          <button onClick={() => setSelectedContactId(null)}>
            Back to Contact List
          </button>
        </div>
      )}
    </div>
  );
}
export default SelectedContact;
