
import { useContext, useEffect, useState } from "react";
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { Link, NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {

    const isAdmin = true;
    const isModerator = false;
    const isUser = false;


    return (
        <div className="flex flex-col md:flex-row min-h-screen flex-nowrap font-poppins">

            <div className="w-full md:w-64  bg-lines  text-black border-2">
                <div>
                    <Link to='/' className="flex justify-center">
                        <img width="80" height="80" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-defence-martial-arts-flaticons-lineal-color-flat-icons.png" alt="external-defence-martial-arts-flaticons-lineal-color-flat-icons" />
                       
                    </Link>
                </div>
                <div className="flex flex-col items-center p-4">
                    <div className="mt-4">
                        <img className="h-[110px] w-[110px] rounded-full" src="https://i.pravatar.cc/40?img=35" alt="" />
                    </div>
                    <div className="mb-6 text-center">
                        <h1>Saad Ibn Akhter</h1>
                        <h1 className="badge badge-primary">
                            {isAdmin ? "Admin" : isModerator ? "Moderator" : "User"}
                        </h1>
                    </div>
                </div>
                <ul className="menu p-4 space-y-2">
                    {/* Admin Routes */}
                    {isAdmin && (
                        <>
                            <li>
                                <NavLink to="/dashboard/adminHome" className="flex items-center gap-2 flex-nowrap text-nowrap">
                                    <FaHome /> Admin Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addscholarships" className="flex items-center gap-2 flex-nowrap text-nowrap">
                                    <FaGoogleScholar /> Add Scholarship
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageScholarships" className="flex items-center gap-2flex-nowrap text-nowrap">
                                    <FaList /> Manage Scholarships
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/appliedscholarships" className="flex items-center gap-2 flex-nowrap text-nowrap">
                                    <FaBook /> Applied Applications
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/users" className="flex items-center gap-2 flex-nowrap text-nowrap">
                                    <FaUsers /> Manage Users
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allReviews" className="flex items-center gap-2 flex-nowrap text-nowrap">
                                    <MdReviews /> Manage Reviews
                                </NavLink>
                            </li>
                        </>
                    )}

                    {/* Moderator Routes */}
                    {isModerator && (
                        <>
                            <li>
                                <NavLink to="/dashboard/moderatorHome" className="flex items-center gap-2 flex-nowrap text-nowrap">
                                    <FaHome /> My Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageScholarships" className="flex items-center gap-2 flex-nowrap text-nowrap">
                                    <FaGoogleScholar /> Manage Scholarships
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allReviews" className="flex items-center gap-2 flex-nowrap text-nowrap">
                                    <MdReviews /> All Reviews
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/appliedscholarships" className="flex items-center gap-2 flex-nowrap text-nowrap">
                                    <FaBook /> Applied Applications
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addscholarships" className="flex items-center gap-2 flex-nowrap text-nowrap">
                                    <FaGoogleScholar /> Add Scholarship
                                </NavLink>
                            </li>
                        </>
                    )}

                    {/* User Routes */}
                    {isUser && (
                        <>
                            <li>
                                <NavLink to="/dashboard/userhome" className="flex items-center gap-2 flex-nowrap text-nowrap">
                                    <FaHome /> My Profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/applications" className="flex items-center gap-2 flex-nowrap text-nowrap">
                                    <FaBook /> My Applications
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/reviews" className="flex items-center gap-2 flex-nowrap text-nowrap">
                                    <MdReviews /> My Reviews
                                </NavLink>
                            </li>
                        </>
                    )}

                    {/* Shared Links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/" className="flex items-center gap-2">
                            <FaHome /> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu" className="flex items-center gap-2">
                            <FaSearch /> Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="flex items-center gap-2">
                            <FaEnvelope /> Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard content */}
            <div className="flex-1 p-4 md:p-8">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
