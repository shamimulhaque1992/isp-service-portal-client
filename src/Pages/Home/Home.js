import React from 'react';
import Banner from './Banner/Banner';
import BasicInfo from './BasicInfo/BasicInfo';
import ContactUs from './ContactUs/ContactUs';
import FeatureService from './FeatureService/FeatureService';
import Reviews from './Reviews/Reviews';
import Services from './Servicess/Services';
import TakeService from './TakeService/TakeService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BasicInfo></BasicInfo>
            <Services></Services>
            <FeatureService></FeatureService>
            <TakeService></TakeService>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;