import React from 'react';
import './App.css';

const App = () => {
     const [radio, setRadio] = React.useState('');

     // multiplos, definindo um valor padrao do usuário
     const [cores, setCores] = React.useState(['black']);


     const handleChangeColor = ({ target }) => {
          if (target.checked) {
               setCores([...cores, target.value]);
          } else {
               setCores(cores.filter((cor) => cor !== target.value));
          }
     };

     const checkColor = (cor) => {
          return cores.includes(cor);
     };
     const RadioChange = ({ target }) => {
          setRadio(target.value);
     };

     const coresMap = {
          black: 'bg-black', 
          white: 'bg-white', 
          blue: 'bg-blue-800', 
          red: 'bg-red-700', 
          green: 'bg-green-900', 
          yellow: 'bg-yellow-200', 
          gray: 'bg-gray-400', 
     };


     return (
          <div className="grid grid-cols-2 h-screen">
               <div className={`grid h-screen place-items-center ${cores.map((cor) => coresMap[cor])}`}>
                    <span className="text-gray-100 top-0 left-0 absolute ml-2">Home</span>
                    <span className="text-gray-900 absolute top-210 left-443 ">@VitorHSilver</span>
                    <h2 className="text-8xl text-gray-100 capitalize">{radio ? radio : 'Cadastro'}</h2>
               </div>
               <div className="grid grid-cols-2">
                    <form>
                         <div className="grid place-items-center h-screen">
                              <div className="flex gap-4  flex-col ">
                                   <label>
                                        <input
                                             type="radio"
                                             name="produto"
                                             value="notebook"
                                             checked={radio === 'notebook'}
                                             onChange={RadioChange}
                                        />
                                        Notebook
                                   </label>
                                   <label>
                                        <input
                                             type="radio"
                                             name="produto"
                                             value="smartphone"
                                             checked={radio === 'smartphone'}
                                             onChange={RadioChange}
                                        />
                                        Smartphone
                                   </label>
                                   <label>
                                        <input
                                             type="radio"
                                             name="produto"
                                             value="tablet"
                                             checked={radio === 'tablet'}
                                             onChange={RadioChange}
                                        />
                                        Tablet
                                   </label>
                                   {/* <p>Produto selecionado: {radio}</p> */}
                              </div>
                         </div>
                    </form>
                    <form>
                         <div className="grid place-items-center h-screen">
                              <div className="grid grid-cols-2">
                                   <label>
                                        <input
                                             type="checkbox"
                                             value="black"
                                             className="m-2"
                                             checked={checkColor('black')}
                                             onChange={handleChangeColor}
                                        />
                                        Preto
                                   </label>
                                   <label>
                                        <input
                                             type="checkbox"
                                             value="red"
                                             className="m-2"
                                             checked={checkColor('red')}
                                             onChange={handleChangeColor}
                                        />
                                        Vermelho
                                   </label>
                                   <label>
                                        <input
                                             type="checkbox"
                                             value="green"
                                             className="m-2"
                                             checked={checkColor('green')}
                                             onChange={handleChangeColor}
                                        />
                                        Verde
                                   </label>
                                   <label>
                                        <input
                                             type="checkbox"
                                             value="blue"
                                             className="m-2"
                                             checked={checkColor('blue')}
                                             onChange={handleChangeColor}
                                        />
                                        Azul
                                   </label>
                                   <label>
                                        <input
                                             type="checkbox"
                                             value="gray"
                                             className="m-2"
                                             checked={checkColor('gray')}
                                             onChange={handleChangeColor}
                                        />
                                        Cinza
                                   </label>
                                   <label>
                                        <input
                                             type="checkbox"
                                             value="white"
                                             className="m-2"
                                             checked={checkColor('white')}
                                             onChange={handleChangeColor}
                                        />
                                        Branco
                                   </label>
                              </div>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default App;
