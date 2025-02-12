# Desafio React - Produto

Este projeto é um desafio de React que consiste em criar uma página de produto utilizando a biblioteca React e React Router.

## Funcionalidades

- Busca de dados de um produto específico a partir de uma API externa.
- Exibição de informações detalhadas do produto, incluindo imagem, nome, preço e descrição.
- Atualização dinâmica do título da página com o nome do produto.
- Tratamento de estados de carregamento e erros durante a busca dos dados.

## Estrutura do Código

O componente `Product` é responsável por:

1. **Estado e Hooks**:
     - `product`: Armazena os dados do produto.
     - `loading`: Indica se os dados estão sendo carregados.
     - `useParams`: Hook do React Router para obter o ID do produto a partir da URL.

2. **Função `fetchProduct`**:
     - Faz uma requisição à API para obter os dados do produto.
     - Atualiza o estado `product` com os dados recebidos.
     - Atualiza o estado `loading` para indicar o fim do carregamento.
     - Atualiza o título da página com o nome do produto.

3. **Efeito `useEffect`**:
     - Chama a função `fetchProduct` sempre que o ID do produto na URL mudar.

4. **Renderização Condicional**:
     - Exibe uma mensagem de carregamento enquanto os dados estão sendo buscados.
     - Exibe os detalhes do produto quando os dados são carregados.


