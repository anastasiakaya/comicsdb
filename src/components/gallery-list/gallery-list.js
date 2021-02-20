import React from 'react';
import GalleryListItem from '../gallery-list-item';

const GalleryList = ({ itemsList, row, onItemSelected}) => {

    return (
        <div className="row gallery-row">
        
            <div className="span12 gallery">
                
                <div className="row clearfix no-margin">
                    <ul className="gallery-post-grid holder">

                        {
                            itemsList.map((item) => {
                                return (
                                    <GalleryListItem key={item.id} item={item} row={row} onItemSelected={() => onItemSelected(item.id)} />
                                );
                            })
                        }
                    
                    </ul>
                </div>
            </div>
           
        </div>
    );
};

export default GalleryList;