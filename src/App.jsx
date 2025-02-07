import React from 'react';
import './App.css';
import useForm from './components/useForm';
import Label from './components/Label';
import Radio from './components/Radio';
import Input from './components/Input';

const perguntas = [
     {
          pergunta: 'Qual método é utilizado para criar componentes?',
          options: ['React.makeComponent()', 'React.createComponent()', 'React.createElement()'],
          resposta: 'React.createElement()',
          id: 'p1',
     },
     {
          pergunta: 'Como importamos um componente externo?',
          options: ['import Component from "./Component"', 'require("./Component")', 'import "./Component"'],
          resposta: 'import Component from "./Component"',
          id: 'p2',
     },
     {
          pergunta: 'Qual hook não é nativo?',
          options: ['useEffect()', 'useFetch()', 'useCallback()'],
          resposta: 'useFetch()',
          id: 'p3',
     },
     {
          pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
          options: ['set', 'get', 'use'],
          resposta: 'use',
          id: 'p4',
     },
];
const App = () => {
     const [index, setIndex] = React.useState(0);
     const [selectedOption, setSelectedOption] = React.useState();
     const { checkValue, error, score } = useForm();
     const [isFinished, setIsFinished] = React.useState(false);

     const questions = perguntas[index].pergunta;
     const id = perguntas[index].id;
     const options = perguntas[index].options;

     const handleSubmit = (event) => {
          event.preventDefault();
          const correctAnswer = perguntas[index].resposta;
          checkValue(selectedOption, correctAnswer);
          if (checkValue(selectedOption, correctAnswer)) {
               if (index < perguntas.length - 1) {
                    setIndex(index + 1);
                    setSelectedOption('');
               } else {
                    setIsFinished(true);
               }
          }
     };

     return (
          <div className="border m-8 p-4 border-gray-300">
               {isFinished ? (
                    <p>
                         Seus acertos foram de {score} de {perguntas.length}
                    </p>
               ) : (
                    <form onSubmit={handleSubmit}>
                         <Label type="text" options={[questions]} id={id} />
                         {/* {perguntas.map(({ pergunta }) => (
                              <Input {...pergunta} />
                         ))} */}
                         <Radio options={options} value={selectedOption} setValue={setSelectedOption} />
                         {error && <p className=" text-red-300 text-lg">{error}</p>}
                         <button className="bg-blue-400 px-4 py-2 rounded mt-4">Próxima</button>
                    </form>
               )}
          </div>
     );
};

export default App;
