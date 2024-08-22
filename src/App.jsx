import "./App.css";
import { useState } from "react";
import ContactList from "./components/contactList.jsx";
import SelectedContact from "./components/selectedContact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
        <SelectedContact
          selectedContact={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      )}
    </>
  );
}
export default App;
