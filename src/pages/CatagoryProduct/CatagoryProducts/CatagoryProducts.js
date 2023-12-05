import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Loading from '../../../compenents/Loading/Loading';
import BookNowModal from '../BookNowModal/BookNowModal';
import ProductCard from './ProductCard';
import ReactPaginate from 'react-paginate';
import './categoryProduct.css';

const CatagoryProducts = () => {
    const catagoryProduct = useLoaderData();
    const [isBookNow, setBookNow] = useState(null);
    const [allProduct, setAllProduct] = useState([]);
    const [isLoadings, setIsLoadings] = useState(true);
    const [limit, setLimit] = useState(6);
    const [pageCount, setPageCount] = useState(1);
    const currentPage = useRef();

    useEffect(() => {
        currentPage.current = 1;
        getPaginationList();
    }, [catagoryProduct?.data?.slug]);

    function handlePageClick(e) {
        console.log(e);
        currentPage.current = e.selected + 1;
        getPaginationList();
    }

    function getPaginationList() {
        const url = `${process.env.REACT_APP_URL}/api/products?page=${currentPage.current}&limit=${limit}&catagory_slug=${catagoryProduct?.data?.slug}`;
        fetch(url, {
            method: 'GET',
        })
            .then((res) => res.json())
            .then((data) => {
                setAllProduct(data?.data?.product);
                setPageCount(data?.data?.page);
                setIsLoadings(false);
            })
            .catch((err) => {
                setIsLoadings(false);
            });
    }

    if (isLoadings) {
        return <Loading></Loading>;
    }

    return (
        <div className="my-8 sm:my-10 md:my-12 lg:my-14 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="mb-8 sm:mb-8 md:mb-10 lg:mb-16 text-center flex justify-center ">
                <h1 className=" text-3xl font-bold  italic">laptop</h1>
                <hr className="border-2 w-7 border-[#149777]" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {allProduct?.map((product) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                        setBookNow={setBookNow}
                    ></ProductCard>
                ))}
            </div>
            {isBookNow && (
                <BookNowModal
                    isBookNow={isBookNow}
                    setBookNow={setBookNow}
                ></BookNowModal>
            )}

            <div className="mt-10">
                <ReactPaginate
                    breakLabel="......."
                    nextLabel=">>"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<<"
                    renderOnZeroPageCount={null}
                    marginPagesDisplayed={2}
                    containerClassName="pagination flex justify-end	 gap-2.5"
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    activeClassName="active"
                />
            </div>
        </div>
    );
};

export default CatagoryProducts;
