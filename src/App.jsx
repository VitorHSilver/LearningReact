import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Header from './components/Header';
import Contato from './components/Contato';
import Product from './components/Product';

// Utilize a API abaixo para puxar a lista de produto
// https://ranekapi.origamid.dev/json/api/produto
// Cada produto possui o id, o mesmo pode ser passado na api para retornar os dados desse produto específico
// https://ranekapi.origamid.dev/json/api/produto/notebook

const App = () => {
     return (
          <BrowserRouter>
               <div className="w-[500px] m-auto">
                    <Header />
                    <Routes>
                         <Route path="/" element={<Home />} />
                         <Route path="/contato" element={<Contato />} />
                         <Route path="/produto/:id" element={<Product />} />
                         <Route path="*" element={<NotFound />} />
                    </Routes>
               </div>
          </BrowserRouter>
     );
};

export default App;
