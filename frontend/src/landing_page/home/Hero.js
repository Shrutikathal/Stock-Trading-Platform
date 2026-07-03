import React from 'react';
function Hero() {
    return (
        <>
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                {/* Since img is in the folder, we will treat it like the normal image,
                if the image was in the src folder then we have to import it like react component. */}
                <img src='media/images/homeHero.png' alt='Hero Image' className='mb-5'/>
                <h1 classname='mt-5'>Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='p-2 btn btn-primary fs-5 mb-5'style={{width:"20%",margin:"0 auto"}}>Sign Up Now</button>               
            </div>
        </div>
        </>
    );
}
export default Hero;