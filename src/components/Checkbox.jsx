import React from 'react';
const Checkbox = ({ value, options, setSize }) => {
     const handleCheck = ({ target }) => {
          if (target.checked) {
               setSize([...value, target.value]);
          } else {
               setSize(value.filter((item) => item !== target.value));
          }
     };
     return (
          <div className="flex gap-4 ml-4">
               {options.map((option) => (
                    <label key={option}>
                         <input
                              type="checkbox"
                              onChange={handleCheck}
                              value={option}
                              checked={value.includes(option)}
                         />
                         {option}
                    </label>
               ))}
          </div>
     );
};
export default Checkbox;
