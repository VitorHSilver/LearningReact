// import './index.css';
import React, { useState } from 'react';
import './App.css';
import ButtonModal from './components/ButtonModal';
import Modal from './components/Modal';

const App = () => {
     const [modal, setModal] = useState(false);
     return (
          <div>
               <div>{modal ? 'modal aberto' : 'modal fechado'}</div>
               <Modal modal={modal} setModal={setModal} />
               <ButtonModal setModal={setModal} />
          </div>
     );
};

export default App;
