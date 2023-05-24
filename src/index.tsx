import React from 'react';
import ReactDOM from 'react-dom/client';
import {MantineProvider} from "@mantine/core";
import { HashRouter} from "react-router-dom";

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <MantineProvider withGlobalStyles withNormalizeCSS>
    <HashRouter basename='/job-search-app'>
      <App/>
    </HashRouter>
  </MantineProvider>
);

