import { ReactComponent as Gradiant } from "./assets/background-light.svg";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as LineOne } from "./assets/line-one.svg";
import { ReactComponent as Background } from "./assets/image-background.svg";
import { ReactComponent as Graph } from "./assets/graph.svg";
import Scramble from 'react-scramble';

function Intro() {
    return (
        <div className="w-full font-anaheim text-white bg-black grid place-items-center">
           
            {/*
             <div className="bg-black">
            <Background className="object-fill w-full h-96"></Background>
            </div>
            <div className="bg-white w-full h-96 text-center grid place-items-center">
                <p className="text-black w-1/2 text-lg sm:text-xl text-center break-words">aurorae cerebrum est un 
écosystème juridique qui a 
pour mission d’optimiser la 
recherche juridique des 
avocats qui œuvrent dans les 
différents domaines du droit 
de la santé au Québec.
                </p>
            </div>
            <div className="pt-10 grid place-items-center"> 
                <p className="w-1/2 text-lg sm:text-xl text-center break-words">apportez de la valeur à votre recherche juridique avec notre plateforme spécialisée en droit de la santé.</p>
            </div>
            */}
            {/*
            <div className="bg-white w-full h-96 text-center grid place-items-center">
                <p className="text-black w-1/2 text-xl sm:text-2xl text-center break-words">aurorae cerebrum est un 
                    écosystème juridique qui a 
                    pour mission d’optimiser la 
                    recherche juridique des 
                    avocats qui œuvrent dans les 
                    différents domaines du droit 
                    de la santé au Québec.
                </p>
            </div>
            */}
            {/*
            <div className="pb-20">
                <Background className="object-fill w-full h-96 saturate-50"></Background>
                
            </div>
            */}

            <section className="w-full h-screen top-0 pb-20">
                <img src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" class="object-cover w-full h-full"/>
            </section>
            
            
            
            <Scramble
                noBreakSpace
                speed="medium"
                mouseEnterTrigger="restart"
                preScramble
                autoStart
                text="apportez de la valeur à votre"
                steps={[
                {
                    action: '-',
                    type: 'forward',
                },
                ]}
            className="w-full text-xl sm:text-2xl text-center break-words"/>
            <Scramble
                noBreakSpace
                speed="medium"
                mouseEnterTrigger="restart"
                preScramble
                autoStart
                text="recherche juridique avec notre plateforme "
                steps={[
                {
                    action: '-',
                    type: 'forward',
                },
                ]}
            className="w-full text-xl sm:text-2xl text-center break-words"/>
            <Scramble
                noBreakSpace
                speed="medium"
                mouseEnterTrigger="restart"
                preScramble
                autoStart
                text="spécialisée en droit de la santé."
                steps={[
                {
                    action: '-',
                    type: 'forward',
                },
                ]}
            className="w-full text-xl sm:text-2xl text-center break-words"/>


            <div class="max-w-3xl p-8 pt-20 text-lg sm:text-xl mx-auto space-y-10">


                <section className="md:flex md:justify-between items-start">
                    <div className="md:w-1/2 sticky top-0 md:top-20 py-4 bg-black">
                        <h2 className="font-extrabold text-2xl">
                            1.1.0 ~ recherche sémantique
                        </h2>
                    </div>

                    <div className="md:w-1/2 text-justify leading-snug space-y-5 first-letter:text-4xl first-letter:font-serif first-letter:font-bold">
                        <p className="first-letter: ">Nous développons un <span className="">moteur de recherche complet,</span> destiné au droit de la santé qui utilise la puissance de l’intelligence artificielle afin d’amener la recherche juridique.</p>
                        <p className="text-center pt-6">***</p>
                    </div>
                </section>
    
                <section className=" md:flex md:justify-between items-start">
                    <div className="md:w-1/2 sticky top-0 md:top-20 py-4 bg-black">
                        <h2 className="font-extrabold text-2xl">
                            1.1.1 ~ visualisation
                        </h2>
                    </div>

                    <div className="md:w-1/2 text-justify leading-snug space-y-5 first-letter:text-4xl first-letter:font-serif first-letter:font-bold">
                        <p>Nous offrons une visualisation de connaissances juridiques augmentée grâce aux <span className="">graphes de connaissance virtuelle</span>.</p>
                        <p className="text-center pt-6">***</p>
                    </div>
                </section>
    
                <section className=" md:flex md:justify-between items-start">
                    <div className="md:w-1/2 sticky top-0 md:top-20 py-4 bg-black">
                        <h2 className="font-extrabold text-2xl">
                            1.2.0 ~ problèmatique
                        </h2>
                    </div>

                    <div className="md:w-1/2 text-justify leading-snug space-y-5 first-letter:text-4xl first-letter:font-serif first-letter:font-bold">
                        <p>Les moteurs de recherche juridique <span className="">conventionnels</span> ne sont <span class="">pas intuitifs</span> et il est facile de tomber sur plusieurs documents qui ne sont <span class="">pas cohérents</span> avec ce que l’on cherche. </p>
                        <p>avoir une vue d’ensemble claire des documents juridiques que l’on accumule est <span className="">infaisable avec ces outils</span>.</p>   
                    </div>
                </section>
            </div>
            
        
            <p className="pt-20">.</p>
            <p>.</p>
            <p></p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <Graph></Graph>
            <p>.</p>
            <p>.</p>
            <p>.</p>
            <p className="pb-20">.</p>


            {/*
            <div className="max-w-3xl sm:w-2/3 flex bg-black flex-col-reverse sm:flex-row items-left sm:items-center justify-between">
                <label>    
                    <input className="placeholder-white placeholder-opacity-50 w-56 focus:outline-none border-b border-white bg-black" type="text" placeholder="* nom prénom" autoComplete="off"/>
                </label>
                <label>    
                    <input className="placeholder-white placeholder-opacity-50 w-56 focus:outline-none border-b border-white bg-black" type="email" placeholder="* courriel" autoComplete="off"/>
                </label>
            </div>
            */}





            <form className="w-2/3 flex pb-10 pt-20 justify-between">
                <label>    
                    <input className="placeholder-white placeholder-opacity-50 w-56 focus:outline-none border-b border-white bg-black" type="text" placeholder="* nom prénom" autoComplete="off"/>
                </label>
                <label>    
                    <input className="placeholder-white placeholder-opacity-50 w-56 focus:outline-none border-b border-white bg-black" type="email" placeholder="* courriel" autoComplete="off"/>
                </label>
            </form>
            <form className="w-2/3 flex pb-20 pt-10 justify-between">
                <label>    
                    <input className="placeholder-white placeholder-opacity-50 w-56 focus:outline-none border-b border-white bg-black" type="text" placeholder="* message" autoComplete="off"/>
                </label>
                <label>    
                    <button className="">envoyer →</button>
                </label>
            </form>
        </div>                      
    );
}
    

export default Intro;

