import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Feedback() {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/thankyou");
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Feedback ⭐</h2>

        <p>Rate us:</p>

        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            style={{
              fontSize: "25px",
              color: star <= rating ? "gold" : "gray",
              border: "none",
              background: "none",
              cursor: "pointer"
            }}
          >
            ★
          </button>
        ))}

        <p>Your Rating: {rating}</p>

        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}

export default Feedback;