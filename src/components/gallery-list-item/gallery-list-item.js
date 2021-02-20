import React from 'react';


import imgFemale from '../../img/female-character2.png';
import imgMale from '../../img/male-character2.png';

const GalleryListItem = ({item, row, onItemSelected}) => {

    let itemRowClass = "";
    let imgRowClass = "";
    const imgRowClassAddit = " hidden-phone hidden-tablet";
    const itemRowClassAddit = " gallery-item";

    row = '' + row;

    switch (row) {
        case '3':
            itemRowClass = "span4";
            imgRowClass = "gallery-hover-3col";
            break;
        case '6':
            itemRowClass = "span2";
            imgRowClass = "gallery-hover-6col";
            break;
        default:
            itemRowClass = "span3";
            imgRowClass = "gallery-hover-4col";
    }

    itemRowClass = itemRowClass + itemRowClassAddit;
    imgRowClass = imgRowClass + imgRowClassAddit;

    let bgImg = item.image;
    if (!bgImg || bgImg === 'https://comicvine.gamespot.com/api/image/original/6373148-blank.png') {
        bgImg = item.gender === '2' ? imgFemale : imgMale;
    }

    const bgUrlStyle = {
            background: 'url('+ bgImg + ')'
        };

    return (
        <li key={item.id} className={itemRowClass} data-id={item.id} data-type="character">
            <span className={imgRowClass}>
                <span className="gallery-icons">
                    <a href={bgImg} className="item-zoom-link lightbox" title={item.description} data-rel="prettyPhoto"></a>
                    <span  onClick={onItemSelected} className="item-details-link"></span>
                </span>
            </span>
            <a className="gallery-item-img" href="/characters/12" style={bgUrlStyle} ></a>
            <span className="project-details"><span className="project-details__link"  onClick={onItemSelected}>{item.name}</span><br />{item.summary}</span>
        </li>
    );
};

export default GalleryListItem;