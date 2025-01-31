## useRef

/\*\*

-    Este código define um componente funcional React que gerencia uma lista de comentários.
-
-    -    `comments`: Um estado que armazena a lista de comentários.
-    -    `input`: Um estado que armazena o valor atual do campo de entrada.
-    -    `inputElement`: Uma referência ao elemento de entrada (input) no DOM.
-

```jsx
const [comments, setComments] = React.useState([]);
const [input, setInput] = React.useState('');
const inputElement = React.useRef();
```

-    Função `handleClick`:
-    -    Adiciona o valor atual do campo de entrada à lista de comentários.
-    -    Limpa o campo de entrada.
-    -    Define o foco de volta ao campo de entrada usando a referência `inputElement`.

```jsx
const handleClick = () => {
     setComments([...comments, input]);
     setInput('');
     inputElement.current.focus();
};
```

-    O componente renderiza:
-    -    Um título "comments:".
-    -    Uma lista de comentários.
-    -    Um campo de entrada para adicionar novos comentários.
-    -    Um botão "Enviar" que chama a função `handleClick` ao ser clicado.
-
-    A referência `inputElement` é utilizada para acessar diretamente o elemento de entrada no DOM e definir o foco nele após o envio de um comentário.
     \*/

```jsx
<div className="m-4">
     <h1 className="text-lg font-extrabold mb-4">comments:</h1>
     <ul>
          {comments.map((comment, index) => (
               <li key={index}>{comment}</li>
          ))}
     </ul>
     <div className="mt-4">
          <input
               type="text"
               className="border"
               value={input}
               ref={inputElement}
               onChange={({ target }) => setInput(target.value)}
          />
          <button className="bg-blue-300 p-2 rounded-md ml-2" onClick={handleClick}>
               Enviar
          </button>
     </div>
</div>
```

## useRef com Temporizador

Este código define um componente funcional React que gerencia um contador e uma notificação temporária.

### Estados e Referências

-    `contar`: Um estado que armazena o valor atual do contador.
-    `notificacao`: Um estado que armazena a mensagem de notificação.
-    `timeoutRef`: Uma referência ao temporizador (`timeout`) no DOM.

```jsx
const [contar, setContar] = React.useState(0);
const [notificacao, setNotificacao] = React.useState(null);
const timeoutRef = React.useRef();
```

Função handleClick
Define a mensagem de notificação como "Obrigado por comprar".
Limpa qualquer temporizador existente usando clearTimeout.
Define um novo temporizador que limpa a mensagem de notificação após 1 segundo.
Incrementa o valor do contador.

```jsx
function handleClick() {
     setNotificacao('Obrigado por comprar');
     clearTimeout(timeoutRef.current);
     timeoutRef.current = setTimeout(() => {
          setNotificacao(null);
     }, 1000);
     setContar(contar + 1);
}
```

Renderização do Componente
O componente renderiza:

A mensagem de notificação, se houver.
Um botão que exibe o valor atual do contador e chama a função handleClick ao ser clicado.

```jsx
return (
     <div>
          <p>{notificacao}</p>
          <button onClick={handleClick}>{contar}</button>
     </div>
);
```
