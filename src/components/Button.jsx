import React from 'react';

const Button = ({ name }) => {
     return (
          <div className="flex justify-end mt-2">
               <button className="text-2xl bg-gray-400 uppercase cursor-pointer p-2 rounded-md">{name}</button>
          </div>
     );
};

export default Button;
