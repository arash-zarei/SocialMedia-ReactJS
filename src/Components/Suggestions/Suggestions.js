import React from 'react';


//Image
import prof1 from '../../images/1.jpg'
import prof2 from '../../images/2.jpg'
import prof3 from '../../images/3.jpg'
import prof4 from '../../images/4.jpg'
import prof5 from '../../images/5.jpg'
import prof6 from '../../images/6.jpg'
import prof7 from '../../images/7.jpg'
import prof8 from '../../images/8.jpg'
import prof9 from '../../images/9.jpg'
import prof10 from '../../images/10.jpg'

//CSS
import './Suggestions.css'

//Components
import SuggestionItem from './SuggestionItem';

const Suggestions = () => {
    return (
        <div className='Suggestions'>
            <SuggestionItem image={prof1} name="abbas Moradi" />
            <SuggestionItem image={prof2} name="reza bahrami" />
            <SuggestionItem image={prof3} name="amin rezaei" />
            <SuggestionItem image={prof4} name="arash gholami" />
            <SuggestionItem image={prof5} name="shevin behzad" />
            <SuggestionItem image={prof6} name="milad abbasi" />
            <SuggestionItem image={prof7} name="sara bahrami" />
            <SuggestionItem image={prof8} name="ali abbaszade" />
            <SuggestionItem image={prof9} name="ziba Moradi" />
            <SuggestionItem image={prof10} name="abbas boazar" />
        </div>
    );
};

export default Suggestions;