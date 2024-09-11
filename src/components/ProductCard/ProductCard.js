import React from 'react'
import './ProductCard.scss';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';

function ProductCard({product}) {

    const renderStars = (rate) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
          if (i <= rate) {
            stars.push(<BsStarFill key={i} className="star filled" />);
          } else if (i === Math.ceil(rate) && rate % 1 !== 0) {
            stars.push(<BsStarHalf key={i} className="star half-filled" />);
          } else {
            stars.push(<BsStar key={i} className="star empty" />);
          }
        }
        return stars;
      };
  return (
    <div className='product_card'>
        <div className="image_container">
            <img className='image' src={product.image} width="230px" height="300px" alt="product" />
        </div>
    <div className="detail">
    <p className='product_title'>{product.title}</p>
    <p className='rating'>{renderStars(product.rating.rate)} <span>({product.rating.count})</span></p>
    <p className='price'>${product.price}</p>
    <button className='btn'>Add to Cart</button>
    </div>
    </div>
  )
}

export default ProductCard