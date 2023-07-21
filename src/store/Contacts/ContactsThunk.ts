import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";

export const fetchAll = createAsyncThunk<IContact[]>(
  'contacts/fetchAll',
  async () => {
    const { data: contacts } = await axiosApi.get<IContactsApi>('/contacts.json');

    return contacts ? Object.keys(contacts).map(id => ({ ...contacts[id], id })) : [];
  }
);

export const fetchOne = createAsyncThunk<TContactApi, string>(
  'contacts/fetchOne',
  async (id) => {
    const { data } = await axiosApi.get<TContactApi>(`/contacts/${id}.json`);
    return data;
  }
);

export const createOne = createAsyncThunk<void, TContactApi>(
  'contacts/createOne',
  async (newContact) => {
    await axiosApi.post('/contacts.json', newContact);
  }
);