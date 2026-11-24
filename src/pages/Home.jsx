import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Welcome to Food App 🍔</h1>
        <p>Order your favorite food easily!</p>

        <img
          src="https://th.bing.com/th/id/OIP.V5yQ6TCrlZKMzoLXLfWapQHaD4"
          width="80%"
        />
      </div>
    </>
  );
}

export default Home;