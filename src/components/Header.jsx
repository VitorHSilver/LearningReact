import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from './Button';
const Header = () => {
     return (
          <nav className="mt-24 flex gap-4">
               <NavLink to="/" end>
                    <Button name="Produtos" />
               </NavLink>
               <NavLink to="contato">
                    <Button name="Contato" />{' '}
               </NavLink>
          </nav>
     );
};
export default Header;
