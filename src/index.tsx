import React from 'react';
import ReactDOM from 'react-dom/client';
import {MantineProvider} from "@mantine/core";
import {BrowserRouter} from "react-router-dom";
import {Notifications} from "@mantine/notifications";

import {AppProvider} from "./context";

import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AppProvider>
    <MantineProvider withGlobalStyles>
      <BrowserRouter basename='/job-search-app'>
        <Notifications position='bottom-right' limit={3}/>
        <App/>
      </BrowserRouter>
    </MantineProvider>
  </AppProvider>
);

