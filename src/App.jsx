import React from 'react';
import './App.css';
import Input from './components/Input';
import useForm from './components/useForm';

const App = () => {
     const cep = useForm('cep');
     const email = useForm('email');
     const nome = useForm();
     const sobrenome = useForm(false);

     const handleSubmit = (event) => {
          event.preventDefault();
          if (cep.validate() && email.validate() && nome.validate()) {
               console.log('Enviar');
          } else {
               console.log('Não enviar');
          }
     };
     return (
          <form onSubmit={handleSubmit}>
               <div className='flex'>
                    <Input name="Nome" id="nome" type="text" {...nome} />
                    <Input name="Sobrenome" id="sobrenome" type="text" {...sobrenome} />
               </div>
               <Input name="CEP" id="cep" type="text" placeholder="00000-000" {...cep} />
               <Input name="Email" id="email" type="email" {...email} />
               <button className="py-2 px-4 bg-blue-200 rounded mt-2 ml-3">Enviar</button>
          </form>
     );
};

export default App;
