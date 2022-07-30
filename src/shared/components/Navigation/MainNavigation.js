import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import MainHeader from './MainHeader';
import SideDrawer from './SideDrawer';
import './MainNavigation.css';
import Backdrop from '../UIElements/Backdrop';

const MainNavigation = props => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const handleDrawerOpen = () => {
        setOpenDrawer(true)
    }
    const handleDrawerClose = () => {
        setOpenDrawer(false)
    }
    return (
        <React.Fragment>
            {openDrawer && <Backdrop onClick={handleDrawerClose}/>
            }
            <SideDrawer show={openDrawer} onClick={handleDrawerClose}>
                <nav className="main-navigation__drawer-nav">
                    <NavLinks/>
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={handleDrawerOpen}>
                    <span />
                    <span />
                    <span />
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">YourPlaces</Link>
                </h1>
                <nav>
                    <NavLinks />
                </nav>
            </MainHeader>
        </React.Fragment>

    );
};

export default MainNavigation;
