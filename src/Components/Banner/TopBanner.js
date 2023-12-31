import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

function TopBanner() {
    const showToastMessage = () =>{
        toast.success("Booking A Table!",{
            position: toast.POSITION.BOTTOM_RIGHT,
        });
    };

    return (
        <div className='topFixBanner'>
            <div className='topBannerOverlay'>
                <div className='topBannerContent'>
                    <h1 className="topSubTitle slideup-75">welcome to restura</h1>
                    <h1 className="topTitle slideup-85">Enjoy Foods, with your Friends & Family</h1>
                    <a onClick={showToastMessage} className='bannerButton color-animatedBtn slideup-95'>
                            Book A Table
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TopBanner;