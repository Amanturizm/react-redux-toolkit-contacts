import React from 'react';
import {Link, useParams} from "react-router-dom";
import { useAppSelector } from "../../app/hook";
import CloseButton from "../CloseButton/CloseButton";
import defaultImage from '../../assets/no-image.png';
import editIcon from '../../assets/edit-icon.png';
import deleteIcon from '../../assets/delete-icon.png';

const ContactInfoModal = () => {
  const { id } = useParams();
  const { currentContact } = useAppSelector(state => state.contacts);

  if (!currentContact) return null;

  return (
    <div
      className="
      position-fixed top-0 start-0 end-0 bottom-0 w-100 h-100 z-2
      bg-black bg-opacity-50
      d-flex justify-content-center align-items-center
      "
    >
      <div
        className="
        d-flex align-items-center justify-content-between gap-4 pe-5
        position-relative
        border border-2 border-black rounded-4
        bg-white overflow-hidden
        "
        style={{ width: 600, height: 300 }}
      >
        <img src={currentContact.photo || defaultImage} alt="img" className="h-100 rounded-start-4" />
        <div>
          <h1 className="text-wrap">{currentContact.name}</h1>
          <p>{currentContact.phone}</p>
          <p>{currentContact.email}</p>
        </div>

        <div className="d-flex gap-2 position-absolute top-0 end-0 me-5" style={{ marginTop: 15 }}>
          <Link to={`/contacts/edit/${id}`}>
            <img src={editIcon} alt="edit-img" style={{ width: 25 }}  />
          </Link>
          <Link to="">
            <img src={deleteIcon} alt="delete-img" style={{ width: 25 }} />
          </Link>
        </div>
        <CloseButton to="/contacts" />
      </div>
    </div>
  );
};

export default ContactInfoModal;