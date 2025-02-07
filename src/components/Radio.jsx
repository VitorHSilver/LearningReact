import React from 'react';

const Radio = ({ options, value, setRadio, ...props }) => {
     return (
          <>
               {options.map((option) => (
                    <label key={option}>
                         <input
                              type="radio"
                              value={option}
                              checked={value === option}
                              onChange={({ target }) => setRadio(target.value)}
                              {...props}
                         />
                         {option}
                    </label>
               ))}
          </>
     );
};
export default Radio;
