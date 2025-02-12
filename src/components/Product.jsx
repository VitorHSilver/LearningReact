import React from 'react';
import { useParams } from 'react-router-dom';
const Product = () => {
     const [product, setProduct] = React.useState(null);
     const [loading, setLoading] = React.useState(true);

     const { id } = useParams();

     const fetchProduct = async () => {
          try {
               const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
               const json = await response.json();
               setProduct(json);
               setLoading(true);
               document.title = json.nome;
          } catch (erro) {
               console.log(erro);
          } finally {
               setLoading(false);
          }
     };
     React.useEffect(() => {
          fetchProduct();
     }, [id]);

     if (loading) return <div>Carregando...</div>;

     return (
          <div className="grid grid-cols-2 gap-4">
               <div className="mt-8">
                    <img className="rounded-md" src={product.fotos[0].src} alt={product.fotos[0].titulo} />
               </div>
               <div className="mt-8">
                    <h1 className="text-5xl">{product.nome}</h1>
                    <div className="flex justify-center items-center mt-4 *:text-lg">
                         <p>
                              <sup>R$</sup>
                              <span>{product.preco}</span>
                         </p>
                    </div>
                    <p className="text-pretty text-md mt-4 ml-1">{product.descricao}</p>
               </div>
          </div>
     );
};

export default Product;
