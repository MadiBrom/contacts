import React from "react";

function ContactRow({ name, email, phone, onClick }) {
  return (
    <tr onClick={onClick}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
}

export default ContactRow;
