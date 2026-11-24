import Navbar from "../components/Navbar";

function Order() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Order Confirmed 🎉</h1>
        <p>Your food is on the way!</p>
      </div>
    </>
  );
}

export default Order;