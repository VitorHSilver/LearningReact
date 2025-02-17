# Utilizando Lazy e Suspense no React

## Por que usar Lazy e Suspense?

O React Lazy e Suspense são ferramentas poderosas para otimização de desempenho em aplicações React. Eles permitem que você carregue componentes de forma assíncrona, o que pode melhorar significativamente o tempo de carregamento inicial da sua aplicação. Isso é especialmente útil em aplicações grandes, onde o carregamento de todos os componentes de uma vez pode ser demorado.

## Como usar Lazy e Suspense?

### Passo 1: Importar Lazy e Suspense

Primeiro, você precisa importar `lazy` e `Suspense` do React.

```javascript
import React, { lazy, Suspense } from 'react';
```

### Passo 2: Utilizar Lazy para carregar componentes

Em seguida, utilize `lazy` para carregar o componente de forma assíncrona. Por exemplo:

```javascript
const MeuComponente = lazy(() => import('./MeuComponente'));
```

### Passo 3: Envolver o componente com Suspense

Por fim, envolva o componente carregado de forma assíncrona com `Suspense` e forneça um fallback para exibir enquanto o componente está sendo carregado.

```javascript
function App() {
     return (
          <Suspense fallback={<div>Carregando...</div>}>
               <MeuComponente />
          </Suspense>
     );
}
```

### Exemplo Completo

Aqui está um exemplo completo de como utilizar `lazy` e `Suspense`:

```javascript
import React, { lazy, Suspense } from 'react';

const MeuComponente = lazy(() => import('./MeuComponente'));

function App() {
     return (
          <Suspense fallback={<div>Carregando...</div>}>
               <MeuComponente />
          </Suspense>
     );
}

export default App;
```

## Conclusão

Utilizar `lazy` e `Suspense` no React é uma maneira eficiente de melhorar o desempenho da sua aplicação, carregando componentes de forma assíncrona e exibindo um fallback enquanto o carregamento está em progresso. Isso pode resultar em uma experiência de usuário mais rápida e suave.