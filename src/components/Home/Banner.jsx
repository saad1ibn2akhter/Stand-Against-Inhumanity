import React from 'react';
import { FaPlayCircle } from 'react-icons/fa';
import { FaRightFromBracket } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div className='bg-gray-100 bg-banner bg-blend-multiply bg-opacity-70 bg-no-repeat  w-full'>
            <div className='max-w-7xl mx-auto font-mons'>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-7xl md:px-18 lg:px-8 lg:py-20">
                    <div className="grid gap-10 lg:grid-cols-2">
                        {/* Text Section */}
                        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 space-y-6">

                            <div className=" mb-6">
                                <h2 className="mb-6 leading-tight tracking-tighter text-[54px] font-semibold text-gray-900  ">
                                    Serving <span className='capitalize p-2 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-800'>Humanity</span> <br />
                                    to change the world

                                </h2>
                                <p className="text-base text-gray-700 md:text-lg mb-3">
                                    Shape a brighter future and build a better world with our impactful volunteery initiatives.
                                </p>

                                <div className='flex  items-center my-3 space-x-5'>
                                    <button className='text-[18px]  btn bg-red-200 text-red-500'>
                                        Donate Now
                                    </button>
                                    <button className='btn rounded-full  bg-red-100 text-orange-500'>
                                        <FaPlayCircle className='text-[28px] rounded-full'></FaPlayCircle>
                                    </button>
                                </div>
                            </div>
                            <div className='-translate-y-6 flex space-x-5 items-center'>
                                <div className='flex space-x-3 items-center  text-nowrap '>
                                    <img width="40" height="40" src="https://img.icons8.com/color/100/checked-2--v1.png" alt="checked-2--v1" />
                                    <h1>Fund Raising</h1>
                                </div>
                                <div className='flex space-x-3 items-center  text-nowrap'>
                                    <img width="40" height="40" src="https://img.icons8.com/color/100/checked-2--v1.png" alt="checked-2--v1" />
                                    <h1>Relief providing</h1>
                                </div>
                                <div className='flex space-x-3 items-center  text-nowrap'>
                                    <img width="40" height="40" src="https://img.icons8.com/color/100/checked-2--v1.png" alt="checked-2--v1" />
                                    <h1>Financial Support</h1>
                                </div>
                            </div>
                        </div>
                        {/* Images Section */}
                        <div className="flex items-center justify-center -mx-4 lg:pl-8">
                            <div className="flex flex-col items-end px-3">
                                <img
                                    className="object-cover mb-6 rounded-3xl shadow-lg h-80 sm:h-96 xl:h-112 w-56 sm:w-72 lg:w-92 xl:w-92"
                                    src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                    alt=""
                                />
                                <img className="object-cover w-44 h-40 rounded-3xl shadow-lg sm:h-56 xl:h-64 sm:w-56 xl:w-64" src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
                            </div>
                            <div className="px-3">
                                <img className="object-cover w-72 h-64 rounded-3xl shadow-lg sm:h-96 xl:h-112 sm:w-96 xl:w-112 mb-6" src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="" />
                                <img className="object-cover w-64 h-40 rounded-3xl shadow-lg sm:h-56 xl:h-64 sm:w-56 xl:w-64" src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
