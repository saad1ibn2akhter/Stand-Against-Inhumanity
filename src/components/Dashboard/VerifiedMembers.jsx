import React, { useEffect, useState } from 'react';
import { MdCancel, MdPerson } from 'react-icons/md';

import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import useAxiosPublic from '../hooks/useAxiosPublic';
// import useAxiosPublic from '../hooks/useAxiosPublic';

const VerifiedMembers = () => {


    const [users, setUsers] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/volunteers')
            .then(res => {
                console.log(res.data)
                // setUsers(res.data);
                const allUsers = res.data;
                console.log('all users :' ,allUsers );
                const approvedUsers = allUsers.filter(x => x.status === 'Approved')
                if(approvedUsers){
                    setUsers(approvedUsers);
                }
            })

    }, []);

    const handleDelete = (_id) => {
        axiosPublic.delete(`/users/${_id}`)
            .then(res => {
                console.log(res);
                Swal.fire({
                    icon: 'success'
                })
            })
    }

    const handleRole = (e, user) => {
        e.preventDefault();
        console.log('triggered handleRole function !');

        const form = new FormData(e.currentTarget);

        const role = form.get('role')
        console.log(role);


        axiosPublic.patch(`/users/${user._id}`, { role: role })
            .then(res => {
                console.log(res.data);
                toast.success('Role Updated Succesfully !!')
            })
            .catch(error => {
                console.error('Error updating role:', error);
            });
    };
    return (
        <div>
            <div>
                <div>
                    <h1 className='text-3xl text-center font-medium mb-2'>All Registered Users</h1>
                </div>

                <div className="max-w-6xl overflow-x-scroll overflow-y-visible">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>

                                </th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody className='bg-gray-200 rounded-2xl border-2 border-violet-400 mb-1'>

                            {
                                users.map((user, index) =>
                                    <tr key={index}>
                                        <th>

                                        </th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle h-12 w-12">
                                                    <img width="100" height="100" src="https://img.icons8.com/color/100/circled-user-male-skin-type-5--v1.png" alt="circled-user-male-skin-type-5--v1"/>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold text-nowrap">{user?.name}</div>
                                                    <div className="text-sm opacity-50 text-nowrap">+440 4037 7408</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className=' text-nowrap'>
                                            {user?.email}
                                        </td>
                                        {/* <td className='text-nowrap translate-y-5 badge badge-primary'>{user?.role}</td> */}
                                        <td>
                                            <form action=""  onChange={(e) => handleRole(e, user)}>
                                                <select
                                                    className="select select-bordered w-[130px]"
                                                    name="role"
                                                    defaultValue={user?.role}
                                                   
                                                >
                                                    <option value="" disabled>Role</option>
                                                    <option value="User">User</option>
                                                    <option value="Moderator">Moderator</option>
                                                    <option value="Admin">Admin</option>
                                                </select>
                                            </form>
                                        </td>

                                        <td className='  text-nowrap'>
                                            <button className='btn-sm btn' onClick={() => handleDelete(user?._id)}><MdCancel></MdCancel></button>
                                        </td>
                                    </tr>)
                            }

                        </tbody>
                        {/* foot */}

                    </table>

                </div>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default VerifiedMembers;