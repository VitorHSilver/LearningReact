import React from 'react';
import './App.css';
import js from '@eslint/js';

const App = () => {
     const [form, setForm] = React.useState({
          nome: '',
          email: '',
          senha: '',
          cep: '',
          rua: '',
          numero: '',
          bairro: '',
          cidade: '',
          estado: '',
     });

     const [response, setResponse] = React.useState(null);

     const inputs = [
          { id: 'nome', label: 'Nome', type: 'text' },
          { id: 'email', label: 'Email', type: 'email' },
          { id: 'senha', label: 'Senha', type: 'password' },
          { id: 'cep', label: 'CEP', type: 'text' },
          { id: 'rua', label: 'Rua', type: 'text' },
          { id: 'numero', label: 'Número', type: 'text' },
          { id: 'bairro', label: 'Bairro', type: 'text' },
          { id: 'cidade', label: 'Cidade', type: 'text' },
          { id: 'estado', label: 'Estado', type: 'text' },
     ];

     const handleSubmit = async (event) => {
          event.preventDefault();

          try {
               const response = await fetch('https://ranekapi.origamid.dev/json/api/usuario', {
                    method: 'POST',
                    headers: {
                         'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
               });

               // Atualiza o estado com a resposta da API
               setResponse(response);

               // Verifica se a requisição foi bem-sucedida
               if (response.ok) {
                    console.log('Formulário enviado com sucesso!');
                    console.log(response);
               } else {
                    console.error('Erro ao enviar o formulário:', response.statusText);
               }
          } catch (error) {
               console.error('Erro na requisição:', error);
          } finally {
               const json = await response.json();
               console.log(json);
          }
     };

     const handleChange = ({ target }) => {
          const { id, value } = target;
          setForm({ ...form, [id]: value });
     };

     return (
          <>
               <div className="grid grid-cols-2 min-h-screen">
                    <div className="grid bg-black h-screen place-items-center">
                         <h2 className="text-8xl text-gray-100">Cadastro</h2>
                    </div>
                    <form
                         onSubmit={handleSubmit}
                         className="grid grid-cols-2 gap-4 p-8 w-full border border-gray-400/10 shadow max-w-2xl m-auto"
                    >
                         {inputs.map(({ id, label, type }) => (
                              <div key={id}>
                                   <div className="grid grid-cols-[80px_auto] items-center">
                                        <label className="text-gray-300 uppercase" htmlFor={id}>
                                             {label}
                                        </label>
                                        <input
                                             type={type}
                                             id={id}
                                             name={label}
                                             value={form[id]}
                                             onChange={handleChange}
                                             className="border mx-2 py-1 pl-1 border-gray-400/50 rounded-md"
                                        />
                                   </div>
                              </div>
                         ))}
                         {response && response.ok && <p>Formulário enviado</p>}
                         <div className="flex justify-end col-span-2">
                              <button className="mx-2 py-2 px-4 bg-gray-900 text-gray-200 rounded-md place-content-end cursor-pointer">
                                   Submit
                              </button>
                         </div>
                    </form>
               </div>
          </>
     );
};

export default App;
