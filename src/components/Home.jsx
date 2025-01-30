import React from 'react';
import Button from './Button';
// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado
const Home = () => {
     const [product, setProduct] = React.useState(null);
     const [loading, setLoading] = React.useState(false);

     async function handleClick(event) {
          const { innerHTML } = event.target;
          setLoading(true);
          const url = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${innerHTML.toLowerCase()}`);
          const dado_json = await url.json();
          setProduct(dado_json);
          setLoading(false);
     }
     return (
          <div className="flex flex-col items-center">
               <div className="flex">
                    <Button name="Tablet" atribute="tablet" styleClass="blue" onClick={handleClick} />
                    <Button name="Smartphone" styleClass="green" onClick={handleClick} />
                    <Button name="Notebook" styleClass="red" onClick={handleClick} />
               </div>
               {loading && <p>Carregando...</p>}

               {!loading && product && (
                    <div className="text-center">
                         <h1 className="text-3xl font-semibold mt-8 mb-8">{product.nome}</h1>
                         <p className="text-lg  mt-8 mb-8">R${product.preco}</p>
                         {product.fotos && (
                              <img
                                   className="w-72 h-72 object-cover object-center"
                                   src={product.fotos[0].src}
                                   alt={product.fotos[0].titulo}
                              />
                         )}
                    </div>
               )}
          </div>
     );
};
export default Home;
