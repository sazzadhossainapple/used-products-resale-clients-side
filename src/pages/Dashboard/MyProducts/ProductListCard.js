import React from "react";
import toast from "react-hot-toast";

const ProductListCard = ({ product, indx, refetch }) => {
  const {
    _id,
    productImage,
    productName,
    resalePrice,
    isSaleStatus,
    isAdvertisement,
  } = product;

  const handleDeleteAction = (id) => {
    fetch(`https://e-shoppers-server.vercel.app/sellerProduct/${id}`, {
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

  const handleAdvertisement = (id) => {
    fetch(`https://e-shoppers-server.vercel.app/sellerProduct/${id}`, {
      method: "PATCH",
      //   headers: {
      //     authorization: `bearer ${localStorage.getItem("accessToken")}`,
      //   },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Advertisement successfully");
          refetch();
        }
      })
      .catch((err) => console.log(err));
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
      <td>
        {isSaleStatus === true ? (
          <>
            <p className="text-[#ffc600]">
              <strong>Sold</strong>
            </p>
          </>
        ) : (
          <>
            <p className="">
              <strong>Unsold</strong>
            </p>
          </>
        )}
      </td>
      <td>
        {isAdvertisement === true ? (
          <>
            <p className="text-primary">
              <strong>Yes</strong>
            </p>
          </>
        ) : (
          <>
            <p className="">
              <strong>No</strong>
            </p>
          </>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDeleteAction(_id)}
          className="btn btn-xs  border-none bg-red-500 hover:bg-red-600 mr-3"
        >
          delete
        </button>
        {isAdvertisement !== true && (
          <button
            onClick={() => handleAdvertisement(_id)}
            className="btn btn-xs
         bg-[#ffc600] border-none hover:bg-[#eebe0f] text-black"
          >
            advertise
          </button>
        )}
      </td>
    </tr>
  );
};

export default ProductListCard;
