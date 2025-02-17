import React from 'react';
import './App.css';
// import Contato from './components/Contato';
const Contato = React.lazy(() => import('./components/Contato'));

const App = () => {
     const [ativo, setAtivo] = React.useState(false);
     return (
          <div>
               {ativo && (
                    <React.Suspense fallback={<div>Carregnado</div>}>
                         <Contato />
                    </React.Suspense>
               )}
               <button onClick={() => setAtivo(true)}>Ativar</button>
          </div>
     );
};

export default App;
