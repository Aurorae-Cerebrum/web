import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';



function App() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar></Navbar>
      <main className="mb-auto">Content</main>
      <Footer></Footer>
    </div>     
  );
}
  

export default App;

/*
<h1 className="text-3xl font-anaheim underline text-dark">
      Hello world!
      </h1>
      <h2 className='font-anaheim text-dark'>
        Aurorae Cerebrum
      </h2>
*/