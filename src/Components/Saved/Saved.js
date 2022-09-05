import React from 'react';

//Icon
import * as Unicons from "@iconscout/react-unicons";

//Components
import SavedItem from './SavedItem';

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
import './Saved.css'

const Saved = () => {
    return (
        <div className='Saved'>
            <SavedItem url={image1} type={<Unicons.UilVideo />} view="2K" comments="145" />
            <SavedItem url={image2} type={<Unicons.UilCamera />} view="75" comments="15" />
            <SavedItem url={image3} type={<Unicons.UilVideo />} view="1.3K" comments="587" />
            <SavedItem url={image4} type={<Unicons.UilCamera />} view="96K" comments="127" />
            <SavedItem url={image5} type={<Unicons.UilVideo />} view="174K" comments="369" />
            <SavedItem url={image6} type={<Unicons.UilCamera />} view="20K" comments="842" />
            <SavedItem url={image7} type={<Unicons.UilVideo />} view="178K" comments="18" />
            <SavedItem url={image8} type={<Unicons.UilCamera />} view="368K" comments="173" />
            <SavedItem url={image9} type={<Unicons.UilVideo />} view="23K" comments="223" />
            <SavedItem url={image10} type={<Unicons.UilCamera />} view="3K" comments="225" />
            <SavedItem url={image11} type={<Unicons.UilVideo />} view="27K" comments="22" />
            <SavedItem url={image12} type={<Unicons.UilVideo />} view="69K" comments="93" />
            <SavedItem url={image13} type={<Unicons.UilCamera />} view="100K" comments="274" />
            <SavedItem url={image14} type={<Unicons.UilVideo />} view="248K" comments="168" />
            <SavedItem url={image15} type={<Unicons.UilCamera />} view="968K" comments="896" />
        </div>
    );
};

export default Saved;