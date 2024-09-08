import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { toast, ToastContainer } from 'react-toastify';

const BloodDonors = () => {
    const axiosPublic = useAxiosPublic();
    const [donors, setDonors] = useState([]);
    const [selectedDonor, setSelectedDonor] = useState(null);

    useEffect(() => {
        axiosPublic.get('/blooddonations')
            .then(res => {
                console.log(res);
                setDonors(res.data);
            })
            .catch(error => {
                console.log('error in the component :', error);
                
            });
    }, []);

    const handleViewDetails = (donor) => {
        setSelectedDonor(donor);
        document.getElementById('donor_modal').showModal();
    };

    const handleDelete = (id) =>{
        console.log(id);
        axiosPublic.delete(`/blooddonations/${id}`)
        .then(res =>{
            console.log(res);
            toast.success('Succesfully removed information !')
        })
    }

    return (
        <div className='font-poppins max-w-7xl mx-auto'>
            <div className='text-2xl font-semibold flex justify-center flex-col text-center'>
                <h1>Blood donors across the country</h1>
                <p className='text-gray-500 text-[14px] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam, maxime saepe voluptatem sapiente asperiores culpa!</p>
            </div>

            <div className='overflow-x-auto'>
                <table className="table w-full">
                    <thead>
                        <tr>
                            
                            <th>Name</th>
                            <th>Blood Group</th>
                            <th>Location</th>
                            <th>Phone</th>
                            <th>Gender</th>
                            <th>Details</th>
                            <th>Acition</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            donors.map((donor, index) => (
                                <tr key={index}>
                                    
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={donor.photo || "https://img.freepik.com/free-photo/mist-asian-forest-landmark-rural-travel_1417-1341.jpg"}
                                                        alt={`${donor.name} Avatar`} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{donor.name}</div>
                                                <div className="text-sm opacity-50">{donor.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{donor.blood_group}</td>
                                    <td>{donor.location}</td>
                                    <td>{donor.phone_number}</td>
                                    <td>{donor.gender}</td>
                                    <td>
                                        <button 
                                            className="btn btn-ghost btn-xs" 
                                            onClick={() => handleViewDetails(donor)}>
                                            View
                                        </button>
                                    </td>
                                    <td>
                                        <button 
                                            className="btn btn-ghost btn-xs bg-red-100 text-red-600" 
                                            onClick={() => handleDelete(donor._id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <ToastContainer></ToastContainer>
            </div>

            {/* Modal */}
            {selectedDonor && (
                <dialog id="donor_modal" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Details of {selectedDonor.name}</h3>
                        <p className="py-4"><strong>Email:</strong> {selectedDonor.email}</p>
                        <p className="py-2"><strong>Phone Number:</strong> {selectedDonor.phone_number}</p>
                        <p className="py-2"><strong>Location:</strong> {selectedDonor.location}</p>
                        <p className="py-2"><strong>District:</strong> {selectedDonor.district}</p>
                        <p className="py-2"><strong>Sub-District:</strong> {selectedDonor.sub_district}</p>
                        <p className="py-2"><strong>Union:</strong> {selectedDonor.union}</p>
                        <p className="py-2"><strong>Gender:</strong> {selectedDonor.gender}</p>
                        <p className="py-2"><strong>Blood Group:</strong> {selectedDonor.blood_group}</p>
                        <p className="py-2"><strong>Date of Birth:</strong> {selectedDonor.date_of_birth}</p>
                        <p className="py-2"><strong>Alcohol or Drugs:</strong> {selectedDonor.alcohol_or_drugs}</p>
                        <p className="py-2"><strong>Medical Surgery:</strong> {selectedDonor.medical_surgery}</p>
                        <p className="py-2"><strong>Vaccine in Last 6 Months:</strong> {selectedDonor.vaccine_last_6_months}</p>
                        <p className="py-2"><strong>Additional Info:</strong> {selectedDonor.additional_info}</p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default BloodDonors;
