import './Navbar.css';
import { ReactComponent as French } from './assets/french-flag.svg';
import { ReactComponent as Logo } from './logo.svg';

//sticky top-0 border-b border-b-2 border-white border-opacity-100 border-dotted
function Navbar(props) {
    return (
        
            <nav className="h-16 bg-black pb-4">  
                <ul className="pl-8 pr-8 p-3 flex justify-between font-anaheim items-center text-white">
                    <li><ul className="flex space-x-2 justify-self-start items-center">
                            <li><Logo></Logo></li>
                            <li><p className="text-2xl invisible sm:visible">auroraeCerebrum</p></li>
                        </ul>
                        </li>
                    <li>
                        <ul className="flex space-x-8 text-lg sm:text-xl">
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

export default Navbar;
