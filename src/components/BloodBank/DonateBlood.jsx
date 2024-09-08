import React from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { toast, ToastContainer } from 'react-toastify';

const DonateBlood = () => {
    const axiosPublic = useAxiosPublic();

    const submitBlood = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        // Extract form data
        const name = form.get('name');
        const email = form.get('email');
        const phone_number = form.get('phone_number');
        const photo = form.get('photo');
        const district = form.get('district');
        const sub_district = form.get('sub-district');
        const union = form.get('union');
        const location = form.get('location');
        const gender = form.get('gender');
        const blood_group = form.get('blood_group');
        const date_of_birth = form.get('date_of_birth');
        const alcohol_or_drugs = form.get('alcohol_or_drugs');
        const medical_surgery = form.get('medical_surgery');
        const vaccine_last_6_months = form.get('vaccine_last_6_months');
        const additional_info = form.get('additional_info');

        const bloodinfo = {
            name,
            email,
            phone_number,
            photo,
            district,
            sub_district,
            union,
            location,
            gender,
            blood_group,
            date_of_birth,
            alcohol_or_drugs,
            medical_surgery,
            vaccine_last_6_months,
            additional_info
        };

        axiosPublic.post('/blooddonations', bloodinfo)
            .then(res => {
                console.log(res);
                toast.success('Successfully Pushed to the server');
            })
            .catch(error => {
                console.log(error);
                toast.error('Failed to push data to the server');
            });
    };
    return (
        <div>
            <section>
                <div className="px-4 py-16 font-mons mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                        <div>
                            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                Make history
                            </p>
                        </div>
                        <h2 className="max-w-lg mb-6  text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="84d09fa9-a544-44bd-88b2-08fdf4cddd38"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#84d09fa9-a544-44bd-88b2-08fdf4cddd38)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span className="relative">Let's</span>
                            </span>{' '}
                            launch a rocket into outer space
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque rem aperiam, eaque ipsa quae.
                        </p>
                    </div>
                    <div className="grid gap-8 row-gap-5 md:row-gap-8 lg:grid-cols-3">
                        <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-100 hover:-translate-y-2">
                            <div className="flex items-center mb-2">
                                <img width="100" height="100" src="https://img.icons8.com/clouds/100/add-user-male.png" alt="add-user-male" />
                                <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
                                    1
                                </p>
                                <p className="text-lg font-bold leading-5">Register An Account</p>
                            </div>
                            <p className="text-sm text-gray-900">
                                Bro ipsum dolor sit amet gaper backside single track, manny Bike
                                epic clipless.
                            </p>
                        </div>
                        <div className="p-5 duration-300 transform bg-white border-2 border-dashed rounded shadow-sm border-deep-purple-accent-200 hover:-translate-y-2">
                            <div className="flex items-center mb-2">
                                <img width="100" height="100" src="https://img.icons8.com/clouds/100/goodnotes.png" alt="goodnotes" />
                                <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
                                    2
                                </p>
                                <p className="text-lg font-bold leading-5">Send the details</p>
                            </div>
                            <p className="text-sm text-gray-900">
                                Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter
                                flail 180 berm.
                            </p>
                        </div>
                        <div className="relative p-5 duration-300 transform bg-white border-2 rounded shadow-sm border-deep-purple-accent-700 hover:-translate-y-2">
                            <div className="flex items-center mb-2">
                                <img width="100" height="100" src="https://img.icons8.com/clouds/100/new-letter.png" alt="new-letter" />
                                <p className="flex items-center justify-center w-10 h-10 mr-2 text-lg font-bold text-white rounded-full bg-deep-purple-accent-400">
                                    3
                                </p>
                                <p className="text-lg font-bold leading-5">Reply the email</p>
                            </div>
                            <p className="text-sm text-gray-900">
                                A flower in my garden, a mystery in the dark amidst the blue sky
                            </p>
                            <p className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 -mt-4 -mr-4 font-bold rounded-full bg-deep-purple-accent-400 sm:-mt-5 sm:-mr-5 sm:w-10 sm:h-10">
                                <svg
                                    className="text-white w-7"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <polyline
                                        fill="none"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeMiterlimit="10"
                                        points="6,12 10,16 18,8"
                                    />
                                </svg>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='max-w-7xl mx-auto py-10 px-6'>
                <div className='flex justify-center mb-8'>
                    <h1 className='capitalize font-semibold font-poppins text-[36px] text-center'>
                        Fill Out the Form to Donate Blood
                    </h1>
                </div>

                <form action="" onSubmit={submitBlood}>
                <div className='mb-8'>
                    <h2 className='font-semibold text-[24px] mb-2'>Personal Information</h2>
                    <hr className='mb-6' />
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <input name='name' type="text" className='input w-full border-gray-600 rounded-none' placeholder='Your Name' />
                        <input name='email' type="email" className='input w-full border-gray-600 rounded-none' placeholder='Your Email' />
                        <input name='phone_number' type="text" className='input w-full border-gray-600 rounded-none' placeholder='Your Mobile Number' />
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4'>
                        <select className="select select-bordered w-full rounded-none" name='district'>
                            <option disabled selected>District</option>
                            <option>Bagerhat</option>
                            <option>Bandarban</option>
                            <option>Barguna</option>
                            <option>Barisal</option>
                            <option>Bhola</option>
                            <option>Bogura</option>
                            <option>Brahmanbaria</option>
                            <option>Chandpur</option>
                            <option>Chapai Nawabganj</option>
                            <option>Chattogram</option>
                            <option>Chuadanga</option>
                            <option>Cox's Bazar</option>
                            <option>Cumilla</option>
                            <option>Dhaka</option>
                            <option>Dinajpur</option>
                            <option>Faridpur</option>
                            <option>Feni</option>
                            <option>Gaibandha</option>
                            <option>Gazipur</option>
                            <option>Gopalganj</option>
                            <option>Habiganj</option>
                            <option>Jamalpur</option>
                            <option>Jashore</option>
                            <option>Jhalokathi</option>
                            <option>Jhenaidah</option>
                            <option>Joypurhat</option>
                            <option>Khagrachari</option>
                            <option>Khulna</option>
                            <option>Kishoreganj</option>
                            <option>Kurigram</option>
                            <option>Kushtia</option>
                            <option>Lakshmipur</option>
                            <option>Lalmonirhat</option>
                            <option>Madaripur</option>
                            <option>Magura</option>
                            <option>Manikganj</option>
                            <option>Meherpur</option>
                            <option>Moulvibazar</option>
                            <option>Munshiganj</option>
                            <option>Mymensingh</option>
                            <option>Naogaon</option>
                            <option>Narail</option>
                            <option>Narayanganj</option>
                            <option>Narsingdi</option>
                            <option>Natore</option>
                            <option>Netrokona</option>
                            <option>Nilphamari</option>
                            <option>Noakhali</option>
                            <option>Pabna</option>
                            <option>Panchagarh</option>
                            <option>Patuakhali</option>
                            <option>Pirojpur</option>
                            <option>Rajbari</option>
                            <option>Rajshahi</option>
                            <option>Rangamati</option>
                            <option>Rangpur</option>
                            <option>Satkhira</option>
                            <option>Shariatpur</option>
                            <option>Sherpur</option>
                            <option>Sirajganj</option>
                            <option>Sunamganj</option>
                            <option>Sylhet</option>
                            <option>Tangail</option>
                            <option>Thakurgaon</option>
                        </select>
                        <input name='sub-district' type="text" className='input w-full border-gray-600 rounded-none' placeholder='Your Upzilla' />
                        {/* <select className="select select-bordered w-full rounded-none">
                            <option disabled selected>Sub-District</option>
                            <option>Sub-District 1</option>
                            <option>Sub-District 2</option>
                        </select> */}
                        {/* <select className="select select-bordered w-full rounded-none">
                            <option disabled selected>Union</option>
                            <option>Union 1</option>
                            <option>Union 2</option>
                        </select> */}
                        <input name='union' type="text" className='input w-full border-gray-600 rounded-none' placeholder='Your Union' />
                    </div>

                    <div className='w-full space-x-2 grid grid-cols-2'>
                        <input className='input w-full border-gray-600 rounded-none my-4' type="text" name='location' placeholder='Your Detailed Location eg.  House no. 45 , Satkhira Police Lines , Satkhira Sadar ,Satkhira , Khulna' />
                        <input className='input w-full border-gray-600 rounded-none my-4' type="text" name='photo' placeholder='Your Photo URL' />
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4'>
                        <select className="select select-bordered w-full rounded-none" name='gender'>
                            <option disabled selected>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                        <select className="select select-bordered w-full rounded-none" name='blood_group'>
                            <option disabled selected>Blood Group</option>
                            <option>A+</option>
                            <option>B+</option>
                            <option>O+</option>
                            <option>AB+</option>
                            <option>A-</option>
                            <option>B-</option>
                            <option>O-</option>
                            <option>AB-</option>
                        </select>
                        <input type="date" className='input w-full border-gray-600 rounded-none' placeholder='Date of Birth' name='date_of_birth' />
                    </div>
                </div>

                <div className='mb-8'>
                    <h2 className='font-semibold text-[24px] mb-2'>Additional Medical Information</h2>
                    <hr className='mb-6' />
                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        <select className="select select-bordered w-full rounded-none" name='alcohol_or_drugs'>
                            <option disabled selected>Did you take alcohol or drugs?</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        <select className="select select-bordered w-full rounded-none" name='medical_surgery'>
                            <option disabled selected>Did you have any medical surgery?</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                        <select className="select select-bordered w-full rounded-none" name='vaccine_last_6_months'>
                            <option disabled selected>Did you take any vaccine in the last 6 months?</option>
                            <option>Yes</option>
                            <option>No</option>
                        </select>
                    </div>

                    <div className='mt-8'>
                        <h2 className='font-semibold mb-3 text-center'>Would you like to provide more information? Use the description box below</h2>
                        <div className='flex justify-center'>
                            <textarea className='textarea textarea-bordered w-full lg:w-[900px] h-24 rounded-none' name='additional_info'></textarea>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center'>
                    <button className='btn btn-primary w-full lg:w-1/2 text-white bg-red-600 rounded-none' >
                        Submit
                    </button>
                </div>
                </form>
            </section>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default DonateBlood;



