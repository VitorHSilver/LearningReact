import React from 'react';

const Input = ({ name, id, type, onChange, value, onBlur, placeholder, error }) => {
     return (
          <div className="grid grid-cols-[60px_300px] mt-4 ml-4 items-center">
               <label className="text-gray-300 font-semibold" htmlFor={id}>
                    {name}
               </label>
               <input
                    id={id}
                    name={id}
                    onChange={onChange}
                    placeholder={placeholder}
                    onBlur={onBlur}
                    type={type}
                    value={value}
                    className="border border-gray-300 ml-8 pl-1 py-1 rounded text-gray-400/80"
               />
               <div className='col-span-2'>

               {error && <p>{error}</p>}
               </div>
          </div>
     );
};
export default Input;
