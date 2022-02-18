import './Navbar.css';
import { ReactComponent as French } from './assets/french-flag.svg';
import { ReactComponent as Logo } from './logo.svg';


function Navbar(props) {
    return (
        <nav className="h-16  bg-white pb-4 border-b border-dark border-opacity-10">  
            <ul className="pl-8 pr-8 p-3 flex justify-between font-anaheim items-center text-dark">
                <li><ul className="flex space-x-2 justify-self-start items-center">
                        <li><Logo></Logo></li>
                        <li><p className=" text-2xl">AuroraeCerebrum</p></li>
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
