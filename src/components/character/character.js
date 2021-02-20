import React from 'react';
import './character.css';

const Character = ({ character }) => {

    const replaceNewLineToComma = (text) => {
        return text.replace(/\n/g,", ");
    }

    const replaceArrayToString = (arr) => {
        return arr.map((item, i) => i > 0 ? `, ${item.name}` : item.name);
    }

    const wordForm = (count, singular, plural) => {
        return count < 2 ? singular : plural;
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

    let desc = character.description;
    if (desc) {
        desc = desc.replace(/<a[^>]*>?/gm, '');
        desc = desc.replace(/<\/a[^>]*>?/gm, '');
        desc = desc.replace(/<noscript[^>]*>?/gm, '');
        desc = desc.replace(/<\/noscript[^>]*>?/gm, '');
    } else {
        desc = `No description`;
    }

    let aliases = character.aliases;
    if (aliases) {
        aliases = replaceNewLineToComma(aliases);
    }

    let creators = character.creators;
    if (creators) {
        creators = replaceArrayToString(creators);
    }
   

    let gender = 'Unknown';
    if (character.gender === 1) {
        gender = 'Male';
    } else if (character.gender === 2) {
        gender = 'Female';
    }

    let firstAppearedIssue = null;
    if (character.firstAppearedIssue) {
        firstAppearedIssue = `${character.firstAppearedIssue.volume.name} #${character.firstAppearedIssue.issueNumber}, "${character.firstAppearedIssue.name}"`;
    }
  
    let firstAppearanceDate = character.firstAppearedIssue.storeDate;
    if (firstAppearanceDate) {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        firstAppearanceDate = new Date(firstAppearanceDate);
        firstAppearanceDate= firstAppearanceDate.toLocaleDateString('en-US', options);
    }
   
    let countOfIssueAppearances = character.countOfIssueAppearances;
    if (countOfIssueAppearances === 0 || countOfIssueAppearances === null) {
        countOfIssueAppearances = null;
    } else {
        countOfIssueAppearances = `${countOfIssueAppearances} ${wordForm(countOfIssueAppearances, 'issue', 'issues')}`;
    }

    let powers = character.powers;
    if (powers.length) {
        powers = replaceArrayToString(powers);
    }

    const teams = createLi(character.teams);
    const friends = createLi(character.teamFriends);
    const enemies = createLi(character.teamEnemies);

    return (
    <div className="row character">
        
        <div className="span4 sidebar page-sidebar">
            <h3 className="title-bg">{character.name}</h3>
            <img src={character.image} className="align-left thumbnail" alt={character.name} />

            <div className="divider"></div>

            <ul className="project-info">
                {createLiElement('Real Name', character.realName)}
                {createLiElement('Aliases', aliases)}
                {createLiElement('Publisher', character.publisher.name)}
                {createLiElement('Creators', creators)}
                {createLiElement('Gender', gender)}
                {createLiElement('Character Type', character.origin)}
                {createLiElement('Birthday', character.birthDate)}
                {createLiElement('Powers', powers)}
                {createLiElement('First Appearance', firstAppearedIssue)}
                {createLiElement('First Appearance Date', firstAppearanceDate)}
                {createLiElement('Appears in', countOfIssueAppearances)}
            </ul>

            <h5 className="title-bg">Teams Info</h5>
            <ul className="nav nav-tabs">
                <li className="active"><a href="#teams" data-toggle="tab">Teams</a></li>
                <li><a href="#friends" data-toggle="tab">Friends </a></li>
                <li><a href="#enemies" data-toggle="tab">Enemies</a></li>
            </ul>
            <div className="tab-content">
                <div className="tab-pane active" id="teams">
                    <ul>
                        {teams ? teams : `Characer doesn't have a team`}
                    </ul>
                </div>
                <div className="tab-pane" id="friends">
                    <ul>
                        {friends? friends : `Characer doesn't have a friends team`}
                    </ul>
                </div>
                <div className="tab-pane" id="enemies">
                    <ul>
                        {enemies ? enemies : `Characer doesn't have a enemies team`}
                    </ul>
                </div>
            </div>

        </div>

        <div className="span8">
            <div className="character__content" dangerouslySetInnerHTML={{__html: desc}} />
        </div> 

    </div>
    );
};

export default Character;