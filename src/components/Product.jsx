import React from 'react';

const Product = ({ product }) => {
     const [date, setDate] = React.useState(null);

     React.useEffect(() => {
          if (product !== null) {
               fetch(`https://ranekapi.origamid.dev/json/api/produto/${product}`).then((response) =>
                    response.json().then((json) => setDate(json))
               );
          }
     }, [product]);
     if (date === null) return null;
     return (
          <div className="mt-8 ml-3">
               <h1 className="text-3xl">{date.nome}</h1>
               <p className="mt-4">R${date.preco}</p>
          </div>
     );
};
export default Product;
