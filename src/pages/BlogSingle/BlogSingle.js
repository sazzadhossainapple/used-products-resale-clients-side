import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';

import Blog from '../../asserts/Images/blog/blog-2.jpg';
import './blogSingle.css';

function BlogSingle() {
    return (
        <div className="px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="my-10 sm:my-12 md:my-16 lg:my-20 ">
                <div className="mb-16 text-center flex justify-center ">
                    <h1 className=" text-3xl font-bold  italic">
                        Blog Details
                    </h1>
                    <hr className="border-2 w-7 border-[#149777]" />
                </div>
                <div className="card-img blog-details-img section-margin-top px-0">
                    <img src={Blog} alt="img" />
                </div>
                <div className="d-flex align-items-center justify-content-between blog-date-time">
                    <span>December 05, 2023</span>
                </div>
                <hr></hr>
                <div className="blog-single-title my-2">
                    <h4>Business Strategy Make His Goal Acheive.</h4>
                </div>
                <div className="">
                    <p className="blog-text-desc">
                        {/* <span
                                    dangerouslySetInnerHTML={{
                                        __html: data?.data?.description,
                                    }}
                                ></span> */}
                        <span>
                            E-Shoppers isn't just a project; it's a vision
                            realized. Crafted with meticulous planning and
                            foresight, it addresses the evolving needs of the
                            industry, positioning your business at the forefront
                            of innovation. We currently support Facebook,
                            Instagram, LinkedIn and Twitter. More to come. Felix
                            is purpose built for ease of use and complete
                            flexability.
                        </span>
                    </p>
                </div>
                <div className="mt-4 flex gap-4">
                    <span className="font-semibold">Share:</span>
                    <div className="flex items-center gap-3">
                        <Link to="">
                            <FaFacebook className="share-icon" />
                        </Link>
                        <Link to="">
                            <FaInstagramSquare className="share-icon" />
                        </Link>
                        <Link to="">
                            <FaTwitter className="share-icon" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogSingle;
