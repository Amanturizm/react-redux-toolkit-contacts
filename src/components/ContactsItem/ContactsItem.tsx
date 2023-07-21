import React from 'react';
import defaultImage from '../../assets/no-image.png';

interface Props {
  contact: IContact;
  onClick: React.MouseEventHandler;
}

const ContactsItem: React.FC<Props> = ({ contact, onClick }) => {
  return (
    <div
      className="
      d-flex align-items-center gap-5
      border border-2 border-black rounded-4
      mt-4"
      style={{ width: 500, cursor: 'pointer' }}
      onClick={onClick}
    >
      <img src={contact.photo || defaultImage} alt="img" className="w-25 rounded-start-4" />
      <h1>{contact.name}</h1>
    </div>
  );
};

export default ContactsItem;