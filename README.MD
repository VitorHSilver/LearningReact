### HOOKS

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
            <button onClick={() => setContagem(contagem + 1)}>
                Clique aqui
            </button>
        </div>
    );
}
```

Neste exemplo, o hook `useState` é usado para adicionar estado ao componente funcional `Contador`. A variável `contagem` mantém o valor atual do estado, e `setContagem` é a função usada para atualizá-lo.

Exemplo de uso de `useEffect`:

```jsx
import React, { useEffect, useState } from 'react';

function Relogio() {
    const [hora, setHora] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => setHora(new Date()), 1000);

        // Limpeza do efeito
        return () => clearInterval(timerID);
    }, []);

    return (
        <div>
            <h2>Hora atual: {hora.toLocaleTimeString()}</h2>
        </div>
    );
}
```

Neste exemplo, o hook `useEffect` é usado para configurar um temporizador que atualiza o estado `hora` a cada segundo. O retorno da função passada para `useEffect` é usado para limpar o temporizador quando o componente é desmontado.

Hooks permitem que você reutilize lógica de estado entre componentes, simplificando a estrutura e a manutenção do código. Além de `useState` e `useEffect`, existem outros hooks integrados, como `useContext`, `useReducer`, `useMemo`, e você também pode criar seus próprios hooks personalizados para encapsular lógica reutilizável.
