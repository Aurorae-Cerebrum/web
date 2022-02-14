import {ReactComponent as Twitter } from './assets/twitter-logo.svg';
import { ReactComponent as Discord } from './assets/discord-logo.svg';
import { ReactComponent as Github } from './assets/github-logo.svg';
import { ReactComponent as Medium } from './assets/medium-logo.svg';
import { ReactComponent as Linkedin } from './assets/linkedin-logo.svg';

function Footer(props) {
    return (
        <nav className="text-dark font-anaheim static bottom-0 h-16  bg-white pb-4">  
            <p className="justify-self-start p-4 pl-8 text-2xl">aurorae cerebrum</p>
            <div className="pl-8 pr-8 p-4 flex grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                
                <div>
                    <p className="text-lg sm:text-xl pb-2">à propos</p>
                    <div className="border-t border-dark border-opacity-10">
                        <p className="text-base sm:text-lg text-opacity-50 text-dark pt-2"><a href=''>équipe</a></p>
                        <p className="text-base sm:text-lg text-opacity-50 text-dark"><a href=''>infolettre</a></p>
                        <p className="text-base sm:text-lg text-opacity-50 text-dark"><a href=''>carrière</a></p>
                    </div>
                </div>
                <div>
                    <p className="text-lg sm:text-xl pb-2">produit</p>
                    <div className="border-t border-dark border-opacity-10">
                        <p className="text-base sm:text-lg text-opacity-50 text-dark pt-2"><a href=''>services</a></p>
                        <p className="text-base sm:text-lg text-opacity-50 text-dark"><a href=''>plateforme</a></p>
                    </div>
                </div>                
                <div>
                    <p className="text-lg sm:text-xl pb-2">solutions</p>
                    <div className="text-base sm:text-lg border-t border-dark border-opacity-10">
                        <p className="text-base sm:text-lg text-opacity-50 text-dark pt-2"><a href=''>prix</a></p>
                        <p className="text-base sm:text-lg text-opacity-50 text-dark"><a href=''>partenaires</a></p>
                    </div>
                </div>    
            </div>

            <ul className="pl-8 pr-8 p-4 flex flex-col-reverse sm:flex-row items-left sm:items-center justify-between">
                <li><p className="text-xs sm:text-base text-opacity-50 text-dark">©2022 aurorae cerebrum. all rights reserved</p></li>
                <li className="pb-4 sm:pb-1">
                    <ul className="flex space-x-4">
                        <li><a href=''><Twitter/></a></li>
                        <li><a href=''><Discord/></a></li>
                        <li><a href='https://github.com/Aurorae-Cerebrum'><Github/></a></li>
                        <li><a href=''><Medium/></a></li>
                        <li><a href='https://www.linkedin.com/company/auror%C3%A6-cerebrum/about/'><Linkedin/></a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default Footer;


<<<<<<< HEAD
//hello
=======

//lg:grid-cols-4
>>>>>>> 38f6160a983ef7103459279f6512a3dac0113cd5
