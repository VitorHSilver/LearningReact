// import './index.css';
import React, { useContext } from 'react';
import './App.css';
import Form from './components/Form';
import { GlobalStorage } from './components/GlobalContext';

const App = () => {
     return (
          <GlobalStorage>
               <Form />;
          </GlobalStorage>
     );
};
export default App;
