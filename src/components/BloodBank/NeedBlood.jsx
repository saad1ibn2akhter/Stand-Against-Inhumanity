import React from 'react';
import { FaLink } from 'react-icons/fa';

const NeedBlood = () => {
    return (
        <div>
            <div className='w-full h-full'>
                <div className="bg-fixed  bg-no-repeat bg-cover" style={{ backgroundImage: `url('https://i.pinimg.com/564x/69/e4/10/69e4108c93faf43faa209340d3903730.jpg')` }}>

                    <div className="relative bg-black bg-blend-multiply bg-opacity-60 pb-12">
                        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                            <div className="flex flex-col items-center justify-between xl:flex-row">
                                <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                        <h1>Seacrh for specific blood group</h1>
                                    </h2>
                                    <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, placeat quasi! Numquam, odit quo? Sequi, consequuntur? Necessitatibus, tenetur suscipit. Ut.
                                    </p>
                                    <button className='btn bg-black text-pink-800 flex space-x-3 items-center'>
                                        <FaLink />
                                        <h1>Learn More</h1>
                                    </button>
                                </div>
                                <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                                    <div className="bg-white rounded shadow-2xl p-7 sm:p-10">
                                        <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                                            Search blood using District name
                                        </h3>
                                        <form>
                                            <div className="mb-1 sm:mb-2">
                                                <label
                                                    htmlFor="firstName"
                                                    className="inline-block mb-1 font-medium"
                                                >
                                                    Blood Search
                                                </label>
                                                <input
                                                    placeholder="Search..."
                                                    required
                                                    type="text"
                                                    className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                                    id="firstName"
                                                    name="firstName"

                                                />
                                            </div>
                                            <div className="mt-4 mb-2 sm:mb-4">
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-black border-2 bg-red-400 transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                >
                                                    Search
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            {/* all districts here */}
            <section className='font-poppins mt-16'>
                <div className='flex justify-center mb-8'>
                    <h1 className='text-3xl font-bold'>Search by District</h1>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 max-w-7xl mx-auto'>
                    {districts.map((district, index) => (
                        <div key={index} className='bg-green-100 text-red-500 flex space-x-2 items-center rounded-2xl p-2.5'>
                            <img
                                width="65"
                                height="65"
                                src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/external-country-bangladesh-independence-day-flatarticons-blue-flatarticons.png"
                                alt={`${district}-icon`}
                            />
                            <h1 className='text-[18px] font-medium'>{district}</h1>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default NeedBlood;


const districts = [
    "Satkhira", "Dhaka", "Chittagong", "Khulna", "Rajshahi", "Sylhet", "Barisal", "Rangpur",
    "Gazipur", "Narayanganj", "Comilla", "Narsingdi", "Mymensingh", "Cox's Bazar", "Jessore",
    "Dinajpur", "Tangail", "Pabna", "Faridpur", "Noakhali", "Bogra", "Patuakhali", "Jamalpur",
    "Nawabganj", "Kushtia", "Brahmanbaria", "Bagerhat", "Lalmonirhat", "Kurigram", "Magura",
    "Chandpur", "Habiganj", "Lakshmipur", "Narail", "Thakurgaon", "Moulvibazar", "Meherpur",
    "Pirojpur", "Jhalokathi", "Manikganj", "Shariatpur", "Sherpur", "Gaibandha", "Kishoreganj",
    "Netrokona", "Chapainawabganj", "Naogaon", "Joypurhat", "Sirajganj", "Sunamganj",
    "Bhola", "Munshiganj", "Madaripur", "Rajbari", "Gopalganj", "Khagrachari", "Rangamati",
    "Bandarban", "Feni", "Lalmonirhat", "Nilphamari", "Panchagarh", "Chuadanga", "Satkhira",
    "Barguna"
];
