import React, { useEffect, useState } from 'react';
import { FaDollarSign, FaPoundSign, FaUser } from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector } from 'recharts';
import { MdDescription } from 'react-icons/md';
import { FaGoogleScholar } from 'react-icons/fa6';
import useAxiosPublic from '../hooks/useAxiosPublic';


const AdminHome = () => {

    const [donations, setDoantions] = useState(1000);
    const [users, setUser] = useState([]);
    const [blood, setBlood] = useState([]);
    const [volunteer, setVolunteer] = useState([]);
    const [blogs, setBlogs] = useState([]);

    const axiosPublic = useAxiosPublic();

    useEffect(() => {

        axiosPublic.get('/users')
            .then(res => {
                setUser(res.data)
            })
        axiosPublic.get('/blooddonations')
            .then(res => {
                setBlood(res.data)
            })
        axiosPublic.get('/volunteers')
            .then(res => {

                setVolunteer(res.data)
            })
        axiosPublic.get('/blogs')
            .then(res => {
                setBlogs(res.data)
            })


    }, [])



    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
    const data2 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const data = [
        {
            uv: 1000,
            uv: users.length,
            Dashboard: users.length,
            amt: 2400,
        },
        {
            name: 'Articles',
            uv: 1000,
            Dashboard: blogs.length,
            amt: 2210,
        },
        {
            name: 'Volunteers',
            uv: 1000,
            Dashboard: volunteer.length,
            amt: 2290,
        },
        {
            name: 'Blood Banks',
            uv: 1000,
            Dashboard: blood.length,
            amt: 2000,
        },

    ];


    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
      ${x + width / 2}, ${y}
      C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
      Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <div className='flex flex-col lg:flex-row justify-between items-start bg-lines bg-cover'>
            <div className='w-full'>
                <div className='flex justify-center mx-auto'>
                    <div className="stats flex flex-col items-center justify-center mx-auto md:flex-row shadow mb-8 w-[360px] lg:w-full overflow-hidden">
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaUser className='text-violet-600 w-[30px] h-[30px]' ></FaUser>
                            </div>
                            <div className="stat-title">Registered users</div>
                            <div className="stat-value">{users.length}</div>
                            <div className="stat-desc">Jan 1st - Sept 1st</div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaUser className='text-violet-600 w-[30px] h-[30px]' ></FaUser>
                            </div>
                            <div className="stat-title">Volunteers</div>
                            <div className="stat-value">{volunteer.length}</div>
                            <div className="stat-desc">Jan 1st - Sept 1st</div>
                        </div>
                    

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaPoundSign className='text-violet-600 w-[30px] h-[30px]' ></FaPoundSign>
                            </div>
                            <div className="stat-title">Total Donations</div>
                            <div className="stat-value">{donations}</div>
                            <div className="stat-desc">↗︎ 400 (22%)</div>
                        </div>

                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <MdDescription className='text-violet-600 w-[30px] h-[30px]' ></MdDescription>
                            </div>
                            <div className="stat-title">Blood Sample</div>
                            <div className="stat-value">{blood.length}</div>
                            <div className="stat-desc">↘︎ 9 (14%)</div>
                        </div>
                        <div className="stat">
                            <div className="stat-figure text-secondary">
                                <FaGoogleScholar className='text-violet-600 w-[30px] h-[30px]' ></FaGoogleScholar>
                            </div>
                            <div className="stat-title">Articles</div>
                            <div className="stat-value">{blogs.length}</div>
                            <div className="stat-desc">↘︎ 3 (14%)</div>
                        </div>
                    </div>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        className='w-full'
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar
                            dataKey="Dashboard"
                            fill="#8884d8"
                            shape={<TriangleBar />}
                            label={{ position: 'top' }}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>

                <div className="bg-gray-300 border border-slate-200 grid grid-cols-6 gap-2 rounded-xl p-2 text-sm my-4">
                    <h1 className="text-center text-gray-600 text-xl font-bold col-span-6">
                        Send Messgae to All
                    </h1>
                    <textarea
                        placeholder="Your Description..."
                        className="bg-slate-100 text-slate-600 h-28 placeholder:text-slate-600 placeholder:opacity-50 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
                    />
                    <button className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 0 512 512"
                        >
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                    </button>
                    <button className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-100 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 0 512 512"
                        >
                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                        </svg>
                    </button>
                    <span className="col-span-2" />
                    <button className="bg-slate-100 stroke-slate-600 border border-slate-200 col-span-2 flex justify-center rounded-lg p-2 duration-300 hover:border-slate-600 hover:text-white focus:stroke-blue-200 focus:bg-blue-400">
                        <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            height="30px"
                            width="30px"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth={1.5}
                                d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"
                            />
                            <path
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth={1.5}
                                d="M10.11 13.6501L13.69 10.0601"
                            />
                        </svg>
                    </button>
                </div>

            </div>
            {/* <div className='w-[30%]  p-3'>
                <div>
                    <div>
                        <h1 className='text-2xl font-medium text-center'>Recent Payments</h1>
                    </div>
                    <div className="stat flex flex-col justify-center">
                        <div className="stat-figure text-secondary">
                            <FaDollarSign className='w-[30px] h-[30px] mb-2'></FaDollarSign>
                        </div>
                        <div className='flex justify-center border-2 p-2 rounded-badge'>
                            <div className=' flex flex-col justify-center'>
                                <div className="stat-title">Total Transaction</div>
                                <div className="stat-value">300</div>
                                <div className="stat-desc">↘︎ 90 (14%)</div>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <table className='table '>

                        <th>Amount</th>
                        <th>Email Address</th>
                        <tbody className=''>
 
                            
                            <tr className='border-2' >
                                <td> <span className='text-red-400 font-bold text-[20px]'>{' . '}</span> $ 400</td>
                                <td>saad.e.alfi340@gmail.com</td>
                            </tr>
                          
                            <tr className='border-2' >
                                <td> <span className='text-red-400 font-bold text-[20px]'>{' . '}</span> $ 400</td>
                                <td>saad.e.alfi340@gmail.com</td>
                            </tr>
                          
                            <tr className='border-2' >
                                <td> <span className='text-red-400 font-bold text-[20px]'>{' . '}</span> $ 400</td>
                                <td>saad.e.alfi340@gmail.com</td>
                            </tr>
                          
                            <tr className='border-2' >
                                <td> <span className='text-red-400 font-bold text-[20px]'>{' . '}</span> $ 400</td>
                                <td>saad.e.alfi340@gmail.com</td>
                            </tr>
                          
                            <tr className='border-2' >
                                <td> <span className='text-red-400 font-bold text-[20px]'>{' . '}</span> $ 400</td>
                                <td>saad.e.alfi340@gmail.com</td>
                            </tr>
                          


                        </tbody>
                    </table>
                </div>
            </div> */}
        </div>
    );
};

export default AdminHome;