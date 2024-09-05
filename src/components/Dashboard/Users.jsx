// import React, { useEffect, useState } from 'react';
// import useAxiosPublic from '../hooks/useAxiosPublic';
// import { toast, ToastContainer } from 'react-toastify';

// const Users = () => {
//     const [applications, setApplications] = useState([]);
    
//     const axiosPublic = useAxiosPublic();

//     useEffect(() => {
//         axiosPublic.get('/users')
//             .then(res => {
//                 setApplications(res.data);
//                 toast.success('Data loaded from database');
//                 console.log(res.data);
//             })
//             .catch(error => {
//                 toast.error('Failed to load data');
//                 console.error(error);
//             });
//     }, [axiosPublic]);



//     const handleDelete = (applicationId) => {
//         axiosPublic.delete(`/users/${applicationId}`)
//             .then(res => {
//                 console.log(res);
//                 toast.success('Users deleted Succesfully !!');
//             })

//     };

//     return (
//         <div>
//             <section className='max-w-7xl mx-auto'>
//                 <div className='flex justify-center flex-col'>
//                     <div>
//                         <h1 className='text-[36px] font-medium'>All Users</h1>
//                     </div>
//                     <div className="overflow-x-auto">
//                         <table className="table w-full min-w-max">
//                             {/* head */}
//                             <thead>
//                                 <tr>
//                                     <th className="px-4 py-2 text-left">Photo</th>
//                                     <th className="px-4 py-2 text-left">Name</th>
//                                     <th className="px-4 py-2 text-left">Email</th>
//                                     <th className="px-4 py-2 text-left">Password</th>
//                                     <th className="px-4 py-2 text-left">Role</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {/* Example row */}
//                                 <tr>
//                                     <td className="px-4 py-2">
//                                         <div className="flex items-center gap-3">
//                                             <div className="avatar">
//                                                 <div className="mask mask-squircle h-12 w-12">
//                                                     <img
//                                                         src="https://img.daisyui.com/images/profile/demo/2@94.webp"
//                                                         alt="Avatar"
//                                                         className="object-cover h-full w-full"
//                                                     />
//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <div className="font-bold text-sm">John Doe</div>
//                                                 <div className="text-xs opacity-50">Country</div>
//                                             </div>
//                                         </div>
//                                     </td>
//                                     <td className="px-4 py-2">
//                                         Developer
//                                         <br />
//                                         <span className="badge badge-ghost badge-sm">Software Engineer</span>
//                                     </td>
//                                     <td className="px-4 py-2">Blue</td>

//                                     <td className="px-4 py-2 flex items-center space-x-2">

//                                         <button onClick={handleDelete} className="btn bg-red-100 text-red-500 btn-xs">Delete</button>
//                                     </td>
//                                 </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                 </div>
//             </section>
//             <ToastContainer />
//             {/* Modal HTML */}

//         </div>
//     );
// };

// export default Users;






import React, { useEffect, useState } from 'react';
import { MdCancel, MdPerson } from 'react-icons/md';

import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import useAxiosPublic from '../hooks/useAxiosPublic';

const Users = () => {
    const [users, setUsers] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/users')
            .then(res => {
                console.log(res)
                setUsers(res.data);
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
                                    <tr>
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

export default Users;