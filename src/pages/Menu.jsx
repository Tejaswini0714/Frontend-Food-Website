import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const foods = [
  { name: "Dosa", price: 60, img: "https://th.bing.com/th?id=OIP.AAeMOleCsTZ6bN_MA_cQqQHaEK" },
  { name: "Idly", price: 30, img: "https://th.bing.com/th?id=OIP.nLsW6EI7W_KwH7FPjQ4TvwHaEd" },
  { name: "Veg Manchurian", price: 90, img: "https://th.bing.com/th/id/OIP.p0_SecLlfeFh5X0On9TYlgHaEK" },
  { name: "Noodles", price: 80, img: "https://th.bing.com/th?id=OIP.YaDz19jEI5BUBMqpFTAHHQHaE7" },
  { name: "Pizza", price: 100, img: "https://th.bing.com/th?id=OIP.ur3rFKWe-tQHnEOvzQbTkgHaE8" },
  { name: "Fried Rice", price: 180, img: "https://th.bing.com/th?id=OIP.jCTttlKz49sjojN3Igxj-QHaE8" },
  { name: "Biryani", price: 280, img: "https://th.bing.com/th?id=OIP.FPuP3QNkURKQqGMi9VkeZQHaE8" },
  { name: "French Fries", price: 150, img: "https://th.bing.com/th?id=OIP.ZJdcYzQa-aVMjsApBWuPwAHaE6" },
  { name: "Samosa", price: 50, img: "https://th.bing.com/th?id=OIP.Xp2RQVjyCr3kN1G8VhcK_wHaE_" }
];

function Menu() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>🍽️ Our Menu</h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {foods.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                display: "flex",
                alignItems: "center",
                gap: "20px",
                borderRadius: "10px",
                background: "#fff",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                width="120"
                style={{ borderRadius: "10px" }}
              />

              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>

                <Link to="/payment">
                  <button
                    style={{
                      background: "pink",
                      border: "none",
                      padding: "8px 15px",
                      borderRadius: "5px",
                      cursor: "pointer"
                    }}
                  >
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Menu;