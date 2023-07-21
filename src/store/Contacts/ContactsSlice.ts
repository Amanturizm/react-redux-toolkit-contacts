import { createSlice } from "@reduxjs/toolkit";
import { fetchAll } from "./ContactsThunk";

interface State {
  contacts: IContact[];
}

const initialState: State = {
  contacts: [],
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state, { payload: contacts }) => {
      state.contacts = contacts;
    });
  }
});

export const contactsReducer = contactsSlice.reducer;