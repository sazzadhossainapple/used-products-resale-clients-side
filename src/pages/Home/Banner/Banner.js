import React from 'react';
import Image from '../../../asserts/Images/banner/banner2.webp';

const Banner = () => {
    return (
        <div
            className="w-full -mt-[76px] min-h-screen flex justify-center items-center bg-gray-600 from-slate-300 px-4 sm:px-6 md:px-12 lg:px-20"
            style={{
                backgroundImage: `url(${Image})`,
                backgroundBlendMode: 'multiply',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            <div className="container flex flex-col flex-wrap text-white  content-center items-center justify-center w-3/5 ">
                <div className="mb-4 font-bold text-center ">
                    <span className="text-xs italic text-[#ffc600] ">
                        <strong>Find's Your</strong>
                    </span>
                    <br></br>
                    <span className="text-4xl" style={{ lineHeight: '3rem' }}>
                        Best Place to Sell and Buy Your Second-Hand Computer and
                        Its Peripherals.
                    </span>
                </div>
                {/* <input
          type="text"
          placeholder="Search Your items"
          className="input   border-2 placeholder:text-slate-300 border-white bg-transparent w-[90%] sm:w-[90%] md:w-[90%] lg:w-1/2 rounded-full py-7"
        /> */}
            </div>
        </div>
    );
};

export default Banner;
