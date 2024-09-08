import React, { useEffect, useState } from 'react';
import blog from '../../assets/blogs.png'
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';
import { useToast } from 'react-toastify';
const BlogDetails = () => {
    const axiosPublic = useAxiosPublic();
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState([]);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        axiosPublic.get('/blogs')
            .then(res => {
                console.log(res);
                const allData = res.data;
                setAllData(allData);
                const requiredData = allData.find(x => x._id === id);
                if (requiredData) {
                    setData(requiredData);
                }
            })
    }, [])

    console.log('data from params search', data)



    return (
        <div >
            <div className='flex justify-between items-start max-w-7xl space-x-8 mx-auto font-mons mt-4'>
                {/* flex 1 */}
                <div className='max-w-[65%] border-2 p-2 rounded-2xl'>
                    <div>
                        <img className='w-full h-[480px] rounded-3xl ' src={data.image1} alt="" />
                    </div>

                    <div className='flex justify-end pt-2 font-medium'>
                        <div className='flex items-center space-x-3'>
                            <img width="36" height="36" src="https://img.icons8.com/color/100/calendar--v1.png" alt="calendar--v1" />
                            <h1>{data?.date}</h1>
                        </div>
                    </div>

                    <div className='text-2xl font-semibold  uppercase my-3 '>
                        <h1>{data?.title}</h1>
                    </div>

                    <div lang='ban' className='flex items-center space-x-3'>
                        <h1 className='badge bg-red-100 text-red-500'>Blog</h1>
                        <h1 className='badge bg-red-100 text-red-500'>Adventure</h1>
                        <h1 className='badge bg-red-100 text-red-500'>Donation</h1>
                    </div>

                    <div className='mt-8 mb-6  text-[15px] text-gray-600 '>
                        <p>{data?.paragraph1}</p>
                    </div>


                    <div className='grid grid-cols-2 my-20 gap-[36px] w-full'>
                        <div className='col-span-1'>
                            <img className='w-full h-full max-h-[400px] rounded-3xl' src={data?.image2} alt="" />
                        </div>
                        <div className='grid grid-cols-1 gap-[36px]'>
                            <img className='w-full h-full max-h-[200px] rounded-3xl' src={data?.image3} alt="" />
                            <img className='w-full h-full max-h-[200px] rounded-3xl' src={data?.image4} alt="" />
                        </div>
                    </div>

                    <div className='mt-8 mb-6 text-[15px] text-gray-600'>
                        <p>{data?.paragraph2}</p>
                    </div>

                    <div className="overflow-hidden text-slate-500">
                        <div className="relative p-6">
                            <figure className="relative z-10">
                                <blockquote className="p-6 text-lg leading-relaxed">
                                    <p>
                                        {data?.Quote}
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center gap-4 p-6 pt-2 text-sm text-emerald-500">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold uppercase">{data?.publisher}</span>
                                        <cite className="not-italic">
                                            <a href="http://www.george-orwell.org/1984/0.html ck">
                                                {data?.role}
                                            </a>
                                        </cite>
                                    </div>
                                </figcaption>
                            </figure>
                            <img width="50" height="50" src="https://img.icons8.com/ios/100/40C057/quote--v1.png" alt="quote--v1" />
                        </div>
                    </div>

                    <div className='mt-8 mb-6 text-[15px] text-gray-600'>
                        <p>{data?.paragraph3}</p>
                    </div>

                    <div className='flex justify-between items-center mt-8'>
                        <div className='flex items-center space-x-3'>
                            <img width="80" height="80" className='mr-10' src="https://img.icons8.com/plasticine/100/long-arrow-right.png" alt="long-arrow-right" />
                            <img width="36" height="36" src="https://img.icons8.com/pulsar-color/48/facebook-like.png" alt="facebook-like" /> 10
                            <img width="36" height="36" src="https://img.icons8.com/pulsar-gradient/48/poor-quality.png" alt="poor-quality" /> 3
                        </div>
                        <div className='flex items-center space-x-3'>
                            <img width="40" height="40" src="https://img.icons8.com/fluency/50/linkedin.png" alt="linkedin" />
                            <img width="40" height="40" src="https://img.icons8.com/color/100/facebook-new.png" alt="facebook-new" />
                            <img width="40" height="40" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1" />
                            <img width="40" height="40" src="https://img.icons8.com/cute-clipart/64/instagram-new.png" alt="instagram-new" />
                        </div>

                    </div>



                </div>
                {/* flex 2 */}
                <div className='w-[35%]'>
                    <div>
                        <img src='https://i.pinimg.com/564x/5d/2b/ed/5d2bed018368fdd2b615eb35c63cc86a.jpg' className='rounded-2xl' alt="" />
                    </div>
                    <div className="uppercase  font-semibold flex items-center gap-2 whitespace-nowrap py-3 text-[22px] focus:outline-none lg:flex-1" >
                        <img width="80" height="80" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-defence-martial-arts-flaticons-lineal-color-flat-icons.png" alt="external-defence-martial-arts-flaticons-lineal-color-flat-icons" />
                        <div className=" ">
                            <h1 className="leading-tight tracking-tighter">Stand Against <span className="text-red-700 font-bold leading-tight tracking-tighter">Inhumanity</span></h1>
                            <h1 className="text-[11px] ">Empowering youth for better <span className="text-green-600">Ban</span><span className="text-red-600">glad</span><span className="text-green-600">desh</span></h1>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <img className='w-[48px] h-[48px] rounded-full' src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=180" alt="" />
                        <div className=' font-poppins '>
                            <h1 className='shrink font-medium'>{data?.publisher}</h1>
                            <h1 className='font-semibold '>{data?.role} <span className='font-medium'> , Stand Against Inhumanity</span></h1>
                        </div>
                    </div>

                    <div className='mt-6'>
                        <div className='text-center my-3 mb-12'>
                            <h1 className='font-bold'>All Blogs</h1>
                            <h1 className='text-gray-500 text-[14.5px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
                        </div>
                        <div className='flex items-center space-x-4 border-[1px] rounded-xl p-2 mb-3'>
                            <div className='w-[160px] h-[100px]'>
                                <img className='w-full h-full rounded-xl' src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=180" alt="" />
                            </div>
                            <div className='space-y-1'>
                                <h1 className='capitalize font-medium text-[15px]'>Saad ibn Akhter</h1>
                                <h1 className='text-[14px] font-semibold'>journalist</h1>
                                <p className='text-[13px] text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, exercitationem! ...</p>
                                <div className='flex items-center space-x-3'>
                                    <img width="20" height="20" src="https://img.icons8.com/color/100/calendar--v1.png" alt="calendar--v1" />
                                    <h1 className='text-[14px]'>24-12-2024</h1>
                                </div>
                            </div>
                        </div>
                        {
                            allData.map((info, index) => <>

                                <div key={index} className='flex items-center space-x-4 border-[1px] rounded-xl p-2 mb-3'>
                                    <div className='min-w-[100px] min-h-[100px] max-w-[120px] max-h-[120px] '>
                                        <img className='w-full h-full rounded-xl' src={info?.image1} alt="" />
                                    </div>
                                    <div className='space-y-1'>
                                        <h1 className='capitalize font-medium text-[15px]'>{info?.publisher}</h1>
                                        <h1 className='text-[14px] font-semibold'>{info?.role}</h1>
                                        <p className='text-[13px] text-gray-600'>{info?.paragraph1.slice(0,50)}</p>
                                        <div className='flex items-center space-x-3'>
                                            <img width="20" height="20" src="https://img.icons8.com/color/100/calendar--v1.png" alt="calendar--v1" />
                                            <h1 className='text-[14px]'>{info?.date}</h1>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        }


                    </div>
                </div>
            </div>
        </div>

    );
};

export default BlogDetails;