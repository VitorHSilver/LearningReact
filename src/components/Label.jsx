import React from 'react';
const Label = ({ options, id }) => {
     return (
          <>
               {options.map((option) => (
                    <div key={id}>
                         <label htmlFor={option}>
                              <p className="text-3xl mb-4">{option}</p>
                         </label>
                    </div>
               ))}
          </>
     );
};
export default Label;
