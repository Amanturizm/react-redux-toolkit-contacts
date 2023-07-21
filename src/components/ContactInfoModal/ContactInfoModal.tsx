import React from 'react';
import { useAppSelector } from "../../app/hook";
import defaultImage from '../../assets/no-image.png';
import CloseButton from "../CloseButton/CloseButton";

const ContactInfoModal = () => {
  const { currentContact } = useAppSelector(state => state.contacts);

  if (!currentContact) return null;

  return (
    <div className="
    d-flex align-items-center justify-content-between gap-4 pe-5
    position-fixed top-50 start-50 translate-middle
    border border-2 border-black rounded-4
    bg-white
    "
         style={{ width: 600, height: 300 }}
    >
      <img src={currentContact.photo || defaultImage} alt="img" className="h-100 rounded-start-4" />
      <div>
        <h1>{currentContact.name}</h1>
        <p>{currentContact.phone}</p>
        <p>{currentContact.email}</p>
      </div>
      <CloseButton to="/contacts" />
    </div>
  );
};

export default ContactInfoModal;