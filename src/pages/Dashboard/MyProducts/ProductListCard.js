import React from "react";

const ProductListCard = ({ product, indx }) => {
  const { productImage, productName, resalePrice } = product;
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
        <button className="btn btn-xs mr-3">delete</button>
        <button className="btn btn-xs">advertise</button>
      </td>
    </tr>
  );
};

export default ProductListCard;
