import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import { Provider } from 'react-redux'; // Ensure 'Provider' is imported
import store from './redux/store'; // Ensure 'store' is imported correctly
import App from './App'; // Ensure 'App' is imported

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
