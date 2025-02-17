# Uso do useReducer no React

## Introdução

O `useReducer` é um hook do React que é utilizado para gerenciar o estado de componentes de forma mais complexa. Ele é uma alternativa ao `useState` e é especialmente útil quando se tem lógica de estado complexa que envolve múltiplos sub-valores ou quando o próximo estado depende do estado anterior.

## Como Usar

### Passo 1: Importar o useReducer

Primeiro, você precisa importar o `useReducer` do React:

```javascript
import React, { useReducer } from 'react';
```

### Passo 2: Definir o Redutor (Reducer)

Um redutor é uma função que determina como o estado e as ações são transformados em um novo estado. Ele recebe dois argumentos: o estado atual e a ação.

```javascript
const initialState = { count: 0 };

function reducer(state, action) {
     switch (action.type) {
          case 'increment':
               return { count: state.count + 1 };
          case 'decrement':
               return { count: state.count - 1 };
          default:
               throw new Error();
     }
}
```

### Passo 3: Inicializar o useReducer

Você inicializa o `useReducer` passando o redutor e o estado inicial.

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

### Passo 4: Despachar Ações

Para atualizar o estado, você despacha ações usando a função `dispatch`.

```javascript
<button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
<button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
```

### Exemplo Completo

```javascript
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
     switch (action.type) {
          case 'increment':
               return { count: state.count + 1 };
          case 'decrement':
               return { count: state.count - 1 };
          default:
               throw new Error();
     }
}

function Counter() {
     const [state, dispatch] = useReducer(reducer, initialState);

     return (
          <div>
               <p>Contagem: {state.count}</p>
               <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
               <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
          </div>
     );
}

export default Counter;
```

## Utilidade

O `useReducer` é útil quando:

-    O estado do componente é complexo e envolve múltiplos sub-valores.
-    O próximo estado depende do estado anterior.
-    Você deseja centralizar a lógica de atualização de estado em uma única função.

Ele ajuda a tornar o código mais previsível e fácil de entender, especialmente em aplicações maiores.

```jsx
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
```
