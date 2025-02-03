import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
     const [contar, setContar] = React.useState(0);

     const adicionarUm = () => {
          setContar((contar) => contar + 1);
     };
     const adicionarDois = () => {
          setContar((contar) => contar + 2);
     };
     return (
          <GlobalContext.Provider
               value={{ Name: 'Vitor Henrique da Silva', Idade: 28, contar, adicionarUm, adicionarDois }}
          >
               {children}
          </GlobalContext.Provider>
     );
};
