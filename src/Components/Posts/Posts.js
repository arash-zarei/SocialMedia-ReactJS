import React,{ useState } from 'react';

//Image
import image1 from "../../images/8.jpg";
import image2 from "../../images/9.jpg";
import image3 from "../../images/10.jpg";
import image4 from "../../images/11.jpg";
import image10 from "../../images/12.jpg";
import image5 from "../../images/1.jpg";
import image6 from "../../images/7.jpg";
import image7 from "../../images/3.jpg";
import image8 from "../../images/4.jpg";
import image9 from "../../images/2.jpg";
import fedd1 from '../../images/feed-1.jpg'
import fedd2 from '../../images/feed-2.jpg'
import fedd3 from '../../images/feed-3.jpg'
import fedd4 from '../../images/feed-4.jpg'
import fedd5 from '../../images/feed-5.jpg'
import fedd6 from '../../images/feed-6.jpg'
import fedd7 from '../../images/feed-7.jpg'


//Components
import Story from './Story';
import Feed from './Feed';

//CSS
import './Posts.css'

const Posts = () => {
    return (
        <div className='Posts'>
            <div className="storys">
                <Story src={image1} name="Sina" srcProfile={image5} />
                <Story src={image2} name="Sara" srcProfile={image6} />
                <Story src={image3} name="Sirous" srcProfile={image7} />
                <Story src={image4} name="Hamed" srcProfile={image8} />
                <Story src={image10} name="Milad" srcProfile={image9} />
            </div>
            <div className="feeds">
                <Feed name="arash" profile={image1} image={fedd1} like1={image10} like2={image6} like3={image8} />
                <Feed name="saba" profile={image2} image={fedd2} like1={image10} like2={image6} like3={image8} />
                <Feed name="milad" profile={image3} image={fedd3} like1={image10} like2={image6} like3={image8} />
                <Feed name="abbas" profile={image4} image={fedd4} like1={image10} like2={image6} like3={image8} />
                <Feed name="hamid" profile={image5} image={fedd5} like1={image10} like2={image6} like3={image8} />
                <Feed name="hamed" profile={image6} image={fedd6} like1={image10} like2={image6} like3={image8} />
                <Feed name="hossein" profile={image7} image={fedd7} like1={image10} like2={image6} like3={image8} />
            </div>
        </div>
    );
};

export default Posts;