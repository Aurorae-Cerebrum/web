import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';



function App() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar className=""></Navbar>
      <main className="mb-auto"></main>
      <Footer></Footer>
    </div>     
  );
}
  

export default App;
