import React,{ useContext, useState } from 'react';

import { Outlet } from 'react-router-dom';

//Icon
import * as Unicons from "@iconscout/react-unicons";

//CSS
import './Home.css'

//Components
import NavBar from '../NavBar/NavBar';
import NavBarMenu from '../NavBarMenu/NavBarMenu';
import Messages from '../Messages/Messages';

//Contexts
import { ChangeModeContext } from '../../Contexts/ChangeModeContextProvider';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isOpenMessage, setIsOpenMessage] = useState(false)

    const {mode, changed} = useContext(ChangeModeContext)

    const openHandler = () =>{
        setIsOpen(!isOpen)
    }

    const openMessageHandler = () =>{
        setIsOpenMessage(!isOpenMessage)
    }
    
    return (
        <div id={mode} className="Home">
            <NavBar />
            <main className='container content'>
                <div className={`left ${isOpen ? "showMenu" : ''}`}><NavBarMenu close={() => setIsOpen(false)} /></div>
                <div className="midd">
                    <div className={`Open_close ${isOpen ? "rotate" : ''}`}>
                        <span onClick={openHandler}><Unicons.UilTimes /></span>
                        <span onClick={openHandler}><Unicons.UilPlus /></span>
                    </div>

                    <div className={`Open_close_messages ${isOpenMessage ? "rotate" : ''}`}>
                        <span onClick={openMessageHandler}><Unicons.UilTimes /></span>
                        <span onClick={openMessageHandler}><Unicons.UilEnvelope /></span>
                    </div>
                    <Outlet />
                </div>
                <div className={`right ${isOpenMessage ? "showMessage" : ''}`}><Messages /></div>
            </main>
        </div>
    );
};

export default Home;