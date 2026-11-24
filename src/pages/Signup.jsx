import Navbar from "../components/Navbar";

function Signup() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Signup</h2>

        <form>
          <input placeholder="Name" /><br /><br />
          <input placeholder="Email" /><br /><br />
          <input type="password" placeholder="Password" /><br /><br />
          <button>Register</button>
        </form>
      </div>
    </>
  );
}

export default Signup;