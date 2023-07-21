import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Contacts from "./containers/Contacts/Contacts";
import NotFound from "./components/NotFound/NotFound";

const App = () => (
  <Layout>
    <Routes>
      <Route path={useLocation().pathname === '/' ? '/' : '/contacts'} element={<Contacts />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
);

export default App;
