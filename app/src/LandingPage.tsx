import React, {Fragment} from 'react';
import HomeComponent from './HomeComponent';
import FixedBottomNavigationComponent from "./FixedBottomNavigationComponent";
import IntroduceComponent from "./IntroduceComponent";
import EventComponent from "./EventComponent";
import PhotoGalleryComponent from './PhotoGalleryComponent';
import MapComponent from "./MapComponent";
import AccountNumberComponent from "./AccountNumberComponent";

const LandingPage = () => (
    <>
        <HomeComponent/>
        <FixedBottomNavigationComponent/>
        <IntroduceComponent/>
        <PhotoGalleryComponent/>
        <EventComponent/>
        <MapComponent/>
        <AccountNumberComponent/>
    </>
);


export default LandingPage;
