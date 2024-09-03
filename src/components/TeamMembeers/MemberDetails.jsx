import React from 'react';
import { FaMobile, FaPhone, FaSchool } from 'react-icons/fa';
import { MdEmail, MdLocationCity, MdLocationPin, MdVolunteerActivism } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MemberDetails = () => {
    return (
        <div className='bg-lines'>
            <div className='max-w-[420px] mx-auto font-poppins'>

                <div className="transition duration-300 transform bg-white rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center">
                    <div className="relative">
                        <img
                            className="object-cover w-full h-64 rounded-t lg:h-80 xl:h-96"
                            src="https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt=""
                        />
                        <div className="absolute inset-0 bg-gray-800 bg-opacity-25" />
                    </div>
                    <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
                        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
                            Saad Bin Iqbal
                        </h5>
                        <p className="mb-5 text-gray-700 text-[15px]">
                            Sed ut pernatus error sit volu
                            accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                            perspiciatis unde.
                        </p>
                        <div className='flex items-center space-x-4'>
                            <FaSchool></FaSchool>
                            <h1 className='text-[13px]'>Class : 9 - Satkhira Police Lines Secondary School</h1>
                        </div>
                        <div className='flex items-center space-x-4 pt-2'>
                            <MdVolunteerActivism></MdVolunteerActivism>
                            <div className='flex items-center space-x-2'>
                                <h1 className='badge badge-sm badge-primary'>Admin</h1>
                                <h1 className='badge badge-sm badge-primary'>Volunteer</h1>
                                <h1 className='badge badge-sm badge-primary'>Fundraiser</h1>
                            </div>
                        </div>

                        <div className='my-2 border-b-[1px] py-1 border-gray-600 text-[14.5px]'>
                            Contact Details
                        </div>
                        <div className='flex items-center space-x-4'>
                            <FaPhone  className='text-green-500'></FaPhone>
                            <h1 className='text-[13px]'>01718 983451</h1>
                            <div className='flex items-center space-x-4'>
                                <MdEmail  className='text-teal-500'></MdEmail>
                                <h1 className='text-[13px]'>saad.bin.iqbal@gmail.com</h1>
                            </div>
                        </div>
                        <div className='flex items-center space-x-4 pt-2'>
                            <MdLocationPin className='text-red-500'></MdLocationPin>
                            <h1 className='text-[13px]'>39 Mehedy Street , Satkhira , Khulna</h1>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default MemberDetails;