import React from 'react';

export const GlobalContext = React.createContext();
// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

export const GlobalStorage = ({ children }) => {
     const [contar, setContar] = React.useState(0);
     const [product, setProduct] = React.useState([]);

     const adicionarUm = () => {
          setContar((contar) => contar + 1);
     };
     const handleFetch = async () => {
          try {
          } catch (error) {
               console.error('ERrOr":', error);
          }
          const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/notebook');
          const data = await response.json();
          setProduct(data);
     };
     const clearDate = () => {
          setProduct('');
     };
     return (
          <GlobalContext.Provider
               value={{
                    Name: 'Vitor Henrique da Silva',
                    Idade: 28,
                    contar,
                    adicionarUm,
                    handleFetch,
                    product,
                    clearDate,
               }}
          >
               {children}
          </GlobalContext.Provider>
     );
};
