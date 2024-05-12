import React from 'react';

export const ProductNameList = ({ indx, data, refetch }) => {
    const { catagoryName, _id } = data;
    return (
        <>
            <tr>
                <th>{indx}</th>
                <td>{catagoryName ? catagoryName : 'N/A'}</td>
                <td>
                    <div className="flex items-center gap-1">
                        <button
                            //   onClick={() => handleVerifySeller(_id)}
                            htmlFor="my-modal-3"
                            className="btn btn-xs
     bg-[#ffc600] border-none hover:bg-[#eebe0f] text-black"
                        >
                            Edit
                        </button>
                        <button
                            //   onClick={() => handleVerifySeller(_id)}
                            className="btn btn-xs
     bg-red-500 border-none hover:bg-red-500 text-white"
                        >
                            Delete
                        </button>
                    </div>
                </td>
            </tr>
        </>
    );
};
