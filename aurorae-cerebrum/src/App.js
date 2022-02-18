import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Intro from './Intro';


function App() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar></Navbar>
      <Intro></Intro>
      
      <Footer></Footer>
    </div>     
  );
}
  

export default App;
