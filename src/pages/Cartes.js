import React, { useState } from 'react';
import Logo from '../comp/Logo';
import Navigation from '../comp/Navigation';

const continents = [
    { name: 'Europe', link: 'https://www.geoguessr.com/seterra/fr/vgp/3007', hard: '' },
    { name: 'Amérique du Nord', link: 'https://www.geoguessr.com/seterra/fr/vgp/3015', hard: '' },
    { name: 'Amérique du Sud', link: 'https://www.geoguessr.com/seterra/fr/vgp/3016', hard: '' },
    { name: 'Afrique', link: 'https://www.geoguessr.com/fr/vgp/3163', hard: '' },
    { name: 'Asie', link: 'https://www.geoguessr.com/seterra/fr/vgp/3167', hard: '' },
    { name: 'Océanie', link: 'https://www.geoguessr.com/seterra/fr/vgp/3341', hard: 'https://www.geoguessr.com/seterra/fr/vgp/3355?c=7HHQW' },
    { name: 'Caraibes', link: 'https://www.geoguessr.com/seterra/fr/vgp/3342', hard: 'https://www.geoguessr.com/seterra/fr/vgp/3355?c=8RZ93' },
    { name: 'Monde', link: 'https://www.geoguessr.com/seterra/fr/vgp/3356', hard: 'https://www.geoguessr.com/seterra/fr/vgp/3355' }
];
const states = [
    { name: 'États du Ouest', link: 'https://www.geoguessr.com/fr/vgp/3139'},
    { name: 'États du Midwest', link: 'https://www.geoguessr.com/fr/vgp/3138'},
    { name: 'États du Nord-Est', link: 'https://www.geoguessr.com/fr/vgp/3141'},
    { name: 'États du Sud', link: 'https://www.geoguessr.com/fr/vgp/3140'},
    { name: 'USA', link: 'https://www.geoguessr.com/fr/vgp/3003' }
];

const ContinentButtons = () => {

    const [selectedContinent, setSelectedContinent] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [mode, setMode] = useState(1);

    const handleRandomClickContinents = () => {
        const randomIndex = Math.floor(Math.random() * continents.length);
        const selected = { ...continents[randomIndex] };

        if (mode === 2 && selected.hard) {selected.link = selected.hard;}
        setSelectedContinent(selected);
    }

    const handleRandomClickStates = () => {
        const randomIndex = Math.floor(Math.random() * states.length);
        const selected = { ...states[randomIndex] };
        setSelectedState(selected);
    }
    

    return (
        <div className='continents'>

            <Logo />
            <Navigation />

            <ul className="radio-container">
                <li>
                    {<button className={(mode == 1) ? "modeEasy" : "modeHard"} onClick={() => setMode((mode == 1) ? 2 : 1)}>Mode Difficile</button>}
                </li>
            </ul>

            <h2>Cliquez sur un continent pour ouvrir la carte sur Seterra</h2>

            <div className='continents-div'>
                {continents.map((continent) => (
                    <a 
                        key={continent.name} 
                        href={mode === 1 ? continent.link : (continent.hard || continent.link)} 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <button className={(mode === 2 && continent.hard) ? 'red' : ''}>
                            {continent.name}
                        </button>
                    </a>
                ))}
                <a href={selectedContinent?.link} target="_blank" rel="noopener noreferrer">
                    <button className="blue" onClick={handleRandomClickContinents}>Continent aléatoire</button>
                </a>
            </div>

        <h2>Cliquez sur un Etat pour ouvrir la carte sur Seterra</h2>

        <div className='continents-div'>
            {states.map((state) => (
                <a 
                    key={state.name} 
                    href={state.link }
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <button className=''>
                        {state.name}
                    </button>
                </a>
            ))}
            <a href={selectedState?.link} target="_blank" rel="noopener noreferrer">
                <button className="blue" onClick={handleRandomClickStates}>États aléatoire</button>
            </a>
        </div>

        <h2>Cliquez pour ouvrir la carte sur Seterra</h2>

        <div className='continents-div'>
            <a key="departements" href="https://www.geoguessr.com/fr/vgp/3246" target="_blank" rel="noopener noreferrer">
                <button>Départements</button>
            </a>
            <a key="regions" href="https://www.geoguessr.com/fr/vgp/3331" target="_blank" rel="noopener noreferrer">
                <button>Régions</button>
            </a>
        </div>

        </div>
    );
}

export default ContinentButtons;