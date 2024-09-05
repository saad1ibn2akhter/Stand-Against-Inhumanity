import React, { useEffect, useState } from 'react';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { toast, ToastContainer } from 'react-toastify';

const AllApplications = () => {
    const [applications, setApplications] = useState([]);
    const [selectedApplication, setSelectedApplication] = useState(null);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/volunteers')
            .then(res => {
                setApplications(res.data);
                toast.success('Data loaded from database');
                console.log(res.data);
            })
            .catch(error => {
                toast.error('Failed to load data');
                console.error(error);
            });
    }, [axiosPublic]);

    const handleDetailsClick = (application) => {
        setSelectedApplication(application);
        document.getElementById('my_modal_5').showModal();
    };

    const handleApproveApplication = (applicationId) => {
        console.log(applicationId)
        const id = applicationId._id;
        // return;
        const formData = {
            status: 'Approved',
        };
        axiosPublic.patch(`/volunteers/${id}`, formData)
            .then(res => {
                console.log(res);
                setApplications(prevApplications =>
                    prevApplications.map(app =>
                        app._id === id ? { ...app, status: 'Approved' } : app
                    )
                );
                toast.success('Application approved successfully');
            })
            .catch(error => {
                toast.error('Failed to approve application');
                console.error(error);
            });
    };

    return (
        <div>
            <section className='max-w-7xl mx-auto'>
                <div className='flex justify-center flex-col'>
                    <div>
                        <h1 className='text-[36px] font-medium'>All Applications</h1>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table w-full min-w-max">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left">Name</th>
                                    <th className="px-4 py-2 text-left">Phone</th>
                                    <th className="px-4 py-2 text-left">Email</th>
                                    <th className="px-4 py-2 text-left">Status</th>
                                    <th className="px-4 py-2 text-left">Details</th>
                                    <th className="px-4 py-2 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {applications.map(application => (
                                    <tr key={application.id}>
                                        <td className="px-4 py-2">
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                        <img
                                                            src={application.avatarUrl || "https://img.daisyui.com/images/profile/demo/2@94.webp"}
                                                            alt="Avatar"
                                                            className="object-cover h-full w-full"
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-sm">{application.name}</div>
                                                    <div className="text-xs opacity-50">{application.country}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">{application.phone}</td>
                                        <td className="px-4 py-2">{application.email}</td>
                                        {
                                            application.status === 'Approved' && <>
                                                <td className="px-4 py-2 badge bg-green-100 text-green-500">{application.status}</td>
                                            </>
                                        }
                                        {
                                            application.status !== 'Approved' && <>
                                                <td className="px-4 py-2 badge bg-yellow-100 text-yellow-500">{application.status}</td>
                                            </>
                                        }
                                        <td className="px-4 py-2">
                                            <button onClick={() => handleDetailsClick(application)} className="btn btn-ghost btn-xs">Details</button>
                                        </td>
                                        <td className="px-4 py-2 flex items-center space-x-2">
                                            <button onClick={() => handleApproveApplication(application)} className="btn bg-green-100 text-green-500 btn-xs">Approve</button>
                                            <button className="btn bg-red-100 text-red-500 btn-xs">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <ToastContainer />
            {/* Modal HTML */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                {selectedApplication && (
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Application Details</h3>
                        <div className="py-4 space-y-2">
                            <img src={selectedApplication.avatarUrl || "https://img.daisyui.com/images/profile/demo/2@94.webp"} className='rounded-2xl' alt="" />
                            <div><strong>Name:</strong> {selectedApplication.name}</div>
                            <div><strong>Date of Birth:</strong> {selectedApplication.dateOfBirth}</div>
                            <div><strong>Blood Group:</strong> {selectedApplication.bloodGroup}</div>
                            <div><strong>Present Address:</strong> {selectedApplication.presentAddress}</div>
                            <div><strong>Permanent Address:</strong> {selectedApplication.permanentAddress}</div>
                            <div><strong>School:</strong> {selectedApplication.school}</div>
                            <div><strong>Class:</strong> {selectedApplication.class}</div>
                            <div><strong>Father's Name:</strong> {selectedApplication.fatherName}</div>
                            <div><strong>Mother's Name:</strong> {selectedApplication.motherName}</div>
                            <div><strong>Father's NID:</strong> {selectedApplication.fatherNID}</div>
                            <div><strong>Mother's NID:</strong> {selectedApplication.motherNID}</div>
                            <div><strong>NID/Birth Certificate:</strong> {selectedApplication.nidBirthCert}</div>
                            <div><strong>Parents' Contact:</strong> {selectedApplication.parentsContact}</div>
                            <div><strong>Phone:</strong> {selectedApplication.phone}</div>
                            <div><strong>Email:</strong> {selectedApplication.email}</div>
                            <div><strong>Location:</strong> {selectedApplication.location}</div>
                            <div><strong>WhatsApp:</strong> {selectedApplication.whatsapp}</div>
                            <div><strong>Status:</strong> {selectedApplication.status}</div>
                        </div>
                        <div className="modal-action">
                            <button onClick={() => document.getElementById('my_modal_5').close()} className="btn">Close</button>
                        </div>
                    </div>
                )}
            </dialog>
        </div>
    );
};

export default AllApplications;
