import React from "react";
import "../CSS/ShopCart.css";
import label from "../images/label.svg";
import cross from "../images/cross.svg";
import arrow_right from "../images/chevron_right.png";
import { Link } from "react-router-dom";

export default function ShopCart(props) {
  return (
    <>
      <div className="shopping-text">
        <p>Shopping cart</p>
      </div>
      <div className="shopCrat">
        <div className="cart-sec-2">
          <div className="cart-item">
            <div className="item-text-cart">
              <p>1 Items in cart</p>
            </div>
            <div className="cart-line"></div>
            <div div className="name-cources">
              <p className="course-text">Name of the course</p>
              <div className="price-course">
                <p className="dis-price">$23.75</p>
                <p className="price-cut">$25.00</p>
              </div>
              <div className="label">
                <img src={label} alt="" />
              </div><Link to="NoItemShopCart">
              <div className="remove-text" onClick={props.removeItem}>
                <p>Remove</p>
                <div className="cross-icon">
                  <img src={cross} alt="" />
                </div>
              </div></Link>
            </div>
            <div className="cart-line"></div>
          </div>
          <div className="cart-promo">
            <div className="coupon">
              <div className="coupon-text">Promotions</div>
              <div className="coupon-input">
                <input type="text" placeholder="Enter coupon code" />
              </div>
              <div className="btn dark-btn small-btn size flex-btn">
                <div className=""> Apply</div>
                <div className="arrow-white">
                  <img src={arrow_right} alt="" />
                </div>
              </div>
            </div>
            <div className="total-prize">
              <p className="total">$25.00</p>
              <p className="total-text">Total price</p>
              <p className="total">$1.25</p>
              <p className="total-text">Discount</p>
              <p className="total">$23.75</p>
              <p className="total-text ">Final price</p>
              <Link to="/Checkout">
                <div className="btn dark-btn small-btn check-btn size flex-btn">
                  <div className="">Checkout</div>
                  <div className="arrow-white">
                    <img src={arrow_right} alt="" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
