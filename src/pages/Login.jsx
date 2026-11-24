import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h2>Login</h2>

        <form>
          <input type="text" placeholder="Username" /><br /><br />
          <input type="password" placeholder="Password" /><br /><br />
          <button>Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;