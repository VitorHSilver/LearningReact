import React from 'react';

const Input = ({ name, id, type, required, setInput, value }) => {
     const handleChange = ({ target }) => {
          setInput(target.value);
     };
     return (
          <div className="grid grid-cols-[60px_300px] mt-4 ml-4">
               <label className="text-gray-300 font-semibold" htmlFor={id}>
                    {name}
               </label>
               <input
                    type={type}
                    id={id}
                    name={id}
                    required={required}
                    value={value}
                    onChange={handleChange}
                    className="border border-gray-300 ml-1 pl-1 py-1 rounded text-gray-400/80"
               />
          </div>
     );
};
export default Input;
