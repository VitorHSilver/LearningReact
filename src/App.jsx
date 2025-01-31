// import './index.css';
import React from 'react';
import './App.css';
import Product from './components/Product';

// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
     const [product, setProduct] = React.useState(null);

     function handleClick(event) {
          setProduct(event.target.innerText.toLowerCase());
     }
     React.useEffect(() => {
          if (product !== null) {
               localStorage.setItem('product', product);
          }
     }, [product]);

     React.useEffect(() => {
          const savedProduct = localStorage.getItem('product');
          if (savedProduct !== null) {
               setProduct(savedProduct);
          }
     }, []);

     return (
          <div>
               <div>
                    <h1 className="text-4xl font-bold m-3">
                         Preferência: <span className="italic text-4xl">{product ? product : ''}</span>
                    </h1>
                    <div className="flex gap-2 ml-3">
                         <button onClick={handleClick} className="bg-sky-300 p-1 rounded-md font-medium capitalize">
                              notebook
                         </button>
                         <button onClick={handleClick} className="bg-sky-300 p-1 rounded-md font-medium capitalize">
                              smartphone
                         </button>
                    </div>
               </div>
               <Product product={product} />
          </div>
     );
};

export default App;
