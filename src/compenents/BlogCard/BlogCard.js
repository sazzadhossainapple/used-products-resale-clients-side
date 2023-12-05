import React from 'react';
import './blogCard.css';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import moment from 'moment';

function BlogCard({ data }) {
    const { title, desc, img, id, date } = data;
    const dates = moment(date).format('MMMM D, YYYY');
    return (
        <div className="blog-card">
            <Link to={`/blog/blog-details`}>
                <div className="card-img">
                    <img src={img} alt="image" />
                </div>
            </Link>

            <div className="card-body-content">
                <div className="d-flex align-items-center justify-content-between blog-date-time">
                    <span>{dates}</span>
                </div>
                <hr></hr>
                <div className="blog-name-title">
                    <Link to={`/blog/blog-details`}>
                        <h4>
                            {title?.length > 38
                                ? `${title?.slice(0, 38)} .....`
                                : title}
                        </h4>
                    </Link>
                </div>
                <p className="blog-text-desc">
                    <span
                        dangerouslySetInnerHTML={{
                            __html:
                                desc?.length > 100
                                    ? `${desc?.slice(0, 100)} ...`
                                    : desc,
                        }}
                    ></span>
                </p>
                <div className="mt-4 ">
                    <Link
                        to={`/blog/blog-details`}
                        className="border-0 bg-transparent flex items-center gap-2 link-learnMore"
                    >
                        View More
                        <BsArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
