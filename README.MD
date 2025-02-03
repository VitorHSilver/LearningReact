
## Uso do CreateContext() e useContext()

### CreateContext()

A função `CreateContext()` do React é usada para criar um contexto. Um contexto permite que você passe dados através da árvore de componentes sem ter que passar props manualmente em cada nível.

### useContext()

O hook `useContext()` é usado para acessar o valor de um contexto em um componente funcional. Ele aceita um objeto de contexto (o valor retornado de `React.createContext`) e retorna o valor atual do contexto.

### Exemplo

No exemplo abaixo, criamos um contexto global chamado `GlobalContext` e um componente `GlobalStorage` que fornece valores para esse contexto.

```jsx
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
```

Neste exemplo:

- `GlobalContext` é criado usando `React.createContext()`.
- `GlobalStorage` é um componente que usa o hook `useState` para gerenciar o estado `contar`.
- `GlobalStorage` fornece funções `adicionarUm` e `adicionarDois` para atualizar o estado `contar`.
- `GlobalContext.Provider` é usado para fornecer valores (`Name`, `Idade`, `contar`, `adicionarUm`, `adicionarDois`) para todos os componentes filhos.

Para acessar esses valores em um componente filho, você pode usar o hook `useContext()`:

```jsx
import React from 'react';
import { GlobalContext } from './GlobalStorage';

const MeuComponente = () => {
     const { Name, Idade, contar, adicionarUm, adicionarDois } = React.useContext(GlobalContext);

     return (
          <div>
               <p>Nome: {Name}</p>
               <p>Idade: {Idade}</p>
               <p>Contar: {contar}</p>
               <button onClick={adicionarUm}>Adicionar Um</button>
               <button onClick={adicionarDois}>Adicionar Dois</button>
          </div>
     );
};

export default MeuComponente;
```

Neste componente, `useContext(GlobalContext)` é usado para acessar os valores fornecidos pelo `GlobalStorage`.