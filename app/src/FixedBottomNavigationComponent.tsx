import {BottomNavigation, BottomNavigationAction, Paper} from '@mui/material';
import React from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const FixedBottomNavigationComponent = () => {
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    const fixedPosition = {
        // TODO: 나중에 useRef 등을 이용해서 scrollTop일 경우에는 fixed 안되게끔 개선
        position: 'fixed',
        bottom: 0, left: 0, right: 0,
        zIndex: '9',
    }

    return (
        <Paper elevation={3}
               sx={fixedPosition}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    console.log(`newValue: ${newValue}`);
                    setValue(newValue);
                }}
                sx={{
                    backgroundColor: '#f1d6e4',
                }}
            >
                {/* TODO: onClick 또는 value값에 따라 이동하는 로직 추가 */}
                <BottomNavigationAction label='Home' value='home' icon={<HomeIcon/>}/>
                <BottomNavigationAction label='Couple' value='couple' icon={<FavoriteIcon/>}/>
                <BottomNavigationAction label='Events' value='events' icon={<LocationOnIcon/>}/>
                <BottomNavigationAction label='Gallery' value='gallery' icon={<FolderIcon/>}/>
            </BottomNavigation>
        </Paper>
    );
}
export default FixedBottomNavigationComponent;