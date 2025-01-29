## Componentes
### Props

Props são argumentos passados para os componentes React. Eles permitem que você passe dados de um componente pai para um componente filho. Props são imutáveis, o que significa que um componente não pode modificar seus próprios props.

#### Exemplo de Uso de Props

```jsx
function Welcome(props) {
     return <h1>Hello, {props.name}</h1>;
}
```

No exemplo acima, o componente `Welcome` recebe uma prop chamada `name` e a utiliza para exibir uma mensagem de boas-vindas.

#### Passando Props para Componentes Filhos

```jsx
function App() {
    return <Welcome name="Sara" />;
}
```

Neste exemplo, o componente `App` está passando a prop `name` com o valor "Sara" para o componente `Welcome`.

#### Props Padrão

Você pode definir valores padrão para props utilizando `defaultProps`.

```jsx
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

Welcome.defaultProps = {
    name: 'Stranger'
};
```

Se nenhuma prop `name` for passada, o valor padrão "Stranger" será utilizado.

#### Validação de Props

Para garantir que os componentes recebam as props corretas, você pode utilizar `PropTypes`.

```jsx
import PropTypes from 'prop-types';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

Welcome.propTypes = {
    name: PropTypes.string
};
```

Neste exemplo, estamos validando que a prop `name` deve ser uma string.
