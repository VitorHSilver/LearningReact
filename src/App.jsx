import Home from './components/Home';
import Produtos from './components/Produtos';
import Header from './components/Header';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)


function App() {
     const { pathname } = window.location;
     let Pagina;
     if (pathname === '/produtos') {
          Pagina = Produtos;
     } else {
          Pagina = Home;
     }

     return (
          <>
               <Header />
               <Pagina />
          </>
     );
}

export default App;
