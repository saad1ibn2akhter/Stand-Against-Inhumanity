import React, { useState } from 'react';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Createblogs = () => {
    const axiosPublic = useAxiosPublic();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };
    const createSubmission = (e) => {
        e.preventDefault();

        const blogData = {

        };

        axiosPublic.post('/blogs', blogData)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <form action="">
                <div className="relative my-6 max-w-4xl mx-auto">
                    <input
                        id="id-dropzone01"
                        name="file-upload"
                        type="file"
                        className="hidden "
                        onChange={handleFileChange}
                    />
                    <label
                        for="id-dropzone01"
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
                        {selectedFile ? (
                            <p className="text-green-500">File selected: {selectedFile.name}</p>
                        ) : (
                            <p className="text-red-500">No file selected</p>
                        )}
                    </div>
                </div>

                <div className='max-w-4xl mx-auto'>
                    <input type="text" name="title" className='input border-[1px] w-full border-gray-600 rounded-none' placeholder='Blog Title' id="" />
                    <input type="text" name='tags' className='input border-[1px] w-[80%] mt-4 border-gray-600 rounded-none' placeholder='All tags . seggregate with comma `,`' />
                </div>

                <div className="relative my-6 max-w-4xl mx-auto">
                    <input
                        id="id-dropzone01"
                        name="file-upload"
                        type="file"
                        className="hidden "
                    />
                    <label
                        for="id-dropzone01"
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
                    {

                    }
                </div>
                <div className="relative my-6 max-w-4xl mx-auto">
                    <input
                        id="id-dropzone01"
                        name="file-upload"
                        type="file"
                        className="hidden "
                    />
                    <label
                        for="id-dropzone01"
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
                </div>
                <div className="relative my-6 max-w-4xl mx-auto">
                    <input
                        id="id-dropzone01"
                        name="file-upload"
                        type="file"
                        className="hidden "
                    />
                    <label
                        for="id-dropzone01"
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
                </div>

                <div className='max-w-4xl mx-auto'>
                    <textarea name="paragraph1" className='textarea-bordered w-full border-2 p-3 mb-3' id="" placeholder='Paragraph 1'></textarea>
                    <textarea name="paragraph2" className='textarea-bordered w-full  border-2 p-3 mb-3' id="" placeholder='Paragraph 2'></textarea>
                    <textarea name="paragraph3" className='textarea-bordered w-full  border-2 p-3 mb-3' id="" placeholder='Paragraph 3'></textarea>
                    <textarea name="Quote" className='textarea-bordered w-full  border-2 p-3 mb-3' id="" placeholder='Quote'></textarea>
                </div>

                <div className='max-w-xl mx-auto'>
                    <button className='w-full mx-auto btn bg-teal-100 text-teal-600'>Publish Blog</button>
                </div>
            </form>
        </div>
    );
};

export default Createblogs;