import React from "react";
import toast from "react-hot-toast";

const ProductListCard = ({ product, indx, refetch }) => {
  const { _id, productImage, productName, resalePrice } = product;

  const handleDeleteAction = (id) => {
    fetch(`http://localhost:5000/sellerProduct/${id}`, {
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
          <div className="w-24 rounded-xl">
            <img src={productImage} alt="" />
          </div>
        </div>
      </td>
      <td>{productName}</td>
      <td>${resalePrice}</td>
      <td>Blue</td>
      <td>
        <button
          onClick={() => handleDeleteAction(_id)}
          className="btn btn-xs  border-none bg-red-500 hover:bg-red-600 mr-3"
        >
          delete
        </button>
        <button
          className="btn btn-xs
         bg-[#ffc600] border-none hover:bg-[#eebe0f] text-black"
        >
          advertise
        </button>
      </td>
    </tr>
  );
};

export default ProductListCard;
