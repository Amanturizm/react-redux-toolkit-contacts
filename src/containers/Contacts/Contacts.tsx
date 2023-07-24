import React, { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { fetchAll, fetchOne } from "../../store/Contacts/ContactsThunk";
import ContactsItem from "../../components/ContactsItem/ContactsItem";
import Preloader from "../../components/Preloader/Preloader";

const Contacts = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const { contacts, contactsLoading } = useAppSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch, id]);

  useEffect(() => {
    if (id) dispatch(fetchOne(id));
  }, [id, dispatch]);

  const viewContact = (id: string) => {
    dispatch(fetchOne(id));
    navigate(`/contacts/${id}`);
  };

  return (
    <>
      <div className="m-5">
        {
          contactsLoading && !id ?
            <Preloader />
            :
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