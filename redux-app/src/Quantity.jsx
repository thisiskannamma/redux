import React from 'react'
import { connect } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from './actions';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function Quantity({ products, increaseQuantity, decreaseQuantity}) {
  // React.useEffect(() => {
  //   updateAmount();
  // }, [quantity, updateAmount]);
  return (
    <div>
        <>
   <div className='container d-flex flex-column gap-5 mt-10'>
    {products.map((data,index)=>(
      <div key={index} className='main'>
        <div key={index} className='d-flex justify-content-between'>
          <div className='img-des d-flex align-items-center gap-5'>
            <div className='image'>
              <img src={data.thumbnail} alt="" />
            </div>
            <div className='image-des'>
              <h4>{data.title}</h4>
              <h4>{data.brand}</h4>
              <h4>{data.description}</h4>
              <h4>{data.category}</h4>
            </div>
          </div>
          <div className='price-des d-flex flex-column justify-content-between'>
            <div className='price-count d-flex'>
            <button onClick={()=>increaseQuantity(data.id)}>+</button><br />
              <div className='price'>
                <strong>unit price ${data.price}</strong>
              </div>
              <button onClick={()=>decreaseQuantity(data.id)}>-</button>
            </div>
            <div className='remove-btn align-self-end'>
              <button className='btn btn-danger'>Remove</button>
            </div>
          </div>
        </div>
        <hr/>
        <div className='subtotal'>
          <div className='sub-price d-flex justify-content-between mt-2'>
            <h5>QUANTITY:</h5>
            <h5>{data.quantity}</h5><br />
            <h5>SUBTOTAL:</h5>
            <h5>${data.amount}</h5>
          </div>
          <div className='sub-shopping d-flex justify-content-between mt-2'>
            <h5>SHIPPING:</h5>
            <h5>FREE</h5>
          </div>
        </div>
        <hr/>
        <div className='sub-price d-flex justify-content-between mt-2'>
          <h5>TOTAL</h5>
          <h5>${data.amount}</h5>
        </div>
      </div>
    ))}

   </div>
   </>
      {/* {products.map(product=>(
        <div key={product.id}>
          <button onClick={()=>decreaseQuantity(product.id)}>-</button>
        <span>Quantity:{product.quantity}</span>
        <button onClick={()=>increaseQuantity(product.id)}>+</button>
        <p>Total Amount:${product.amount}</p>
        </div>
      ))} */}
      
    </div>
  );
}

const mapStateToProps = state => ({
  products:state.products
});

const mapDispatchToProps = {
  increaseQuantity,
  decreaseQuantity
}
export default connect(mapStateToProps, mapDispatchToProps)(Quantity);