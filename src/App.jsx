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
          <div className="m-4">
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
          </div>
     );
};

export default App;
