import React from 'react';
import Banner from './Banner/Banner';
import BasicInfo from './BasicInfo/BasicInfo';
import FeatureService from './FeatureService/FeatureService';
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
        </div>
    );
};

export default Home;