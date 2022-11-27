import React from "react";
import toast from "react-hot-toast";

const ReportedItemList = ({ reportedProduct, indx, refetch }) => {
  const { _id, productImage, productName, sellerName, email } = reportedProduct;

  const handleDeleteAction = (id) => {
    fetch(`https://e-shoppers-server.vercel.app/reportedProduct/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Product deleted successfully.`);
        }
      });
  };

  return (
    <tr>
      <th>{indx}</th>
      <td>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={productImage} alt="" />
          </div>
        </div>
      </td>
      <td>{productName}</td>
      <td>{sellerName}</td>
      <td>{email}</td>

      <td>
        <button
          onClick={() => handleDeleteAction(_id)}
          className="btn btn-xs border-none bg-red-500 hover:bg-red-600 mr-3"
        >
          delete
        </button>
      </td>
    </tr>
  );
};

export default ReportedItemList;
