import React from 'react';

interface Props {
  contact: IContact;
}

const ContactsItem: React.FC<Props> = ({ contact }) => {
  return (
    <div
      className="
      d-flex align-items-center gap-5
      border border-2 border-black rounded-4"
      style={{ width: 500, cursor: 'pointer' }}
    >
      <img src={contact.photo} alt="img" className="w-25 rounded-start-4" />
      <h1>{contact.name}</h1>
    </div>
  );
};

export default ContactsItem;