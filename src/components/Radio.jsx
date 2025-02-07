import React from 'react';
const Radio = ({ options, value, setValue }) => {
     return (
          <>
               {options.map((option, index) => (
                    <div className="grid" key={index}>
                         <label htmlFor={option}>
                              <input
                                   type="radio"
                                   name="list"
                                   id={option}
                                   value={option}
                                   checked={value === option}
                                   onChange={({ target }) => setValue(target.value)}
                              />
                              {option}
                         </label>
                    </div>
               ))}
          </>
     );
};
export default Radio;
