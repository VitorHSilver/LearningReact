// import './index.css';
import React from 'react';
import './App.css';

const App = () => {
     const [comments, setComments] = React.useState([]);
     const [input, setInput] = React.useState('');
     const inputElement = React.useRef();
     const handleClick = () => {
          setComments([...comments, input]);
          setInput('');
          inputElement.current.focus();
     };
     return (
          <>
               <section>
                    <div>
                         <h1 className="text-2xl font-bold tracking-tighter">Escolha a sua:</h1>
                         <input type="radio" name="product" id="Numbus" className="peer " />
                         <label
                              htmlFor="Numbus"
                              className="inline-grid grid-cols-[200px_auto] ml-1 text-lg font-medium hover:bg-slate-200  px-2 py-2  rounded peer-checked:bg-blue-300"
                         >
                              Nimbus Stark <span>R$ 4999</span>
                         </label>
                         <ul className="hidden peer-checked:block mx-4 mt-1 w-[285px] p-2 rounded bg-slate-200 font-semibold ">
                              <li>Motor Elétrico</li>
                              <li>Fibra de Carbono</li>
                              <li>50 km/h</li>
                              <li>Rastreador</li>
                         </ul>
                    </div>
                    <div>
                         <input type="radio" name="product" id="Magic" className="peer " />
                         <label
                              htmlFor="Magic"
                              className="inline-grid grid-cols-[200px_auto] ml-1 text-lg font-medium hover:bg-slate-200  px-2 py-2  rounded peer-checked:bg-blue-300"
                         >
                              Magic Migth <span>R$ 2499</span>
                         </label>
                         <ul className="hidden peer-checked:block mx-4 mt-1 w-[285px] p-2 rounded bg-slate-200 font-semibold ">
                              <li>Motor Elétrico</li>
                              <li>Fibra de Carbono</li>
                              <li>50 km/h</li>
                              <li>Rastreador</li>
                         </ul>
                    </div>
                    <div>
                         <input type="radio" name="product" id="Nebula" className="peer " />
                         <label
                              htmlFor="Nebula"
                              className="inline-grid grid-cols-[200px_auto] ml-1 text-lg font-medium hover:bg-slate-200  px-2 py-2  rounded peer-checked:bg-blue-300"
                         >
                              Nebula Cosmic <span>R$ 8499</span>
                         </label>
                         <ul className="hidden peer-checked:block mx-4 mt-1 w-[285px] p-2 rounded bg-slate-200 font-semibold ">
                              <li>Motor Elétrico</li>
                              <li>Fibra de Carbono</li>
                              <li>50 km/h</li>
                              <li>Rastreador</li>
                         </ul>
                    </div>
               </section>
               <section className="m-4">
                    <h1 className="text-lg font-extrabold mb-4">comments:</h1>
                    <ul>
                         {comments.map((comment, index) => (
                              <li key={index}>{comment}</li>
                         ))}
                    </ul>
                    <div className="mt-4">
                         <input
                              type="text"
                              className="border"
                              value={input}
                              ref={inputElement}
                              onChange={({ target }) => setInput(target.value)}
                         />
                         <button className="bg-blue-300 p-2 rounded-md ml-2" onClick={handleClick}>
                              Enviar
                         </button>
                    </div>
               </section>
          </>
     );
};

export default App;
