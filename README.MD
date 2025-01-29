### PROPS

Props (abreviação de "propriedades") são um mecanismo para passar dados de um componente pai para um componente filho no React. Elas são somente leitura e não devem ser modificadas pelo componente filho. Props permitem que os componentes sejam reutilizáveis, dando-lhes a capacidade de receber dados diferentes e se comportar de acordo.

Exemplo de uso:

```jsx
function Saudacao(props) {
    return <h1>Olá, {props.nome}!</h1>;
}

// Usando o componente Saudacao com props
<Saudacao nome="Alice" />
```

Neste exemplo, o componente `Saudacao` recebe uma prop `nome` e a usa para exibir uma saudação personalizada.

Props também podem ser usadas para passar funções, objetos, arrays e outros tipos de dados para componentes filhos.

Interface de Propriedades (Props) para o componente.

```js
/**
 * @interface Props
 * @property {string} titulo - O título a ser exibido no componente.
 * @property {boolean} estaAtivo - Um indicador que mostra se o componente está ativo.
 * @property {number} contagem - Um valor numérico a ser usado dentro do componente.
 * @property {Function} aoClicar - Uma função de callback a ser chamada quando o componente for clicado.
 */
```

A interface Props é usada para definir as propriedades esperadas que o componente receberá. Cada propriedade é descrita com seu tipo e propósito:
- `titulo`: Uma string que representa o título do componente.
- `estaAtivo`: Um booleano que indica se o componente está atualmente ativo.
- `contagem`: Um número que pode ser usado para vários propósitos dentro do componente, como exibir uma contagem.
- `aoClicar`: Uma função que será executada quando o componente for clicado, permitindo um comportamento personalizado.

Permitem você dividir a sua interface em pequenos elementos. São criados através de funções que retornam elementos React.
