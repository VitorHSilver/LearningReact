import React from 'react';
const Contato = () => {
     return (
          <div className="grid grid-cols-2 gap-4">
               <div className='mt-8'>
                    <img src="/public/bird.jpg" className='w- h-96 rounded-md' alt="" />
               </div>
               <div className='mt-20'>
                    <h1 className='border-l-4 border-green-900 mb-4 pl-2'>Entre Em contato</h1>
                    <p className='border-l-4 border-green-900 mb-4 pl-2'>99999-9999</p>
                    <p className='border-l-4 border-green-900 mb-4 pl-2'>Rua ali perto</p>
               </div>
          </div>
     );
};
export default Contato;
