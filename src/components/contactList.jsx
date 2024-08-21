const ContactList = () => {
  return (
    <div>
      <h1>Contact List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            {/* columns as needed */}
          </tr>
        </thead>
        <tbody>{/* rows with contact here */}</tbody>
      </table>
    </div>
  );
};
export default ContactList;
