import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import USER_ICON from '../img/person.png';
import CHATTING_ICON from '../img/chat.png';
import SETTING_ICON from '../img/threedots.png';
import ALARM_ICON from '../img/alarm.png';
import GEAR_ICON from '../img/settings.png';

export default function SideBar() {
    return(
        <div className="sidebar">
            <div className="link">
                <Link to="/">
                    <button type="button">
                        <img src={USER_ICON} alt="user"/>    
                    </button> 
                </Link>
                <Link to="/chatting">
                    <button type="button">
                        <img src={CHATTING_ICON} alt="chatting"/>    
                    </button> 
                </Link>
                <Link to="/setting">
                    <button type="button">
                        <img src={SETTING_ICON} alt="setting"/>    
                    </button> 
                </Link>
            </div>
            <div className="noLink">
                <button type="button">
                    <img src={ALARM_ICON} alt="alarm"/>    
                </button> 
                <button type="button">
                    <img src={GEAR_ICON} alt="gear"/>    
                </button> 
            </div>
        </div>
    );
}