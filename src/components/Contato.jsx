import React from 'react';

const reducer = (state, action) => {
     switch (action.type) {
          case 'remover':
               return state.filter((item) => item !== action.content);
          case 'adicionar':
               return [...state, action.content];
          default:
               throw new Error('Erro');
     }
};
const Exemplo = () => {
     const [state, dispatch] = React.useReducer(reducer, ['Banana', 'Uva']);
     return (
          <>
               <button
                    className="py-1 mx-4 bg-emerald-400 rounded-md p-2 mt-4 cursor-pointer"
                    onClick={() => dispatch({ type: 'remover', content: 'Banana' })}
               >
                    Remover Banana
               </button>
               <button
                    className="py-1 mx-4 bg-emerald-400 rounded-md p-2 mt-4 cursor-pointer"
                    onClick={() => dispatch({ type: 'adicionar', content: 'Limão' })}
               >
                    Adicionar Limão
               </button>
               {state}
          </>
     );
};
export default Exemplo;
