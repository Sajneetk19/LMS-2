import React, { useState } from 'react';
import '../Pages/PaymentForms.css';


const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [paymentSubmitted, setPaymentSubmitted] = useState(false); // State to track payment submission

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your payment processing logic here
    console.log('Payment submitted:', { cardNumber, expiry, cvv, name });
    setPaymentSubmitted(true); // Update state to indicate payment submitted
  };

  return (
    <div className="payment-form">
      <h2>PAYMENT DETAILS</h2>
      <form onSubmit={handleSubmit}>
        <label>Card Number</label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="1234 5678 9012 3456"
        />
        <label>Expiry Date</label>
        <input
          type="text"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          placeholder="MM/YYYY"
        />
        <label>CVV</label>
        <input
          type="text"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
          placeholder="Eg. 123"
        />
        <label>Name on Card</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <button type="submit">Pay Now</button> {/* Removed onClick event */}
      </form>
      {paymentSubmitted && <p>Payment submitted</p>} {/* Render message conditionally */}
    </div>
  );
};

export default PaymentForm;
