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
        const formData = {
            status: 'Approved',
        };
        axiosPublic.patch(`/volunteers/${applicationId}`, formData)
            .then(res => {
                console.log(res);
                setApplications(prevApplications =>
                    prevApplications.map(app =>
                        app.id === applicationId ? { ...app, status: 'Approved' } : app
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
                                    <th className="px-4 py-2 text-left">Job</th>
                                    <th className="px-4 py-2 text-left">Favorite Color</th>
                                    <th className="px-4 py-2 text-left">Details</th>
                                    <th className="px-4 py-2 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Example row */}
                                <tr>
                                    <td className="px-4 py-2">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                        alt="Avatar"
                                                        className="object-cover h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold text-sm">John Doe</div>
                                                <div className="text-xs opacity-50">Country</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2">
                                        Developer
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Software Engineer</span>
                                    </td>
                                    <td className="px-4 py-2">Blue</td>
                                    <td className="px-4 py-2">
                                        <button onClick={() => handleDetailsClick({})} className="btn btn-ghost btn-xs">Details</button>
                                    </td>
                                    <td className="px-4 py-2 flex items-center space-x-2">
                                        <button className="btn bg-green-100 text-green-500 btn-xs">Approve</button>
                                        <button className="btn bg-red-100 text-red-500 btn-xs">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <ToastContainer />
            {/* Modal HTML */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Application Details</h3>
                    <div className="py-4 space-y-2">
                        <img src="https://img.daisyui.com/images/profile/demo/2@94.webp" className='rounded-2xl' alt="" />
                        <div><strong>Name:</strong> Jane Doe</div>
                        <div><strong>Date of Birth:</strong> January 1, 1990</div>
                        <div><strong>Blood Group:</strong> A+</div>
                        <div><strong>Present Address:</strong> 789 Main St, City, Country</div>
                        <div><strong>Permanent Address:</strong> 101 Pine St, City, Country</div>
                        <div><strong>School:</strong> Example School</div>
                        <div><strong>Class:</strong> 12th Grade</div>
                        <div><strong>Father's Name:</strong> Michael Doe</div>
                        <div><strong>Mother's Name:</strong> Sarah Doe</div>
                        <div><strong>Father's NID:</strong> 1234567890</div>
                        <div><strong>Mother's NID:</strong> 0987654321</div>
                        <div><strong>NID/Birth Certificate:</strong> ABC123456</div>
                        <div><strong>Parents' Contact:</strong> +1234567890</div>
                        <div><strong>Phone:</strong> +0987654321</div>
                        <div><strong>Email:</strong> jane.doe@example.com</div>
                        <div><strong>Location:</strong> Downtown</div>
                        <div><strong>WhatsApp:</strong> +1122334455</div>
                        <div><strong>Status:</strong> Pending</div>
                    </div>
                    <div className="modal-action">
                        <button onClick={() => document.getElementById('my_modal_5').close()} className="btn">Close</button>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AllApplications;
