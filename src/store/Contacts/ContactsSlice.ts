import { createSlice } from "@reduxjs/toolkit";
import {fetchAll, fetchOne} from "./ContactsThunk";

interface State {
  contacts: IContact[];
  currentContact: TContactApi | null;
}

const initialState: State = {
  contacts: [],
  currentContact: null,
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state, { payload: contacts }) => {
      state.contacts = contacts;
    });

    builder.addCase(fetchOne.fulfilled, (state, { payload: currentContact }) => {
      state.currentContact = currentContact;
    });
  }
});

export const contactsReducer = contactsSlice.reducer;