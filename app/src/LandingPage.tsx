import React, {Fragment} from 'react';
import HomeComponent from './HomeComponent';
import FixedBottomNavigationComponent from "./FixedBottomNavigationComponent";
import IntroduceComponent from "./IntroduceComponent";
import EventComponent from "./EventComponent";
import PhotoGalleryComponent from './PhotoGalleryComponent';
import MapComponent from "./MapComponent";

const LandingPage = () => (
    <>
        <HomeComponent/>
        <FixedBottomNavigationComponent/>
        <IntroduceComponent/>
        <EventComponent/>
        <PhotoGalleryComponent/>
        <MapComponent/>
    </>
);


export default LandingPage;
