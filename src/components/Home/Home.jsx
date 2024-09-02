import React from 'react';
import { Team } from '../Team/Team';
import Banner from './banner';
import { Feature } from './Feature';
import Volunteer from './Volunteer';
import HeroSection from './HeroSection';
import { Content } from './Content';
import { Blog } from './Blog';
import { Newsletter } from './Newsletter';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <HeroSection></HeroSection>
            <Volunteer></Volunteer>
            <Content></Content>
            <Blog></Blog>
            <Team></Team>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;