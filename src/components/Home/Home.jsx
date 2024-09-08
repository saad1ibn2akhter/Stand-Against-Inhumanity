import React from 'react';
import { Team } from '../Team/Team';
import Banner from './banner';
import { Feature } from './Feature';
import Volunteer from './Volunteer';
import HeroSection from './HeroSection';
import { Content } from './Content';
import { Blog } from './Blog';
import { Newsletter } from './Newsletter';
import Testimonial from './Testimonial';
import { Faq } from './Faq';
import Marqee from './Marqee';

const Home = () => {
    return (
        <div className='font-mons space-y-[150px]'>
            <Banner></Banner>
            <Marqee></Marqee>
            <Feature></Feature>
            <HeroSection></HeroSection>
            <Volunteer></Volunteer>
            {/* <Content></Content> */}
            <Blog></Blog>
            <Faq></Faq>
            <Team></Team>
            <Testimonial></Testimonial>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;