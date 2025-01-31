### HOOKS/ useState

Hooks são uma adição ao React que permitem o uso de estado e outros recursos do React sem escrever uma classe. Eles foram introduzidos na versão 16.8 do React e são amplamente utilizados para gerenciar estado, efeitos colaterais e outros aspectos do ciclo de vida dos componentes funcionais.

Exemplo de uso de `useState`:

```jsx
import React, { useState } from 'react';

function Contador() {
     // Declara uma variável de estado chamada "contagem" e uma função para atualizá-la
     const [contagem, setContagem] = useState(0);

     return (
          <div>
               <p>Você clicou {contagem} vezes</p>
               <button onClick={() => setContagem(contagem + 1)}>Clique aqui</button>
          </div>
     );
}
```

Neste exemplo, `useState` é usado para adicionar estado ao componente funcional `Contador`. A variável `contagem` mantém o valor atual do estado, e `setContagem` é a função usada para atualizá-lo.
