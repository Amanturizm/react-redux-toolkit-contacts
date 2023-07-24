import React, { useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { deleteOne } from "../../store/Contacts/ContactsThunk";
import CloseButton from "../CloseButton/CloseButton";
import DeleteConfirm from "../DeleteConfirm/DeleteConfirm";
import Preloader from "../Preloader/Preloader";
import defaultImage from '../../assets/no-image.png';
import editIcon from '../../assets/edit-icon.png';
import deleteIcon from '../../assets/delete-icon.png';

const ContactInfoModal = () => {
  const dispatch = useAppDispatch();
  const { currentContact, currentContactLoading } = useAppSelector(state => state.contacts);

  const { id } = useParams() as { id: string };
  const navigate = useNavigate();

  const [isConfirm, setIsConfirm] = useState<boolean>(false);

  if (!currentContact) return null;

  const deleteContact = async () => {
    await dispatch(deleteOne(id));
    navigate('/contacts');
  };

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
        {
          currentContactLoading ? <Preloader /> :
            <>
              <img src={currentContact.photo || defaultImage} alt="img" className="h-100 rounded-start-4" />
              <div className="m-auto">
                <h1>{currentContact.name}</h1>
                <p>{currentContact.phone}</p>
                <p>{currentContact.email}</p>
              </div>

              <div className="d-flex gap-2 position-absolute top-0 end-0 me-5" style={{ marginTop: 15 }}>
                <Link to={`/contacts/edit/${id}`}>
                  <img src={editIcon} alt="edit-img" style={{ width: 25 }}  />
                </Link>

                <img src={deleteIcon} alt="delete-img" style={{ width: 25, cursor: 'pointer' }} onClick={() => setIsConfirm(true)} />
              </div>
            </>
        }
        <CloseButton to="/contacts" />
        {
          isConfirm ?
            <DeleteConfirm clickNo={() => setIsConfirm(false)} clickYes={deleteContact} />
            : null
        }
      </div>
    </div>
  );
};

export default ContactInfoModal;
