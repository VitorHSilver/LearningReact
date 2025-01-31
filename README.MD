# Projeto de Interface com Fetch API

Este projeto é uma interface simples em React que utiliza a Fetch API para obter dados de produtos de uma API externa e exibi-los na tela. A interface possui dois botões, cada um representando um produto diferente (Notebook e Smartphone). Ao clicar em um botão, os dados do produto correspondente são buscados e exibidos na tela.

    ## Explicação

    1. **Estado `product`**:
        - Utiliza `React.useState` para armazenar os dados do produto.

```jsx
React.useEffect(() => {
     if (product) {
          localStorage.setItem('product', product.nome);
     }
}, [product]);
```

    2. **Função `getData`**:
        - Faz uma requisição para a API com base no texto do botão clicado e atualiza o estado `product`.

```jsx
async function getData(event) {
     const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`);
     const json = await response.json();
     setProduct(json);
}
```

    3. **Efeito para Salvar no `localStorage`**:
        - Usa `React.useEffect` para salvar o nome do produto no `localStorage` sempre que o estado `product` é atualizado.

```jsx
React.useEffect(() => {
     if (product) {
          localStorage.setItem('product', product.nome);
     }
}, [product]);
```

    4. **Efeito para Recuperar do `localStorage`**:
        - Usa `React.useEffect` para buscar o produto salvo no `localStorage` quando o componente é montado.

```jsx
React.useEffect(() => {
     const savedProduct = localStorage.getItem('product');
     if (savedProduct) {
          fetch(`https://ranekapi.origamid.dev/json/api/produto/${savedProduct}`).then((response) =>
               response.json().then((json) => setProduct(json))
          );
     }
}, []);
```
