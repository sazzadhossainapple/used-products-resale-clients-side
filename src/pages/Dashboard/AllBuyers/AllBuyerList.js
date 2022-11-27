import React from "react";
import toast from "react-hot-toast";

const AllBuyerList = ({ buyer, indx, refetch }) => {
  const { _id, UserName, email, userImage, role } = buyer;

  const handleDeleteAction = (id) => {
    fetch(`https://e-shoppers-server.vercel.app/buyer/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`Buyer deleted successfully.`);
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

export default AllBuyerList;
