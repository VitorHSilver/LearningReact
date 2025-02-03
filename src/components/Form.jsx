import React from 'react';
import { GlobalContext } from './GlobalContext';
const Form = () => {
     const dados = React.useContext(GlobalContext);

     const [input, setInput] = React.useState('');

     const setDados = ({ target }) => {
          setInput(target.value);
     };
     return (
          <div className="w-96 mx-auto  grid grid-cols-[50px_400px] mt-8 ">
               <h1 className="col-span-2 text-5xl text-center mb-8">Formulario</h1>
               <label htmlFor="name">Nome:</label>
               <input
                    onChange={setDados}
                    className="ml-2 border px-2 peer"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Nome Completo"
               />

               <p className="mt-2 col-span-2 opacity-0 peer-focus:opacity-100 transition-opacity duration-300">
                    Nome completo, por favor
               </p>
               <p className="col-span-2 text-center">{input}</p>
               <p className="col-span-2 text-center">Dados do Context: {dados.Name}</p>

               <div className="col-span-2 mt-24 ">
                    <h2 className="text-2xl inline-block">Dados Puxados:</h2>{' '}
                    <button className="ml-4 px-2 py-4 bg-green-400 rounded-md" onClick={() => dados.handleFetch()}>
                         Puxar
                    </button>
                    <button className="ml-4 px-2 py-4 bg-amber-300 rounded-md" onClick={() => dados.clearDate()}>
                         Limpar
                    </button>
                    {dados.product && (
                         <div>
                              <h2>{dados.product.nome}</h2>
                              <p>{dados.product.preco}</p>
                         </div>
                    )}
               </div>
          </div>
     );
};
export default Form;
