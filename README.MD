## Usando `useEffect` no React

O hook `useEffect` no React permite que você realize efeitos colaterais em seus componentes funcionais. Efeitos colaterais podem incluir a busca de dados, manipulação direta do DOM e mais. Abaixo estão exemplos demonstrando o uso do `useEffect` em um componente React.


### Explicação

1. **Buscando Dados ao Montar**:
   ```jsx
   React.useEffect(() => {
       fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
           .then((response) => response.json())
           .then((json => setDados(json)));
   }, []);
   ```
   Este `useEffect` é executado uma vez quando o componente é montado, buscando dados de uma API e armazenando-os no estado `dados`.

2. **Logando ao Montar**:
   ```jsx
   React.useEffect(() => {
       console.log('Inicializou');
   }, []);
   ```
   Este `useEffect` também é executado uma vez quando o componente é montado, registrando 'Inicializou' no console.

3. **Atualizando o Título do Documento**:
   ```jsx
   React.useEffect(() => {
       document.title = 'Total ' + contar;
   }, [contar]);
   ```
   Este `useEffect` é executado toda vez que o estado `contar` muda, atualizando o título do documento para refletir a contagem atual.

### Resumo

O hook `useEffect` é uma ferramenta poderosa para gerenciar efeitos colaterais em componentes funcionais do React. Especificando dependências, você pode controlar quando o efeito é executado, facilitando o manuseio de tarefas como busca de dados, registro de logs e atualização do DOM.
     const [contar, setContar] = React.useState(0);
     const [dados, setDados] = React.useState(null);

     
