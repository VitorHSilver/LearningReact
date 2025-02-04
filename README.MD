# Custom Hook: useFetch

Este README explica como usar o custom hook `useFetch` em um projeto React. O hook `useFetch` facilita a realização de requisições HTTP e o gerenciamento de estados relacionados, como dados, erros e carregamento.

## Explicação

-    **data**: Armazena os dados retornados pela requisição.
-    **error**: Armazena qualquer erro que ocorra durante a requisição.
-    **loading**: Indica se a requisição está em andamento.
-    **request**: Função que realiza a requisição HTTP.

## Exemplo de criação

```jsx
import React from 'react';

const useFetch = () => {
     const [data, setData] = React.useState(null);
     const [error, setError] = React.useState(null);
     const [loading, setLoading] = React.useState(null);

     const request = React.useCallback(async (url, options) => {
          let response;
          let json;
          try {
               setError(null);
               setLoading(true);
               response = await fetch(url, options);
               json = await response.json();
          } catch (error) {
               json = null;
               setError('erro');
          } finally {
               setData(json);
               setLoading(false);
               return { response, json };
          }
     }, []);
     return { data, error, loading, request };
};
export default useFetch;
```

## Exemplo de Uso

Aqui está um exemplo de como usar o `useFetch` em um componente React:

```jsx

// App.jsx
import React from 'react';
import useFetch from './useFetch';

const MyComponent = () => {
     const { data, error, loading, request } = useFetch();

     React.useEffect(() => {
          request('https://api.example.com/data');
     }, [request]);

     if (loading) return <p>Loading...</p>;
     if (error) return <p>Error: {error}</p>;
     if (!data) return null;

     return (
          <div>
               <h1>Data</h1>
               <pre>{JSON.stringify(data, null, 2)}</pre>
          </div>
     );
};

export default MyComponent;
```

## Como Usar

1. Importe o hook `useFetch` no seu componente.
2. Utilize o hook para obter os estados `data`, `error`, `loading` e a função `request`.
3. Chame a função `request` com a URL e as opções desejadas para realizar a requisição.

Este hook é útil para simplificar o processo de fazer requisições HTTP e gerenciar estados relacionados em componentes React.
