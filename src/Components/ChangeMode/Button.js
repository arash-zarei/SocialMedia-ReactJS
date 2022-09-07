import React,{ useContext } from 'react';


//Icon
import * as Unicons from "@iconscout/react-unicons";

//Contexts
import { ChangeModeContext } from '../../Contexts/ChangeModeContextProvider';

//CSS
import './Button.css'

const Button = () => {

    const { mode, changed } = useContext(ChangeModeContext)

    return (
        <div className='ChangeMode'>
            <button className={`ChangeMode ${mode === 'light' ? 'darkColor' : 'lightColor'}`} onClick={changed}>
                {mode === 'light' ? <Unicons.UilMoon /> :  <Unicons.UilSun />}
            </button>
        </div>
    );
};

export default Button;