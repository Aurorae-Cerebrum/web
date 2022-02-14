import './Navbar.css';
import { ReactComponent as French } from './assets/french-flag.svg';

function Navbar(props) {
    return (
        <nav className="h-16  bg-white pb-4 border-b border-dark border-opacity-10">  
            <ul className="pl-8 pr-8 p-4 flex justify-between font-anaheim items-center text-dark">
                <li><p className="text-xl sm:text-2xl">aurorae cerebrum</p></li>
                <li>
                    <ul className="flex space-x-8 text-base sm:text-xl">
                        <li><a href=''>contactez-nous</a></li>
                        <li><a href=''>
                            <ul className="flex space-x-2 items-center">
                                <li>FR</li>
                                <li><French/></li>
                            </ul>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
/*
function Navitem(props) {
  return (
    
  );
 

}
<ul className="max-w-full h-full flex justify-end">{props.children}</ul>
*/
export default Navbar;

/*


*/