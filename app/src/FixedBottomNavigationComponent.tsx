import {BottomNavigation, BottomNavigationAction, Divider, Paper} from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CelebrationIcon from '@mui/icons-material/Celebration';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeComponent from "./HomeComponent";
import IntroduceComponent from "./IntroduceComponent";
import EventComponent from "./EventComponent";
import MapComponent from "./MapComponent";
import AccountNumberComponent from "./AccountNumberComponent";
import PhotoGalleryComponent from "./PhotoGalleryComponent";

const FixedBottomNavigationComponent = () => {
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
        // find the element by id and scroll to it
        const element = document.getElementById(newValue);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const fixedPosition = {
        // TODO: 나중에 useRef 등을 이용해서 scrollTop일 경우에는 fixed 안되게끔 개선
        position: 'fixed',
        bottom: 0, left: 0, right: 0,
        zIndex: '9',
    }

    return (
        <>
            <HomeComponent />
            <IntroduceComponent />
            <PhotoGalleryComponent />
            <EventComponent />
            <MapComponent />
            <AccountNumberComponent />
            <Paper elevation={3} sx={fixedPosition}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={handleChange}
                    sx={{
                        backgroundColor: '#f1d6e4',
                    }}
                >
                    <BottomNavigationAction label='Home' value='home' icon={<HomeIcon/>}/>
                    <BottomNavigationAction label='Couple' value='couple' icon={<FavoriteIcon/>}/>
                    <BottomNavigationAction label='Events' value='events' icon={<CelebrationIcon/>}/>
                    <BottomNavigationAction label='Map' value='map' icon={<LocationOnIcon/>}/>
                    <BottomNavigationAction label='Send' value='send' icon={<GitHubIcon/>}/>
                </BottomNavigation>
            </Paper>
        </>
    );

}
export default FixedBottomNavigationComponent;