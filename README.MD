# Aprendendo React - Exercício de Quiz

Este projeto é uma aplicação de quiz simples construída com React. Ele demonstra o uso de gerenciamento de estado, manipulação de eventos e renderização condicional no React.

## Estrutura do Projeto

O componente principal da aplicação é o `App`, que gerencia o estado e a lógica do quiz. As perguntas são definidas em um array de objetos, cada um contendo o texto da pergunta, opções, resposta correta e um ID.

### Componentes

-    **App**: O componente principal que renderiza o quiz e lida com as mudanças de estado.
-    **Radio**: Um componente personalizado usado para renderizar os botões de rádio para cada pergunta.

### Gerenciamento de Estado

O componente `App` usa as seguintes variáveis de estado:

-    `respostas`: Um objeto que armazena as respostas do usuário.
-    `slide`: Um número que rastreia o índice da pergunta atual.
-    `resultado`: Uma string que armazena o resultado final após a conclusão do quiz.

### Funções

-    `handleChange`: Atualiza a resposta do usuário para uma pergunta.
-    `resultadoFinal`: Calcula o número de respostas corretas e define o resultado.
-    `handleClick`: Avança para a próxima pergunta ou mostra o resultado se o quiz estiver concluído.

```jsx
import React from 'react';
import Radio from './Form/Radio';

const perguntas = [
     {
          pergunta: 'Qual método é utilizado para criar componentes?',
          options: ['React.makeComponent()', 'React.createComponent()', 'React.createElement()'],
          resposta: 'React.createElement()',
          id: 'p1',
     },
     {
          pergunta: 'Como importamos um componente externo?',
          options: ['import Component from "./Component"', 'require("./Component")', 'import "./Component"'],
          resposta: 'import Component from "./Component"',
          id: 'p2',
     },
     {
          pergunta: 'Qual hook não é nativo?',
          options: ['useEffect()', 'useFetch()', 'useCallback()'],
          resposta: 'useFetch()',
          id: 'p3',
     },
     {
          pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
          options: ['set', 'get', 'use'],
          resposta: 'use',
          id: 'p4',
     },
];

const App = () => {
     const [respostas, setRespostas] = React.useState({
          p1: '',
          p2: '',
          p3: '',
          p4: '',
     });
     const [slide, setSlide] = React.useState(0);
     const [resultado, setResultado] = React.useState(null);

     function handleChange({ target }) {
          setRespostas({ ...respostas, [target.id]: target.value });
     }

     function resultadoFinal() {
          const corretas = perguntas.filter(({ id, resposta }) => respostas[id] === resposta);
          setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
     }

     function handleClick() {
          if (slide < perguntas.length - 1) {
               setSlide(slide + 1);
          } else {
               setSlide(slide + 1);
               resultadoFinal();
          }
     }

     return (
          <form onSubmit={(event) => event.preventDefault()}>
               {perguntas.map((pergunta, index) => (
                    <Radio
                         active={slide === index}
                         key={pergunta.id}
                         value={respostas[pergunta.id]}
                         onChange={handleChange}
                         {...pergunta}
                    />
               ))}
               {resultado ? <p>{resultado}</p> : <button onClick={handleClick}>Próxima</button>}
          </form>
     );
};

export default App;
```
