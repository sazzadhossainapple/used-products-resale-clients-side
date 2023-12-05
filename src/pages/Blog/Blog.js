import React from 'react';
import './blog.css';
import Blog1 from '../../asserts/Images/blog/blog-1.jpg';
import Blog2 from '../../asserts/Images/blog/blog-2.jpg';
import Blog3 from '../../asserts/Images/blog/blog-3.jpg';
import BlogCard from '../../compenents/BlogCard/BlogCard';

const blogData = [
    {
        id: 1,
        title: 'Business Strategy Make His Goal Acheive.',
        desc: `<p>We currently support Facebook, Instagram,
       LinkedIn and Twitter. More to come. Felix is
       purpose built for ease of use and complete
       flexability.</p>`,
        img: Blog1,
        link: '',
        date: 'December 05, 2023',
    },
    {
        id: 2,
        title: 'Business Strategy Make His Goal Acheive.',
        desc: `<p>We currently support Facebook, Instagram,
       LinkedIn and Twitter. More to come. Felix is
       purpose built for ease of use and complete
       flexability.</p>`,
        img: Blog2,
        link: '',
        date: 'December 05, 2023',
    },
    {
        id: 3,
        title: 'Business Strategy Make His Goal Acheive.',
        desc: `<p>We currently support Facebook, Instagram,
       LinkedIn and Twitter. More to come. Felix is
       purpose built for ease of use and complete
       flexability.</p>`,
        img: Blog3,
        link: '',
        date: 'December 05, 2023',
    },
];

const Blog = () => {
    return (
        <div className="px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="my-10 sm:my-12 md:my-16 lg:my-20 ">
                <div className="mb-16 text-center flex justify-center ">
                    <h1 className=" text-3xl font-bold  italic">Blog</h1>
                    <hr className="border-2 w-7 border-[#149777]" />
                </div>

                <div className="blog-container">
                    {blogData?.map((data) => (
                        <BlogCard data={data} key={data.id} />
                    ))}
                </div>

                <div className="flex justify-center space-x-1 dark:text-gray-100 mt-14">
                    <button
                        title="previous"
                        type="button"
                        className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4"
                        >
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>
                    <button
                        type="button"
                        title="Page 1"
                        className="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold border rounded shadow-md dark:bg-gray-900 dark:text-violet-400 dark:border-violet-400"
                    >
                        1
                    </button>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
                        title="Page 2"
                    >
                        2
                    </button>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
                        title="Page 3"
                    >
                        3
                    </button>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md dark:bg-gray-900 dark:border-gray-800"
                        title="Page 4"
                    >
                        4
                    </button>
                    <button
                        title="next"
                        type="button"
                        className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4"
                        >
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blog;
