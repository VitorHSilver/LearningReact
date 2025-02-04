// import './index.css';
import React from 'react';
import './App.css';
import useFetch from './components/useFetch';
import useLocalStorage from './components/useLocalStorage';
const App = () => {
     const [product, setProduct] = useLocalStorage('product', '');

     const { request, data, loading, error } = useFetch();

     const handleClick = ({ target }) => {
          setProduct(target.innerText);
     };

     React.useEffect(() => {
          async function fetchData() {
               const { response, json } = await request('https://ranekapi.origamid.dev/json/api/produto/');
          }

          fetchData();
     }, [request]);
     if (error) return <p>{error}</p>;
     if (loading) return <p>Carregando...</p>;
     return (
          <>
               <h2>Produto Preferido: {product}</h2>
               <div>
                    <button className="py-2 px-4 bg-amber-100 rounded-md m-4" onClick={handleClick}>
                         notebook
                    </button>
                    <button className="py-2 px-4 bg-emerald-100 rounded-md m-4" onClick={handleClick}>
                         smartphone
                    </button>
               </div>
               {data && (
                    <div>
                         {data.map((item) => (
                              <div key={item.id}>
                                   <h1>{item.nome}</h1>
                              </div>
                         ))}
                    </div>
               )}
               else return null;
          </>
     );
};
export default App;
