import React from 'react';

//Components
import VideoItem from './VideosItem';

//Image
import image1 from '../../images/1.jpg'
import image2 from '../../images/2.jpg'
import image3 from '../../images/3.jpg'
import image4 from '../../images/4.jpg'
import image5 from '../../images/5.jpg'
import image6 from '../../images/6.jpg'
import image7 from '../../images/7.jpg'
import image8 from '../../images/8.jpg'
import image9 from '../../images/9.jpg'
import image10 from '../../images/10.jpg'
import image11 from '../../images/11.jpg'
import image12 from '../../images/12.jpg'
import image13 from '../../images/feed-1.jpg'
import image14 from '../../images/feed-3.jpg'
import image15 from '../../images/feed-4.jpg'

//CSS
import './Videos.css'

const Videos = () => {
    return (
        <div className='Videos'>
            <VideoItem url={image8} />
            <VideoItem url={image11}/>
            <VideoItem url={image3} />
            <VideoItem url={image13}/>
            <VideoItem url={image9} />
            <VideoItem url={image10}/>
            <VideoItem url={image14}/>
            <VideoItem url={image4} />
            <VideoItem url={image5} />
            <VideoItem url={image6} />
            <VideoItem url={image7} />
            <VideoItem url={image15}/>
            <VideoItem url={image1} />
            <VideoItem url={image2} />
            <VideoItem url={image12}/>
        </div>
    );
};

export default Videos;