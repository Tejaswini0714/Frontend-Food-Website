import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate("/order");
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Payment Options</h2>

        <label>
          <input type="radio" name="payment" /> Cash on Delivery
        </label><br />

        <label>
          <input type="radio" name="payment" /> PhonePe
        </label><br />

        <label>
          <input type="radio" name="payment" /> Google Pay
        </label><br />

        <label>
          <input type="radio" name="payment" /> Card Payment
        </label><br /><br />

        <p>Total Amount: ₹100</p>

        <button onClick={handlePayment}>Confirm Order</button>
      </div>
    </>
  );
}

export default Payment;