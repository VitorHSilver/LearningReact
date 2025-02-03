# Projeto LearningReact

## Visão Geral

Este projeto demonstra como buscar dados usando o hook `useContext` do `GlobalContext` em uma aplicação React.

## GlobalContext

Primeiro, criamos um `GlobalContext` usando `React.createContext()`:

```javascript
import React from 'react';

export const GlobalContext = React.createContext();
```

## Componente GlobalStorage

O componente `GlobalStorage` é responsável por buscar dados da API e armazená-los no contexto global. Ele também fornece uma função para limpar os dados buscados.

```javascript
import React from 'react';
import { GlobalContext } from './GlobalContext';

export const GlobalStorage = ({ children }) => {
     const [product, setProduct] = React.useState([]);

     const handleFetch = async () => {
          try {
               const response = await fetch('https://ranekapi.origamid.dev/json/api/produto/notebook');
               const data = await response.json();
               setProduct(data);
          } catch (error) {
               console.error('Error:', error);
          }
     };

     const clearData = () => {
          setProduct([]);
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
```

```javascript
import { GlobalContext } from './GlobalContext';

const dados = React.useContext(GlobalContext);

<div className="col-span-2 mt-24 ">
     <h2 className="text-2xl inline-block">Dados Puxados:</h2>{' '}
     <button className="ml-4 px-2 py-4 bg-green-400 rounded-md" onClick={() => dados.handleFetch()}>
          Puxar
     </button>
     <button className="ml-4 px-2 py-4 bg-amber-400 rounded-md" onClick={() => dados.clearDate()}>
          Limpar
     </button>
     {dados.product && (
          <div>
               <h2>{dados.product.nome}</h2>
               <p>{dados.product.preco}</p>
          </div>
     )}
</div>;
```
