import React from 'react';
const Modal = ({ modal, setModal }) => {
     if (modal === true)
          return (
               <div>
                    Esse é um modal
                    <button
                         className="bg-red-100 p-2 ml-2 "
                         onClick={() => {
                              setModal(false);
                         }}
                    >
                         Fechar
                    </button>
               </div>
          );
     return null;
};
export default Modal;
