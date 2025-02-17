import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
     const [products, setProducts] = React.useState([]);
     const [loading, setLoading] = React.useState(true);

     const allProducts = async () => {
          setLoading(true);
          try {
               const response = await fetch('https://ranekapi.origamid.dev/json/api/produto');
               const json = await response.json();
               setProducts(json);
          } catch (erro) {
               console.log(erro);
          } finally {
               setLoading(false);
          }
     };

     React.useEffect(() => {
          allProducts();
     }, []);

     if (loading) return <div className="loading"></div>;
     return (
          <>
               {products.length && (
                    <div>
                         <ul className="grid grid-cols-[repeat(3,1fr)] ">
                              {products.map((product) => (
                                   <div key={product.id}>
                                        <li className="grid gap-4 m-2">
                                             <Link to={`/produto/${product.id}`}>
                                                  <h1 className=" text-start font-bold text-2xl" key={product.id}>
                                                       {product.nome}
                                                  </h1>
                                                  <img
                                                       src={product.fotos[0].src}
                                                       alt={product.name}
                                                       className="place-content-center rounded-md"
                                                  />
                                             </Link>
                                        </li>
                                   </div>
                              ))}
                         </ul>
                    </div>
               )}
          </>
     );
};
export default Home;
