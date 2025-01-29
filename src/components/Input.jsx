import React from 'react';

const Input = ({ label, type, id, ...props }) => {
     return (
          <div className="font-normal text-2xl mt-4 italic flex  flex-col ">
               <label id={id} htmlFor="">
                    {label}
               </label>
               <input id={id} type={type} {...props} className="border-2  mt-2 outline outline-blue-900  " />
          </div>
     );
};

export default Input;
