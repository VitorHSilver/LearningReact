import React from 'react';
import './App.css';
import Exemplo from './components/Contato';

const reducer = (state, action) => {
     switch (action) {
          case 'aumentar':
               return state + 1;
          case 'diminuir':
               return state - 1;
          default:
               throw new Error('');
     }
};

const App = () => {
     const [state, dispatch] = React.useReducer(reducer, 0);

     return (
          <div>
               <button
                    className="py-1 mx-4 bg-emerald-400 rounded-md p-2 mt-4 cursor-pointer"
                    onClick={() => dispatch('aumentar')}
               >
                    +
               </button>
               <button
                    className="py-1 mx-4 bg-emerald-400 rounded-md p-2 mt-4 cursor-pointer"
                    onClick={() => dispatch('diminuir')}
               >
                    -
               </button>
               <p className="p-4">{state}</p>
               <Exemplo />
          </div>
     );
};

export default App;
