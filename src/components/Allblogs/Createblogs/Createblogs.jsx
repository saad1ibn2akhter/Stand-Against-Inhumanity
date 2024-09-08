import React, { useContext, useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Authprovider/AuthProvider';

const Createblogs = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const [title, setTitle] = useState('');
    const [tags, setTags] = useState('');
    const [selectedFile1, setSelectedFile1] = useState(null);
    const [selectedFile2, setSelectedFile2] = useState(null);
    const [selectedFile3, setSelectedFile3] = useState(null);
    const [selectedFile4, setSelectedFile4] = useState(null);

    const isUnderDevelopment = true;

    const handleFileChange1 = (e) => {
        const file = e.target.files[0];
        setSelectedFile1(file);
    };

    const handleFileChange2 = (e) => {
        const file = e.target.files[0];
        setSelectedFile2(file);
    };

    const handleFileChange3 = (e) => {
        const file = e.target.files[0];
        setSelectedFile3(file);
    };

    const handleFileChange4 = (e) => {
        const file = e.target.files[0];
        setSelectedFile4(file);
    };

    const createSubmission = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const image1 = form.get('image1');
        const image2 = form.get('image2');
        const image3 = form.get('image3');
        const image4 = form.get('image4');

        const paragraph1 = form.get('paragraph1');
        const paragraph2 = form.get('paragraph2');
        const paragraph3 = form.get('paragraph3');
        const Quote = form.get('Quote');
        const date = form.get('date');
        const blogData = {
            title,
            tags,
            image1,
            image2,
            image3,
            image4,
            paragraph1,
            paragraph2,
            paragraph3,
            Quote,
            publisher: user?.displayName,
            role: 'Admin',
            date,

        };

        axiosPublic.post('/blogs', blogData)
            .then(res => {
                console.log(res);
                toast.success("Published Succesfully !")
            })
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <div>
            <form onSubmit={createSubmission}>
                <div className='flex justify-center flex-col text-center font-mons'>
                    <img className='mx-auto' width="100" height="100" src="https://img.icons8.com/bubbles/100/writer-male.png" alt="writer-male" />
                    <h1 className='text-xl font-medium'>Create new Article</h1>
                    <p className='text-gray-500 text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, deleniti?</p>
                </div>
                <div className='max-w-4xl mx-auto my-6 font-mons mb-3'>
                    <div className='flex space-x-2 items-center  mb-4'>
                        <img width="30" height="30" src="https://img.icons8.com/color/100/headline.png" alt="headline" />
                        <h1 className='mt-1'>Title and tags</h1>
                    </div>
                    <input
                        type='text'
                        className='input-bordered w-full border-2 p-3 mb-3'
                        placeholder='Blog Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type='text'
                        className='input-bordered w-full border-2 p-3 mb-3'
                        placeholder='Tags (comma separated)'
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>

                <div>
                    {
                        !isUnderDevelopment && <>
                            <div className="relative my-6 max-w-4xl mx-auto">
                                <input
                                    id="id-dropzone01"
                                    name="file-upload-1"
                                    type="file"
                                    className="hidden"
                                    onChange={handleFileChange1}
                                />
                                <label
                                    htmlFor="id-dropzone01"
                                    className="relative flex cursor-pointer flex-col items-center gap-4 rounded border border-dashed border-slate-300 px-3 py-6 text-center text-sm font-medium transition-colors"
                                >
                                    <span className="inline-flex h-12 items-center justify-center self-center rounded-full bg-slate-100/70 px-3 text-slate-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-label="File input icon"
                                            role="graphics-symbol"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-slate-500">
                                        Drag & drop or
                                        <span className="text-emerald-500"> upload a file</span>
                                    </span>
                                </label>
                                <div className="mt-4 text-center">
                                    {selectedFile1 ? (
                                        <p className="text-green-500">File selected: {selectedFile1.name}</p>
                                    ) : (
                                        <p className="text-red-500">No file selected</p>
                                    )}
                                </div>
                            </div>

                            <div className="relative my-6 max-w-4xl mx-auto">
                                <input
                                    id="id-dropzone02"
                                    name="file-upload-2"
                                    type="file"
                                    className="hidden"
                                    onChange={handleFileChange2}
                                />
                                <label
                                    htmlFor="id-dropzone02"
                                    className="relative flex cursor-pointer flex-col items-center gap-4 rounded border border-dashed border-slate-300 px-3 py-6 text-center text-sm font-medium transition-colors"
                                >
                                    <span className="inline-flex h-12 items-center justify-center self-center rounded-full bg-slate-100/70 px-3 text-slate-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-label="File input icon"
                                            role="graphics-symbol"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-slate-500">
                                        Drag & drop or
                                        <span className="text-emerald-500"> upload a file</span>
                                    </span>
                                </label>
                                <div className="mt-4 text-center">
                                    {selectedFile2 ? (
                                        <p className="text-green-500">File selected: {selectedFile2.name}</p>
                                    ) : (
                                        <p className="text-red-500">No file selected</p>
                                    )}
                                </div>
                            </div>

                            <div className="relative my-6 max-w-4xl mx-auto">
                                <input
                                    id="id-dropzone03"
                                    name="file-upload-3"
                                    type="file"
                                    className="hidden"
                                    onChange={handleFileChange3}
                                />
                                <label
                                    htmlFor="id-dropzone03"
                                    className="relative flex cursor-pointer flex-col items-center gap-4 rounded border border-dashed border-slate-300 px-3 py-6 text-center text-sm font-medium transition-colors"
                                >
                                    <span className="inline-flex h-12 items-center justify-center self-center rounded-full bg-slate-100/70 px-3 text-slate-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-label="File input icon"
                                            role="graphics-symbol"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-slate-500">
                                        Drag & drop or
                                        <span className="text-emerald-500"> upload a file</span>
                                    </span>
                                </label>
                                <div className="mt-4 text-center">
                                    {selectedFile3 ? (
                                        <p className="text-green-500">File selected: {selectedFile3.name}</p>
                                    ) : (
                                        <p className="text-red-500">No file selected</p>
                                    )}
                                </div>
                            </div>

                            <div className="relative my-6 max-w-4xl mx-auto">
                                <input
                                    id="id-dropzone04"
                                    name="file-upload-4"
                                    type="file"
                                    className="hidden"
                                    onChange={handleFileChange4}
                                />
                                <label
                                    htmlFor="id-dropzone04"
                                    className="relative flex cursor-pointer flex-col items-center gap-4 rounded border border-dashed border-slate-300 px-3 py-6 text-center text-sm font-medium transition-colors"
                                >
                                    <span className="inline-flex h-12 items-center justify-center self-center rounded-full bg-slate-100/70 px-3 text-slate-400">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-label="File input icon"
                                            role="graphics-symbol"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-6 w-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                                            />
                                        </svg>
                                    </span>
                                    <span className="text-slate-500">
                                        Drag & drop or
                                        <span className="text-emerald-500"> upload a file</span>
                                    </span>
                                </label>
                                <div className="mt-4 text-center">
                                    {selectedFile4 ? (
                                        <p className="text-green-500">File selected: {selectedFile4.name}</p>
                                    ) : (
                                        <p className="text-red-500">No file selected</p>
                                    )}
                                </div>
                            </div>
                        </>
                    }
                </div>

                <div className='max-w-4xl mx-auto py-2 font-mons'>
                    <div className='flex items-center space-x-3'>
                        <img width="30" height="30" src="https://img.icons8.com/fluency/50/image--v1.png" alt="image--v1" />
                        <h1>Thumbnails</h1>
                    </div>
                    <input type="text" name='image1' className='border-[1.5px] w-full p-2 my-3 input border-gray-700 rounded-none' placeholder='Thumbnail 1 -large' />
                    <input type="text" name='image2' className='border-[1.5px] w-full p-2 my-3 input border-gray-700 rounded-none' placeholder='Thumbnail 2 -medium' />
                    <input type="text" name='image3' className='border-[1.5px] w-full p-2 my-3 input border-gray-700 rounded-none' placeholder='Thumbnail 3 -small' />
                    <input type="text" name='image4' className='border-[1.5px] w-full p-2 my-3 input border-gray-700 rounded-none' placeholder='Thumbnail 4 -small' />
                </div>

                <div className='max-w-4xl mx-auto'>
                    <div className='items-center flex space-x-2 mb-2'>
                        <img width="30" height="30" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/external-description-logistics-flaticons-lineal-color-flat-icons-3.png" alt="external-description-logistics-flaticons-lineal-color-flat-icons-3" />
                        <h1>Descriptions and Quote</h1>
                    </div>

                    <textarea name="paragraph1" className='textarea-bordered w-full border-2 p-3 mb-3' id="" placeholder='Paragraph 1'></textarea>
                    <textarea name="paragraph2" className='textarea-bordered w-full  border-2 p-3 mb-3' id="" placeholder='Paragraph 2'></textarea>
                    <textarea name="paragraph3" className='textarea-bordered w-full  border-2 p-3 mb-3' id="" placeholder='Paragraph 3'></textarea>
                    <textarea name="Quote" className='textarea-bordered w-full  border-2 p-3 mb-3' id="" placeholder='Quote'></textarea>
                </div>
                <div className='max-w-[300px] mx-auto mb-3'>
                    <input type="date" name="date" className='input w-full border-[1.5px] border-gray-400 rounded-none' id="" />
                </div>

                <div className='max-w-xl mx-auto'>
                    <button type="submit" className='w-full mx-auto btn bg-teal-100 text-teal-600'>Publish Blog</button>
                </div>
                <ToastContainer />
            </form>
        </div>
    );
};

export default Createblogs;
