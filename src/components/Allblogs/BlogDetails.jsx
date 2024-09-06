import React from 'react';
import blog from '../../assets/blogs.png'
const BlogDetails = () => {
    return (
        <div >
            <div className='flex justify-between items-start max-w-7xl space-x-8 mx-auto font-poppins mt-4'>
                {/* flex 1 */}
                <div className='w-[65%] border-2 p-2 rounded-2xl'>
                    <div>
                        <img className='w-full h-[480px] rounded-3xl table-fixed' src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1800" alt="" />
                    </div>

                    <div className='flex justify-end pt-2 font-medium'>
                        <div className='flex items-center space-x-3'>
                            <img width="36" height="36" src="https://img.icons8.com/color/100/calendar--v1.png" alt="calendar--v1" />
                            <h1>24-12-2024</h1>
                        </div>
                    </div>

                    <div className='text-2xl font-semibold text-pretty uppercase my-3 '>
                        <h1>বাংলাদেশের অ্যাডভেঞ্চার: অজানা সৌন্দর্যের পথে</h1>
                    </div>

                    <div lang='ban' className='flex items-center space-x-3'>
                        <h1 className='badge bg-red-100 text-red-500'>Blog</h1>
                        <h1 className='badge bg-red-100 text-red-500'>Adventure</h1>
                        <h1 className='badge bg-red-100 text-red-500'>Donation</h1>
                    </div>

                    <div className='mt-8 mb-6  text-[15px] text-gray-600'>
                        <p>বাংলাদেশ, শুধু প্রাকৃতিক সৌন্দর্যের জন্যই নয়, অ্যাডভেঞ্চারের অনন্য অভিজ্ঞতার জন্যও বিখ্যাত। এই দেশজুড়ে ছড়িয়ে আছে পাহাড়, নদী, সাগর ও বন, যা অ্যাডভেঞ্চারপ্রেমীদের জন্য এক চমৎকার গন্তব্য। পার্বত্য চট্টগ্রামের পাহাড়ি পথে ট্রেকিং, সুন্দরবনের বাঘের রাজ্যে নৌকা ভ্রমণ, কক্সবাজারের সৈকতে সাগর স্নান—প্রতিটি অভিজ্ঞতা অ্যাডভেঞ্চারের এক নতুন স্বাদ এনে দেয়। সিলেটের চা-বাগান, বান্দরবানের নীলগিরি, আর রাঙামাটির কাপ্তাই লেকও অ্যাডভেঞ্চারপ্রেমীদের জন্য বিশেষ আকর্ষণ। বাংলাদেশের প্রতিটি কোণায় লুকিয়ে আছে অ্যাডভেঞ্চারের অপার সম্ভাবনা, যা শুধু মনোরঞ্জন নয়, বরং মনকে নতুন করে জাগিয়ে তোলে। যারা প্রকৃতির সাথে মিশে জীবনের রোমাঞ্চ খুঁজছেন, তাদের জন্য বাংলাদেশ এক আদর্শ স্থান।</p>
                    </div>


                    <div className='grid grid-cols-2 my-20 gap-[36px] w-full'>
                        <div className='col-span-1'>
                            <img className='w-full h-full max-h-[400px] rounded-3xl' src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        </div>
                        <div className='grid grid-cols-1 gap-[36px]'>
                            <img className='w-full h-full max-h-[200px] rounded-3xl' src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                            <img className='w-full h-full max-h-[200px] rounded-3xl' src="https://images.pexels.com/photos/1576937/pexels-photo-1576937.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                        </div>
                    </div>

                    <div className='mt-8 mb-6 text-[15px] text-gray-600'>
                        <p>বাংলাদেশের প্রাকৃতিক সৌন্দর্য ও বৈচিত্র্যময় ভূপ্রকৃতির কারণে এটি এক অসাধারণ অ্যাডভেঞ্চারের গন্তব্য। রাঙামাটির পাহাড়ি এলাকায় অরণ্য ভ্রমণ এবং মেঘনার নদীর তীরে নৌকা চালানো এমন অভিজ্ঞতা, যা মনে গেঁথে যায়। সেন্ট মার্টিনের দ্বীপের সোনালী বালুকা এবং স্বচ্ছ পানির সমুদ্র সৈকত, ডুবসাঁতার ও মৎস শিকারের জন্য আদর্শ স্থান। কক্সবাজারের হিমালয়নীয় সৈকত, বান্দরবানের মেঘে ঢাকা পাহাড় এবং সিলেটের ঝরনার জলধারা একেবারেই অনন্য অভিজ্ঞতা প্রদান করে। সবুজের ভেতরে হাইকিং এবং কাপ্তাই লেকের নৌকা ভ্রমণ, বাংলার প্রকৃতির রহস্য উন্মোচনে সাহায্য করে। বাংলাদেশে প্রাকৃতিক সৌন্দর্যের এই অসাধারণ মেলবন্ধন নতুন এবং আগ্রহজনক অভিজ্ঞতার সন্ধান দেয়।</p>
                    </div>

                    <div className="overflow-hidden text-slate-500">
                        <div className="relative p-6">
                            <figure className="relative z-10">
                                <blockquote className="p-6 text-lg leading-relaxed">
                                    <p>
                                        বাংলাদেশের প্রকৃতির অদেখা রূপ ও অ্যাডভেঞ্চার প্রীতিতে সিক্ত, সেন্ট মার্টিন থেকে সুন্দরবন পর্যন্ত অভূতপূর্ব অভিজ্ঞতা!
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center gap-4 p-6 pt-2 text-sm text-emerald-500">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-bold uppercase">মোহাম্মদ আহমেদ</span>
                                        <cite className="not-italic">
                                            <a href="http://www.george-orwell.org/1984/0.html ck">
                                                পর্যটন বিশেষজ্ঞ
                                            </a>
                                        </cite>
                                    </div>
                                </figcaption>
                            </figure>
                            <svg
                                aria-hidden="true"
                                className="absolute z-0 h-16 left-6 top-6"
                                viewBox="0 0 17 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.79187 3.83333C2.66179 3.83333 2.53696 3.85316 2.41271 3.87125C2.45296 3.73591 2.49437 3.59825 2.56087 3.47458C2.62737 3.29491 2.73121 3.13916 2.83446 2.98225C2.92079 2.8125 3.07304 2.69758 3.18504 2.55233C3.30229 2.41116 3.46212 2.31725 3.58871 2.2C3.71296 2.0775 3.87571 2.01625 4.00521 1.92991C4.14054 1.85233 4.25837 1.76658 4.38437 1.72575L4.69879 1.59625L4.97529 1.48133L4.69237 0.35083L4.34412 0.43483C4.23271 0.46283 4.09679 0.495496 3.94221 0.53458C3.78412 0.563746 3.61554 0.643663 3.42771 0.71658C3.24221 0.799413 3.02754 0.855413 2.82804 0.988413C2.62737 1.11558 2.39579 1.22175 2.19162 1.39208C1.99387 1.56766 1.75529 1.71991 1.57912 1.94333C1.38662 2.15216 1.19646 2.3715 1.04887 2.62116C0.877957 2.85916 0.761873 3.1205 0.639373 3.37891C0.52854 3.63733 0.43929 3.90158 0.366373 4.15825C0.228123 4.67275 0.16629 5.16158 0.142373 5.57983C0.12254 5.99866 0.134207 6.34691 0.158707 6.59891C0.167457 6.71791 0.18379 6.83341 0.195457 6.91333L0.21004 7.01133L0.225207 7.00783C0.328959 7.49248 0.567801 7.93786 0.914102 8.29243C1.2604 8.64701 1.70001 8.89631 2.18208 9.01148C2.66415 9.12665 3.16897 9.10299 3.63815 8.94323C4.10733 8.78348 4.52169 8.49416 4.83331 8.10874C5.14493 7.72333 5.34107 7.25757 5.39903 6.76534C5.457 6.27311 5.37443 5.77452 5.16087 5.32726C4.94731 4.88 4.61149 4.50233 4.19225 4.23796C3.77302 3.97358 3.28751 3.8333 2.79187 3.83333V3.83333ZM9.20854 3.83333C9.07846 3.83333 8.95362 3.85316 8.82937 3.87125C8.86962 3.73591 8.91104 3.59825 8.97754 3.47458C9.04404 3.29491 9.14787 3.13916 9.25112 2.98225C9.33746 2.8125 9.48971 2.69758 9.60171 2.55233C9.71896 2.41116 9.87879 2.31725 10.0054 2.2C10.1296 2.0775 10.2924 2.01625 10.4219 1.92991C10.5572 1.85233 10.675 1.76658 10.801 1.72575L11.1155 1.59625L11.392 1.48133L11.109 0.35083L10.7608 0.43483C10.6494 0.46283 10.5135 0.495496 10.3589 0.53458C10.2008 0.563746 10.0322 0.643663 9.84437 0.71658C9.65946 0.799997 9.44421 0.855413 9.24471 0.988997C9.04404 1.11616 8.81246 1.22233 8.60829 1.39266C8.41054 1.56825 8.17196 1.7205 7.99579 1.94333C7.80329 2.15216 7.61312 2.3715 7.46554 2.62116C7.29462 2.85916 7.17854 3.1205 7.05604 3.37891C6.94521 3.63733 6.85596 3.90158 6.78304 4.15825C6.64479 4.67275 6.58296 5.16158 6.55904 5.57983C6.53921 5.99866 6.55087 6.34691 6.57537 6.59891C6.58412 6.71791 6.60046 6.83341 6.61212 6.91333L6.62671 7.01133L6.64187 7.00783C6.74563 7.49248 6.98447 7.93786 7.33077 8.29243C7.67707 8.64701 8.11668 8.89631 8.59875 9.01148C9.08081 9.12665 9.58563 9.10299 10.0548 8.94323C10.524 8.78348 10.9384 8.49416 11.25 8.10874C11.5616 7.72333 11.7577 7.25757 11.8157 6.76534C11.8737 6.27311 11.7911 5.77452 11.5775 5.32726C11.364 4.88 11.0282 4.50233 10.6089 4.23796C10.1897 3.97358 9.70417 3.8333 9.20854 3.83333V3.83333Z"
                                    className="fill-emerald-50"
                                />
                            </svg>
                        </div>
                    </div>

                    <div className='mt-8 mb-6 text-[15px] text-gray-600'>
                        <p>বাংলাদেশের প্রাকৃতিক সৌন্দর্যের একটি বিশেষ বৈশিষ্ট্য হল এর অদেখা রূপ ও একদম নতুন অভিজ্ঞতা। সুন্দরবনের ঘন জঙ্গলে ম্যানগ্রোভ বনের ভেতর অদ্ভুত প্রাণীর সাথে সাক্ষাৎ ও বাঘের রাজ্যে নৌকা ভ্রমণের অভিজ্ঞতা একদম ব্যতিক্রমী। মেট্রো শহরের উত্তেজনা থেকে দূরে, হিমালয়নীয় মেঘমাখা বান্দরবানের সীতাকুণ্ড এবং সিলেটের চা-বাগানের মাঝে ছায়ায় ঘুরে বেড়ানো যেমন প্রশান্তি প্রদান করে, তেমনি রহস্যও জাগায়। পাহাড়ি পথে ট্রেকিং করে ও পাহাড়ের কোলে ছড়িয়ে থাকা হ্রদে নৌকায় ভ্রমণ করে প্রকৃতির অজানা রূপ আবিষ্কার করা সম্ভব। বাংলাদেশে থাকা এই প্রাকৃতিক বিস্ময়গুলি প্রকৃতির প্রেমিকদের জন্য এক বিশেষ অভিজ্ঞতার প্রতিশ্রুতি দেয়।</p>
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
                            <h1 className='shrink font-medium'>Saad Akhter</h1>
                            <h1 className='font-semibold '>Volunteer <span className='font-medium'> , Stand Against Inhumanity</span></h1>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;