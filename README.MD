# Projeto de Interface com Fetch API

Este projeto é uma interface simples em React que utiliza a Fetch API para obter dados de produtos de uma API externa e exibi-los na tela. A interface possui três botões, cada um representando um produto diferente (Tablet, Smartphone e Notebook). Ao clicar em um botão, os dados do produto correspondente são buscados e exibidos na tela.

## Funcionalidades

-    Três botões para selecionar diferentes produtos.
-    Ao clicar em um botão, os dados do produto são buscados da API e exibidos na tela.
-    Exibe uma mensagem de "Carregando..." enquanto os dados estão sendo buscados.
-    Mostra apenas um produto por vez.

### Uso do States

```
const [product, setProduct] = React.useState(null);
const [loading, setLoading] = React.useState(false);
```

No componente Button, utilizamos props para passar o nome do botão, a classe de estilo e a função de clique.

```
const Button = ({ name, styleClass, onClick }) => {
    return (
        <div>
            <button
                className={`text-black p-2 m-2 cursor-pointer ${
                    styleClass === 'blue'
                        ? 'bg-blue-200 '
                        : styleClass === 'green'
                        ? 'bg-emerald-500'
                        : 'bg-red-500'
                }`}
                onClick={onClick}
            >
                {name}
            </button>
        </div>
    );
};
```

#### Fetch com Async/Await
Desestruturando o event.target para pegar a variavel innerHTML
```
async function handleClick(event) {
    const { innerHTML } = event.target;
    setLoading(true);
    const url = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${innerHTML.toLowerCase()}`);
    const dado_json = await url.json();
    setProduct(dado_json);
    setLoading(false);
}
```
