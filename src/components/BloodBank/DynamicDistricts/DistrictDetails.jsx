import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { toast, ToastContainer } from 'react-toastify';

const DistrictDetails = () => {
    const [blood, setBlood] = useState([]);
    const axiosPublic = useAxiosPublic();
    const { district } = useParams();

    useEffect(() => {
        axiosPublic.get('/blooddonations')
            .then(res => {
                console.log(res);
                const allData = res.data;
                const requiredDistrict = allData.filter(x => x.district === district);
                if (requiredDistrict) {
                    setBlood(requiredDistrict);
                    toast.success(`Blood Available in ${district}`);
                }

            })
    }, [])

    console.log('required params', district)
    console.log('blood for district :', blood);
    return (
        <div>
            
            <div className='font-mons text-center my-8'>
                <h1 className='text-3xl font-semibold mb-4'>Blood availability in {district}</h1>
                <p className='max-w-[80%] mx-auto'>Find out the current availability of blood donors in {district}. We strive to connect you with donors quickly and efficiently, ensuring that your urgent needs are met with care and responsibility.</p>
            </div>
            <div>
                {
                    blood.length === 0 && <>
                        <img className='mx-auto' src="https://i.pinimg.com/564x/3d/09/ca/3d09cad6a03f0bad68c8e2454af4f87e.jpg" alt="" />
                    </>
                }
            </div>
            <div className='grid grid-cols-3 font-mons gap-[24px] justify-center max-w-7xl mx-auto'>
                {
                    blood.map((donor, index) => <>
                        <div key={index} className="max-w-[500px] border-2 border-gray-300 rounded-2xl  overflow-hidden shadow-lg bg-white p-6">
                            <img className="w-full h-48 object-cover" src={donor.photo} alt={donor.name} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{donor.name}</div>
                                <p className="text-gray-700 text-base mb-1">
                                    <strong>Email:</strong> {donor.email}
                                </p>
                                <p className="text-gray-700 text-base mb-1">
                                    <strong>Phone:</strong> {donor.phone_number}
                                </p>
                                <p className="text-gray-700 text-base mb-1">
                                    <strong>District:</strong> {donor.district}
                                </p>
                                <p className="text-gray-700 text-base mb-1">
                                    <strong>Sub-district:</strong> {donor.sub_district}
                                </p>
                                <p className="text-gray-700 text-base mb-1">
                                    <strong>Union:</strong> {donor.union}
                                </p>
                                <p className="text-gray-700 text-base mb-1">
                                    <strong>Location:</strong> {donor.location}
                                </p>
                                <p className="text-gray-700 text-base mb-1">
                                    <strong>Gender:</strong> {donor.gender}
                                </p>
                                <p className="text-gray-700 text-base mb-1">
                                    <strong>Blood Group:</strong> {donor.blood_group}
                                </p>
                                <p className="text-gray-700 text-base mb-1">
                                    <strong>Date of Birth:</strong> {donor.date_of_birth}
                                </p>
                                <p className="text-gray-700 text-base mb-1">
                                    <strong>Alcohol or Drugs:</strong> {donor.alcohol_or_drugs}
                                </p>
                                <p className="text-gray-700 text-base mb-1">
                                    <strong>Medical Surgery:</strong> {donor.medical_surgery}
                                </p>
                                <p className="text-gray-700 text-base mb-1">
                                    <strong>Vaccine in Last 6 Months:</strong> {donor.vaccine_last_6_months}
                                </p>
                                {/* <p className="text-gray-700 text-base mb-1">
                                    <strong>Additional Info:</strong> {donor.additional_info}
                                </p> */}
                            </div>
                        </div>
                    </>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default DistrictDetails;