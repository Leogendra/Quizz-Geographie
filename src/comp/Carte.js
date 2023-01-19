import React from 'react';

const Carte = ({ pays }) => {
    return (
        <li className="card">
            <img 
                src={pays.flags.svg} 
                alt={"drapeau " + pays.translations.fra.common} 
            />
            <div className="infos">
                <h2>{pays.translations.fra.common}</h2>
                <h2>{pays.capital}</h2>
                {/* <h4>pop : {pays.population.toLocaleString()}</h4> */}
            </div>
        </li>
    );
};

export default Carte;