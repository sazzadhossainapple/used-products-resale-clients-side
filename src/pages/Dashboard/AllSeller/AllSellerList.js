import React from "react";
import toast from "react-hot-toast";

const AllSellerList = ({ seller, indx, refetch }) => {
  const { _id, UserName, email, userImage, role, isVerifed } = seller;

  const handleVerifySeller = (id) => {
    fetch(`https://e-shoppers-server.vercel.app/user/seller/${id}`, {
      method: "PATCH",
      //   headers: {
      //     authorization: `bearer ${localStorage.getItem("accessToken")}`,
      //   },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Seller Verified successfully");
          refetch();
        }
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteAction = (id) => {
    fetch(`https://e-shoppers-server.vercel.app/seller/${id}`, {
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
            <img src={userImage} alt="" />
          </div>
        </div>
      </td>
      <td>{UserName}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>
        {isVerifed === true ? (
          <>
            <p className="text-primary">
              <strong>Verified</strong>
            </p>
          </>
        ) : (
          <>
            <p className="">
              <strong>Unverified</strong>
            </p>
          </>
        )}
      </td>
      <td>
        <button
          onClick={() => handleDeleteAction(_id)}
          className="btn btn-xs border-none bg-red-500 hover:bg-red-600 mr-3"
        >
          delete
        </button>
        {isVerifed !== true && (
          <button
            onClick={() => handleVerifySeller(_id)}
            className="btn btn-xs
       bg-[#ffc600] border-none hover:bg-[#eebe0f] text-black"
          >
            Verify
          </button>
        )}
      </td>
    </tr>
  );
};

export default AllSellerList;
