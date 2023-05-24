import React from 'react';
import ReactDOM from 'react-dom/client';
import {MantineProvider} from "@mantine/core";
import {BrowserRouter} from "react-router-dom";
import {Notifications} from "@mantine/notifications";

import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <BrowserRouter basename='/job-search-app'>
      <Notifications  position='bottom-right' limit={3}/>
      <App/>
    </BrowserRouter>
  </MantineProvider>
);

