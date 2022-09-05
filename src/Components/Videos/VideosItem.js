import React from 'react';

import styled from 'styled-components';

//Icon
import * as Unicons from "@iconscout/react-unicons";

//CSS
import './VideosItem.css'

const VideoItem = ({url}) => {

    const BgVideoImage = styled.div`
    width: 170px;
    height: 170px;
    background-size: cover;
    background-image: ${(props) => `url(${props.image})`};
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    `

    return (
        <BgVideoImage className='videoItem' image={url}>
            <div className="play">
                <Unicons.UilPlay />
            </div>
        </BgVideoImage>
    );
};

export default VideoItem;