import React from 'react';

const Select = ({ options, setOption, value }) => {
     return (
          <select
               className="m-4 text-gray-300 border "
               value={value}
               onChange={({ target }) => setOption(target.value)}
          >
               <option value="" disabled>
                    Selecione
               </option>
               {options.map((option) => (
                    <option key={option} value={option}>
                         {option}
                    </option>
               ))}
          </select>
     );
};
export default Select;
