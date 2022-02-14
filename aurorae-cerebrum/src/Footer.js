import {ReactComponent as Twitter } from './assets/twitter-logo.svg';
import { ReactComponent as Discord } from './assets/discord-logo.svg';
import { ReactComponent as Github } from './assets/github-logo.svg';
import { ReactComponent as Medium } from './assets/medium-logo.svg';
import { ReactComponent as Linkedin } from './assets/linkedin-logo.svg';

function Footer(props) {
    return (
        <nav className="static bottom-0 h-16  bg-white pb-4 border-t border-dark border-opacity-10">  
            <p className="font-anaheim justify-self-start p-4 pl-8 text-xl sm:text-2xl text-dark">aurorae cerebrum</p>
            
            
            
            
            
            
            
            
            
            <ul className="pl-8 pr-8 p-4 flex flex-col-reverse sm:flex-row items-left sm:items-center justify-between">
                <li><p className="font-anaheim text-xs sm:text-base text-opacity-50 text-dark">©2022 aurorae cerebrum. all rights reserved</p></li>
                <li className="pb-4 sm:pb-1">
                    <ul className="flex flex space-x-4">
                        <li><a href=''><Twitter/></a></li>
                        <li><a href=''><Discord/></a></li>
                        <li><a href='https://github.com/Aurorae-Cerebrum'><Github/></a></li>
                        <li><a href=''><Medium/></a></li>
                        <li><a href=''><Linkedin/></a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
/**<li><p className="font-anaheim text-base text-opacity-50 text-dark"><span>&#60;</span>3 from mtl</p></li> */

export default Footer;