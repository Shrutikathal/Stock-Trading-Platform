import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';

function HomePage() {
    return ( 
        // React Fragments (<> </>) — Most Likely
        // In React development, developers frequently refer to the empty tag syntax as an "empty flag" or "empty tag.
        // In React, a component can only return a single parent element. 
        // If you want to return multiple HTML elements next to each other, you used to have to wrap them in a <div>. 
        // This created unnecessary clutter in the HTML structure (known as "div soup").
        // To fix this, React introduced Fragments, which look like empty HTML tags. 
        // They group elements together without adding extra nodes to the actual DOM.

        <>
            {/* <Navbar /> */}
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />
            {/* <Footer /> */}
            


        </>
     );
}

export default HomePage;