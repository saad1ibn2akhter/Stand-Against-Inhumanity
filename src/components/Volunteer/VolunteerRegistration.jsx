import React from 'react';
import vol from '../../assets/volunteer.png';
import { Step } from './Step';
import { Link } from 'react-router-dom';

const VolunteerRegistration = () => {
    return (
        <div className='font-poppins'>
            <div className='max-w-7xl mx-auto'>
                <Step></Step>
            </div>
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <img src={vol} alt="" />

                            <div className="mt-8">
                                <Link to='/'>
                                    <div className="uppercase  font-semibold flex items-center gap-2 whitespace-nowrap py-3 text-[22px] focus:outline-none lg:flex-1" >
                                        <img width="80" height="80" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-defence-martial-arts-flaticons-lineal-color-flat-icons.png" alt="external-defence-martial-arts-flaticons-lineal-color-flat-icons" />
                                        <div className=" ">
                                            <h1 className="leading-tight tracking-tighter">Stand Against <span className="text-red-700 font-bold leading-tight tracking-tighter">Inhumanity</span></h1>
                                            <h1 className="text-[11px] ">Empowering youth for better <span className="text-green-600">Ban</span><span className="text-red-600">glad</span><span className="text-green-600">desh</span></h1>
                                        </div>
                                    </div>
                                </Link>
                                <a href="#" className="text-2xl font-bold text-pink-600"> 0151 475 4450 </a>
                                <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form action="#" className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                                    <div>
                                        <label
                                            htmlFor="Option1"
                                            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                                            tabIndex="0"
                                        >
                                            <input className="sr-only" id="Option1" type="radio" tabIndex="-1" name="option" />

                                            <span className="text-sm"> Option 1 </span>
                                        </label>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="Option2"
                                            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                                            tabIndex="0"
                                        >
                                            <input className="sr-only" id="Option2" type="radio" tabIndex="-1" name="option" />

                                            <span className="text-sm"> Option 2 </span>
                                        </label>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="Option3"
                                            className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                                            tabIndex="0"
                                        >
                                            <input className="sr-only" id="Option3" type="radio" tabIndex="-1" name="option" />

                                            <span className="text-sm"> Option 3 </span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="message">Message</label>

                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Send Enquiry
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VolunteerRegistration;