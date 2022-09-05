import React from 'react';

import styled from 'styled-components';

//Icon
import * as Unicons from "@iconscout/react-unicons";

//CSS
import './SavedItem.css'

const SavedItem = ({url, type, view, comments}) => {

    const BgSavedImage = styled.div`
    width: 170px;
    height: 170px;
    background-size: cover;
    background-image: ${(props) => `url(${props.image})`};
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    `

    return (
        <BgSavedImage className='item' image={url}>
            <span>{type}</span>
            <div className="status">
                <Unicons.UilPlay /> <p>{view}</p>
                <Unicons.UilComment /> <p>{comments}</p>
            </div>
        </BgSavedImage>
    );
};

export default SavedItem;