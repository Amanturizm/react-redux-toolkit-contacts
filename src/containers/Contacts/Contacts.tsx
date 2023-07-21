import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../app/hook";
import {fetchAll, fetchOne} from "../../store/Contacts/ContactsThunk";
import ContactsItem from "../../components/ContactsItem/ContactsItem";
import {Outlet, useNavigate, useParams} from "react-router-dom";

const Contacts = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { contacts } = useAppSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  useEffect(() => {
    if (id) {
      dispatch(fetchOne(id));
    }
  }, [id, dispatch]);

  const viewContact = (id: string) => {
    dispatch(fetchOne(id));
    navigate(`/contacts/${id}`);
  };

  return (
    <>
      <div className="m-5">
        {
          contacts.map(contact => (
            <ContactsItem contact={contact} onClick={() => viewContact(contact.id)} key={contact.id} />
          ))
        }
      </div>

      <Outlet />
    </>
  );
};

export default Contacts;