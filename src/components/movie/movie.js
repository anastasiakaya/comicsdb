import React from 'react';

const Movie = ({ movie }) => {

    const replaceArrayToString = (arr) => {
        return arr.map((item, i) => i > 0 ? `, ${item.name}` : item.name);
    }

    function numberWithSpaces(x) {
        if (x === null || x.length === 0) {
            return '';
        }
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }


    const createLiElement = (title, text) => {
        if (text === null || text.length === 0) {
            return '';
        }
        return <li><h6>{title}:</h6>{text}</li>;
    }

    const createLi = (el) => {
        if (el.length) {
            el = el.map(item => <li key={item.id}>{item.name}</li>);
        } else {
            el = null;
        }
        return el;
    }

    let desc = movie.description;
    if (desc) {
        desc = desc.replace(/<a[^>]*>?/gm, '');
        desc = desc.replace(/<\/a[^>]*>?/gm, '');
        desc = desc.replace(/<noscript[^>]*>?/gm, '');
        desc = desc.replace(/<\/noscript[^>]*>?/gm, '');
    } else {
        desc = `No description`;
    }

    let writers = movie.writers;
    if (writers) {
        writers = replaceArrayToString(writers);
    }

    let producers = movie.producers;
    if (producers) {
        producers = replaceArrayToString(producers);
    }

    let studios = movie.studios;
    if (studios) {
        studios = replaceArrayToString(studios);
    }


    const descHtml= `<h2>Summary</h2>
    ${movie.summary}<br /><br /><br />${desc}`;

    const teams = createLi(movie.teams);
    const concepts = createLi(movie.concepts);
    const characters = createLi(movie.characters);
 
    return (
    <div className="row movie">
        
        <div className="span4 sidebar page-sidebar">
            <h3 className="title-bg">{movie.name}</h3>
            <img src={movie.image} className=" thumbnail" alt={movie.name} />
            
            <div className="divider"></div>

            <ul className="project-info">
                {createLiElement('rating', movie.rating)}
                {createLiElement('runtime, min', movie.runtime)}
                {createLiElement('Writers', writers)}
                {createLiElement('producers', producers)}
                {createLiElement('budget, $', numberWithSpaces(movie.budget))}
                {createLiElement('box-officee, $', numberWithSpaces(movie.boxOfficee))}
                {createLiElement('total revenue, $', numberWithSpaces(movie.totalRevenue))}
                {createLiElement('studios', studios)}
            </ul>

            <h5 className="title-bg">Additional Info</h5>
            <ul className="nav nav-tabs">
                <li className="active"><a href="#concepts" data-toggle="tab">Concepts </a></li>
                <li><a href="#teams" data-toggle="tab">Teams</a></li>
                <li><a href="#characters" data-toggle="tab">Characters</a></li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane active" id="concepts">
                    <ul>
                        {concepts ? concepts : `Movie doesn't have a concepts`}
                    </ul>
                </div>
                <div className="tab-pane" id="teams">
                    <ul>
                        {teams ? teams : `Movie doesn't have a teams`}
                    </ul>
                </div>
                <div className="tab-pane" id="characters">
                    <ul>
                       {characters ? characters : `Movie doesn't have a characters`}
                    </ul>
                </div>
            </div>
        </div>

        <div className="span8">
            <div className="character__content">
                <div dangerouslySetInnerHTML={{__html: descHtml}} />
            </div>

        </div> 

    </div>
    );
};

export default Movie;