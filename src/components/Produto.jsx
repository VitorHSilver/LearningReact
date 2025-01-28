import React from 'react';

const Produto = ({ nome, propriedades }) => {
     return (
          <div
               style={{
                    margin: '30px 10px',
                    border: '1px solid',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.1)',
               }}
          >
               <h1>{nome}</h1>
               <ul>
                    {propriedades.map((props) => (
                         <li>{props}</li>
                    ))}
               </ul>
          </div>
     );
};
export default Produto;
