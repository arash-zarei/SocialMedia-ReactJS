import React from 'react';

//CSS
import './SuggestionItem.css'

const SuggestionItem = ({image, name}) => {
    return (
        <div className='SuggestionItem'>
            <img src={image} alt="profile" />
            <p>{name}</p>
            <div className='btnSuggestion'>
                <button className='Accept'>Accept</button>
                <button className='Cancel'>Cancel</button>
            </div>
        </div>
    );
};

export default SuggestionItem;