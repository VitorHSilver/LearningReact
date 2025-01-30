import React from 'react';

const Button = ({ name, styleClass, onClick }) => {
     return (
          <div>
               <button
                    className={`text-black p-2 m-2 cursor-pointer ${
                         styleClass === 'blue'
                              ? 'bg-blue-200 '
                              : styleClass === 'green'
                              ? 'bg-emerald-500'
                              : 'bg-red-500'
                    }`}
                    onClick={onClick}
               >
                    {name}
               </button>
          </div>
     );
};
export default Button;
