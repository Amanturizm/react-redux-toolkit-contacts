import { createSlice } from "@reduxjs/toolkit";

interface State {
  contacts: string[];
}

const initialState: State = {
  contacts: [],
}

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {

  }
});

export const contactsReducer = contactsSlice.reducer;