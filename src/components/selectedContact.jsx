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
    <>
      {contact ? (
        <>
          <h1>{contact.name}</h1>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
        </>
      ) : (
        <SelectedContact
          selectedContact={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      )}
    </>
  );
}
export default SelectedContact;
