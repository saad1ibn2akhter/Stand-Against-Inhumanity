import React from 'react';
import { FaLaughWink } from 'react-icons/fa';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { MdArrowRight } from 'react-icons/md';

const BloodyBanner = () => {
    return (
        <>
            <section
                className="font-poppins bg-fixed bg-gray-600 bg-blend-multiply  relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
            >
                <div
                    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className='flex justify-center'>
                        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                            <h1 className="text-3xl font-extrabold text-white sm:text-5xl">
                                Let us find your lol lol lol Forever Home.
                            </h1>

                            <p >
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                                numquam ea!
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4 text-center">
                                <a

                                    className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                                >
                                    Get Started
                                </a>

                                <a

                                    className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='max-w-5xl mx-auto font-poppins'>
                <div className='grid grid-cols-1 my-20 md:grid-cols-2 gap-6 '>
                    <div>
                        <div className="bg-white border-[1px] border-gray-500 p-6 rounded-[50px]  ">
                            <div className="mb-4">

                                <img width="100" height="100" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-transparency-marketing-agency-flaticons-lineal-color-flat-icons-4.png" alt="external-transparency-marketing-agency-flaticons-lineal-color-flat-icons-4" />
                            </div>
                            <div className="space-y-4">
                                <h1 className="font-medium capitalize text-[19px]">Donate Blood</h1>
                                <p className="text-[15.5px] text-gray-500">Lorem ipsum tetur adipi sint reiciendis totam ea perferendis sed praesentium illo!</p>
                                <button className="btn btn-sm flex items-center space-x-3 ">
                                    <h1 className="">Details</h1>
                                    <MdArrowRight className='text-[28px]'></MdArrowRight>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white border-[1px] border-gray-500 p-6 rounded-[50px]  ">
                            <div className="mb-4">

                                <img width="100" height="100" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-transparency-marketing-agency-flaticons-lineal-color-flat-icons-4.png" alt="external-transparency-marketing-agency-flaticons-lineal-color-flat-icons-4" />
                            </div>
                            <div className="space-y-4">
                                <h1 className="font-medium capitalize text-[19px]">Need Blood ?</h1>
                                <p className="text-[15.5px] text-gray-500">Lorem ipsum tetur adipi sint reiciendis totam ea perferendis sed praesentium illo!</p>
                                <button className="btn btn-sm flex items-center space-x-3 ">
                                    <h1 className="">Details</h1>
                                    <MdArrowRight className='text-[28px]'></MdArrowRight>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default BloodyBanner;