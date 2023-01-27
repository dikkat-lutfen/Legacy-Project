import React from 'react';
import { TbCookieOff, TbCookie } from 'react-icons/tb';

const Product = (props) => {
  return (
    //Creating a table for products
    <tr>
      <td className="product-text">{props.product.name}</td>
      <td>
        <div className="product-quantity">
          <button
            className="minus"
            onClick={(e) => props.updateQuantity(e, props.product._id)}
          >
            -
          </button>
          {props.product.quantity}
          <button
            className="plus"
            onClick={(e) => props.updateQuantity(e, props.product._id)}
          >
            +
          </button>
        </div>
      </td>
      <td className="product-details">
        <TbCookie
          className="update-product"
          title="Edit Cookie"
          onClick={() => {
            props.productToUpdate(props.product);
            props.togglePopUp();
          }}
        />
        {/* <button
          className="update-product"
          onClick={() => {
            props.productToUpdate(props.product);
            props.togglePopUp();
          }}
        >
          Update
        </button> */}
        <TbCookieOff
          className="remove-product"
          title="Delete Cookie"
          onClick={() => props.removeProduct(props.product._id)}
        />
        {/* <button
          className="remove-product"
          onClick={() => props.removeProduct(props.product._id)}
        >
          Remove
        </button> */}
      </td>
    </tr>
  );
};

export default Product;
