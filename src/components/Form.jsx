import React from 'react';
import Title from './Title';
import Input from './Input';
import Button from './Button';

const Form = () => {
     return (
          <div className="bg-gray-100 border p-10 m-auto mt-10 text-5xl font-semibold max-w-max">
               <Title title="Formulario de Cadastro" />
               <Input label="Nome Completo" type="text" id="email" required />
               <Input label="Senha" type="password" id="password" />
               <Button name="Submit"></Button>
          </div>
     );
};

export default Form;
