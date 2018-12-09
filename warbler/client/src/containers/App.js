import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../store';
import Navbar from './Navbar';

const store = configureStore();

const App = () => (
   <Provider store={store}>
      <Router>
         <div className="onboarding">
            <Navbar />
            <div>Hello World</div>
         </div>
      </Router>
   </Provider>
);

export default App;
