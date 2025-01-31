// import './index.css';
import React from 'react';
import './App.css';

const App = () => {
     const [contar, setContar] = React.useState(0);
     const [dados, setDados] = React.useState(null);

     React.useEffect(() => {
          fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
               .then((response) => response.json())
               .then((json => setDados(json)));
     }, []);
     React.useEffect(() => {
          console.log('Inicializou');
     }, []);

     React.useEffect(() => {
          document.title = 'Total ' + contar;
     }, [contar]);
     return (
          <div>
               {dados && (
                    <div>
                         <h1>{dados.nome}</h1>
                         <p>R$ {dados.preco * contar}</p>
                    </div>
               )}
               <button className="bg-emerald-100  p-2 m-4" onClick={() => setContar(contar + 1)}>
                    Click: {contar}
               </button>
          </div>
     );
};

export default App;
