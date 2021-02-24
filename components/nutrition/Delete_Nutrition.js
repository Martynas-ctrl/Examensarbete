import React from 'react';
import { gql, useMutation } from '@apollo/client';
import EditButton from './EditModal';
import './css/Product.css';
import DELETE_BREAKFAST from '../queries/Delete_breakfast_query';

function Product(props) {

  const [deleteProduct] = useMutation(DELETE_BREAKFAST);
   
  const removeProduct = (id) => {
    deleteProduct({variables: {id: id}});
  }

  return (
      <div className="col-sm-4">
        <div className="product_card" >
          <img src={props.product.image.url} className="card-img-top"/>
          <div className="product_card_body">
            <h5 className="product_name">{props.product.name}</h5>
            <p className="product_price">$ {props.product.price}</p>
            <p className="product_description">{props.product.description}</p>
            <div className="product_buttons">
              <EditButton id={props.product.id} />
              <button className="btn" onClick={() => removeProduct(props.product.id)}><i className="fa fa-trash"></i>Delete</button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Product;