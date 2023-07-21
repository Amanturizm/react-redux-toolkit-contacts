import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";

export const fetchAll = createAsyncThunk<IContact[]>(
  'contacts/fetchAll',
  async () => {
    const { data: contacts } = await axiosApi.get<IContactApi>('/contacts.json');

    return contacts ? Object.keys(contacts).map(id => ({ ...contacts[id], id })) : [];
  }
);