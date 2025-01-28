import React from 'react';
const ButtonModal = ({ setModal }) => {
     return (
          <button className="bg-emerald-100 p-2 " onClick={() => setModal(true)}>
               Abrir
          </button>
     );
};
export default ButtonModal;
