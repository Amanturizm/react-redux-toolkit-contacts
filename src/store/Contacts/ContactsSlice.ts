import { createSlice } from "@reduxjs/toolkit";
import { createOne, deleteOne, editOne, fetchAll, fetchOne } from "./ContactsThunk";

interface State {
  contacts: IContact[];
  currentContact: TContactApi | null;

  contactsLoading: boolean;
  currentContactLoading: boolean;
  submitLoading: boolean;
  deleteLoading: boolean;
}

const initialState: State = {
  contacts: [],
  currentContact: null,

  contactsLoading: false,
  currentContactLoading: false,
  submitLoading: false,
  deleteLoading: false,
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAll.pending, (state) => {state.contactsLoading = true});
    builder.addCase(fetchAll.rejected, (state) => {state.contactsLoading = false});
    builder.addCase(fetchAll.fulfilled, (state, { payload: contacts }) => {
      state.contacts = contacts;
      state.contactsLoading = false;
    });

    builder.addCase(fetchOne.pending, (state) => {state.currentContactLoading = true});
    builder.addCase(fetchOne.rejected, (state) => {state.currentContactLoading = false});
    builder.addCase(fetchOne.fulfilled, (state, { payload: currentContact }) => {
      state.currentContact = currentContact;
      state.currentContactLoading = false;
    });

    builder.addCase(createOne.pending, (state) => {state.submitLoading = true});
    builder.addCase(createOne.fulfilled, (state) => {state.submitLoading = false});
    builder.addCase(createOne.rejected, (state) => {state.submitLoading = false});

    builder.addCase(editOne.pending, (state) => {state.submitLoading = true});
    builder.addCase(editOne.fulfilled, (state) => {state.submitLoading = false});
    builder.addCase(editOne.rejected, (state) => {state.submitLoading = false});

    builder.addCase(deleteOne.pending, (state) => {state.deleteLoading = true});
    builder.addCase(deleteOne.fulfilled, (state) => {state.deleteLoading = false});
    builder.addCase(deleteOne.rejected, (state) => {state.deleteLoading = false});
  }
});

export const contactsReducer = contactsSlice.reducer;