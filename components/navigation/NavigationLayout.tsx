import React, { Fragment } from 'react';

import Navbar from './Navbar';

const NaviagtionLayout = ({ children }) => {
    return (
        <Fragment>
            <Navbar />
            {/* space for navbar (if-fixed) */}
            <div className='h-14'></div>

            {children}

            {/* space for bottombar */}
            {/* <div className='h-14 bottom-0 md:hidden'></div> */}
            {/* <BottomBar /> */}
            {/* <Footer /> */}
        </Fragment>
    );
};

export default NaviagtionLayout;
