import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CartPage.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Custom Evening Gown",
      price: 450,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      size: "M",
      color: "Navy Blue",
      delivery: "3-4 weeks",
    },
    {
      id: 2,
      name: "Gold Statement Necklace",
      price: 120,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
      size: "One Size",
      color: "Gold",
      delivery: "1-2 weeks",
    },
    {
      id: 3,
      name: "Designer Handbag",
      price: 280,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1035&q=80",
      size: "Medium",
      color: "Black",
      delivery: "2-3 weeks",
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode.toUpperCase() === "DEBNEQUE20") {
      setPromoApplied(true);
      setPromoError("");
    } else {
      setPromoError("Invalid promo code");
    }
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const discount = promoApplied ? subtotal * 0.2 : 0;
  const shipping = subtotal > 500 ? 0 : 25;
  const tax = subtotal * 0.08;
  const total = subtotal - discount + shipping + tax;

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <h1>Your Shopping Cart</h1>
          <p>
            {cartItems.length} item{cartItems.length !== 1 ? "s" : ""} in your
            cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-content">
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added anything to your cart yet.</p>
              <Link to="/shop" className="button primary-button">
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              <div className="cart-items-header">
                <span>Product</span>
                <span>Price</span>
                <span>Quantity</span>
                <span>Total</span>
              </div>

              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="item-info">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-image"
                    />
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <div className="item-attributes">
                        <span className="attribute">
                          <strong>Size:</strong> {item.size}
                        </span>
                        <span className="attribute">
                          <strong>Color:</strong> {item.color}
                        </span>
                        <span className="attribute">
                          <strong>Delivery:</strong> {item.delivery}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="item-price">${item.price}</div>

                  <div className="item-quantity">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      −
                    </button>
                    <span className="quantity-number">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>

                  <div className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="remove-item"
                    aria-label="Remove item"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M6 18L18 6M6 6L18 18"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="summary-card">
                <h2>Order Summary</h2>

                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                {promoApplied && (
                  <div className="summary-row discount">
                    <span>Discount (20%)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}

                <div className="summary-row">
                  <span>Shipping</span>
                  <span>
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="summary-row">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="summary-divider"></div>

                <div className="summary-row total">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <div className="promo-section">
                  <div className="promo-input-group">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={promoApplied}
                      className={promoError ? "error" : ""}
                    />
                    <button
                      onClick={applyPromoCode}
                      disabled={promoApplied}
                      className="promo-apply-btn"
                    >
                      {promoApplied ? "Applied" : "Apply"}
                    </button>
                  </div>
                  {promoError && (
                    <div className="promo-error">{promoError}</div>
                  )}
                  {promoApplied && (
                    <div className="promo-success">
                      Promo code applied successfully!
                    </div>
                  )}
                </div>

                <div className="shipping-note">
                  {subtotal < 500 && (
                    <p>
                      Add ${(500 - subtotal).toFixed(2)} more for free shipping!
                    </p>
                  )}
                </div>

                <button className="checkout-button primary-button">
                  Proceed to Checkout
                </button>

                <div className="continue-shopping">
                  <Link to="/shop" className="continue-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M19 12H5M5 12L12 19M5 12L12 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Continue Shopping
                  </Link>
                </div>
              </div>

              <div className="security-badges">
                <div className="badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Secure Checkout</span>
                </div>
                <div className="badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 2C15 2 18 4 18 7C18 9 16 11 16 12C16 13 18 15 18 17C18 20 15 22 12 22C9 22 6 20 6 17C6 15 8 13 8 12C8 11 6 9 6 7C6 4 9 2 12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Quality Guarantee</span>
                </div>
                <div className="badge">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C15.0187 4 17.6802 5.53994 19.283 7.87215M19.283 7.87215L15.5 7.5M19.283 7.87215L19 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Free Returns</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {cartItems.length > 0 && (
          <div className="recently-viewed">
            <h2>You Might Also Like</h2>
            <div className="product-suggestions">
              <div className="suggestion-item">
                <img
                  src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=776&q=80"
                  alt="Crossbody Bag"
                />
                <h3>Crossbody Bag</h3>
                <p>$95.00</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
              <div className="suggestion-item">
                <img
                  src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
                  alt="Gold Earrings"
                />
                <h3>Gold Earrings</h3>
                <p>$65.00</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
              <div className="suggestion-item">
                <img
                  src="https://images.unsplash.com/photo-1560072810-1cffb09fafa0?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
                  alt="Designer Flats"
                />
                <h3>Designer Flats</h3>
                <p>$130.00</p>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
