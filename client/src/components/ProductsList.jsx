import React from 'react';
import Product from './Product';

const ProductsList = (props) => {
  return (
    <div className="list-container">
      {/* //checking whether products exist */}
      {props.productList.length > 0 ? (
        <table className="list-table">
          <tbody>
            {/* //Mapping through the product list and rendering the products */}
            {props.productList.map((product) => (
              // Passing the props
              <Product
                product={product}
                key={product._id}
                removeProduct={props.removeProduct}
                togglePopUp={props.togglePopUp}
                productToUpdate={props.productToUpdate}
                updateQuantity={props.updateQuantity}
              />
            ))}
          </tbody>
        </table>
      ) : (
        //Render this when no products are found
        <h1>No cookies found.</h1>
      )}
    </div>
  );
};

export default ProductsList;
