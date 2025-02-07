import React from 'react';
const Input = ({ pergunta, id }) => {
     console.log(id)
     return (
          <>
               <fieldset key={id}>
                    <legend>{pergunta}</legend>
               </fieldset>
          </>
     );
};
export default Input;
