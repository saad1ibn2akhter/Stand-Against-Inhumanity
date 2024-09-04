import React from 'react';
import vol from '../../assets/volunteer.png';
import { Step } from './Step';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VolunteerRegistration = () => {
    const axiosPublic = useAxiosPublic();
    const handleSubmission = (e) => {
        e.preventDefault();

        const formData = {
            name: e.target.name.value,
            dateOfBirth: e.target.dateOfBirth.value,
            bloodGroup: e.target.bloodGroup.value,
            presentAddress: e.target.presentAddress.value,
            permanentAddress: e.target.permanentAddress.value,
            school: e.target.school.value,
            class: e.target.class.value,
            fatherName: e.target.fatherName.value,
            motherName: e.target.motherName.value,
            fatherNID: e.target.fatherNID.value,
            motherNID: e.target.motherNID.value,
            nidBirthCert: e.target.nidBirthCert.value,
            parentsContact: e.target.parentsContact.value,
            phone: e.target.phone.value,
            email: e.target.email.value,
            location: e.target.location.value,
            whatsapp: e.target.whatsapp.value,
            status:'Pending'
        };

        axiosPublic.post('/volunteers',formData)
        .then(res => {
            console.log(res);
            if(res.data.insertedId){
                toast.success('succcessfully submitted your application to offfice');
            }
        })

        // Post the data to the server or process it as needed
        console.log('Volunteer:', formData);
    };

    return (
        <div className='font-poppins'>
            <div className='max-w-7xl mx-auto'>
                <Step />
            </div>
            <section className="bg-gray-100">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <img src={vol} alt="Volunteer" />

                            <div className="mt-8">
                                <Link to='/'>
                                    <div className="uppercase font-semibold flex items-center gap-2 whitespace-nowrap py-3 text-[22px] focus:outline-none lg:flex-1">
                                        <img width="80" height="80" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-defence-martial-arts-flaticons-lineal-color-flat-icons.png" alt="external-defence-martial-arts-flaticons-lineal-color-flat-icons" />
                                        <div>
                                            <h1 className="leading-tight tracking-tighter">Stand Against <span className="text-red-700 font-bold leading-tight tracking-tighter">Inhumanity</span></h1>
                                            <h1 className="text-[11px]">Empowering youth for better <span className="text-green-600">Ban</span><span className="text-red-600">glad</span><span className="text-green-600">desh</span></h1>
                                        </div>
                                    </div>
                                </Link>
                                <a href="#" className="text-2xl font-bold text-pink-600"> 0151 475 4450 </a>
                                <address className="mt-2 not-italic">282 Kevin Brook, Imogeneborough, CA 58517</address>
                            </div>
                        </div>

                        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <div>
                                <h1>Volunteer Registration</h1>
                            </div>
                            <form onSubmit={handleSubmission} className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="name">Name</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                        required
                                    />
                                </div>



                                <div>
                                    <label className="sr-only" htmlFor="bloodGroup">Blood Group</label>
                                    <select
                                        id="bloodGroup"
                                        className="select select-bordered w-full border border-gray-300 p-3 text-sm"
                                        required
                                    >
                                        <option value="" disabled selected>Select Blood Group</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="presentAddress">Present Address</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Present Address"
                                        type="text"
                                        id="presentAddress"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="permanentAddress">Permanent Address</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Permanent Address"
                                        type="text"
                                        id="permanentAddress"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div className=''>
                                        <label htmlFor="class" className="sr-only">Class</label>
                                        <select
                                            id="class"
                                            className="select select-bordered w-full border border-gray-300 p-3 text-sm"
                                            required
                                        >
                                            <option value="" disabled selected>Select Class</option>
                                            {Array.from({ length: 8 }, (_, i) => (
                                                <option key={i + 5} value={i + 5}>Class {i + 5}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="school">School</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                            placeholder="School"
                                            type="text"
                                            id="school"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="fatherName">Father's Name</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Father's Name"
                                        type="text"
                                        id="fatherName"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="motherName">Mother's Name</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Mother's Name"
                                        type="text"
                                        id="motherName"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="fatherNID">Father's NID Number</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Father's NID Number"
                                        type="text"
                                        id="fatherNID"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="motherNID">Mother's NID Number</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Mother's NID Number"
                                        type="text"
                                        id="motherNID"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="nidBirthCert">NID/Birth Certificate Number</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="NID/Birth Certificate Number"
                                        type="text"
                                        id="nidBirthCert"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="sr-only" htmlFor="dateOfBirth">Date of Birth</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Date of Birth"
                                        type="date"
                                        id="dateOfBirth"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="parentsContact">Father's/Mother's Contact</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Father's/Mother's Contact"
                                        type="text"
                                        id="parentsContact"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" htmlFor="phone">Phone</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only" htmlFor="email">Email</label>
                                        <input
                                            className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="location">Location</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="Location"
                                        type="text"
                                        id="location"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="whatsapp">WhatsApp</label>
                                    <input
                                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                                        placeholder="WhatsApp"
                                        type="text"
                                        id="whatsapp"
                                        required
                                    />
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                                    >
                                        Register Volunteer
                                    </button>
                                </div>
                                
                            </form>
                        
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </div>
    );
};

export default VolunteerRegistration;
