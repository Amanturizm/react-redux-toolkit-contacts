import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../app/hook";
import { fetchAll } from "../../store/Contacts/ContactsThunk";
import ContactsItem from "../../components/ContactsItem/ContactsItem";

const Contacts = () => {
  const dispatch = useAppDispatch();
  const { contacts } = useAppSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div className="m-5">
      {contacts.map(contact => <ContactsItem contact={contact} key={contact.id} />)}
    </div>
  );
};

export default Contacts;