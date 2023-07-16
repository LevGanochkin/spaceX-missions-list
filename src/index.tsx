import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const rootElem = document.getElementById("root")

if(!rootElem) throw new Error(`Can't find element with id ${rootElem}`);
const root = createRoot(rootElem); 
root.render(
    <Provider store={store}>
        <App/> 
    </Provider>
)