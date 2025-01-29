## Componentes

Permitem você dividir a sua interface em pequenos elementos. São criados através de funções que retornam elementos React.

```js
const Button = () => {
     return <button>Clicar</button>;
};
```

O principal motivo de criarmos componentes é para podermos compor a interface com diversos componentes que podem ser reutilizados.

### Eventos

Podemos atribuir eventos diretamente aos elementos.

```js
function handleClick(event) {
     return console.log('Comprou:' + event.target.innerText);
}
```

### JavaScript {}

É utilizado `{}` para executar expressões de JavaScript e mostrar o resultado no DOM.

```js
const Produtos = () => {
     const produto1 = 'Camisa';
     const produto2 = 'Bermuda';

     return (
          <div>
               <button onClick={handleClick}>
                    {produto1} - R$ {Math.random()}
               </button>

               <button onClick={handleClick}>
                    {produto2} - R$ {Math.random() * 100}
               </button>
          </div>
     );
};
```

### Hooks

Utilizamos o React pela facilidade de sincronização do estado. Os Hooks são funções especiais de React, o useState possibilita a sincronização do estado.

```js
const Comprar = () => {
     const [count, setCount] = React.useState(1);
     function handleClick() {
          setCount(count + 1);
     }
     return (
          <div>
               <button onClick={handleClick}>Comprar:{count}</button>
               <p>Total: {count}</p>
               <p>Preço: {count * 250}</p>
          </div>
     );
};
```
