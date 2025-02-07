import React from 'react';
import './App.css';
import Input from './components/Input';
import Select from './components/Select';
import Radio from './components/Radio';
import Checkbox from './components/Checkbox';

const App = () => {
     const [input, setInput] = React.useState('');
     const [email, setEmail] = React.useState('');
     const [option, setOption] = React.useState();
     const [radio, setRadio] = React.useState();
     const [size, setSize] = React.useState([]);
     return (
          <form>
               <div className="flex">
                    <Select options={['notebook', 'smartphone', 'tablet']} setOption={setOption} value={option} />
                    <div className="grid">
                         <Radio options={['Azul', 'Vermelho', 'Verde']} value={radio} setRadio={setRadio} />
                    </div>
               </div>
               <div>
                    <Checkbox options={['P', 'M', 'G']} value={size} setSize={setSize} />
               </div>
               <Input name="Nome" id="name" type="text" setInput={setInput} value={input} />
               <Input name="Email" id="email" type="email" setInput={setEmail} value={email} required />
               <div>
                    <button className="bg-blue-600 px-4 py-2 ml-4 mt-4">Enviar</button>
               </div>
          </form>
     );
};

export default App;
