import Navbar from "../components/Navbar";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Contact Us</h1>

        <p>Email: support@foodapp.com</p>
        <p>Phone: +123-456-7890</p>

        <form>
          <input placeholder="Your Name" /><br /><br />
          <input placeholder="Your Email" /><br /><br />
          <textarea placeholder="Message"></textarea><br /><br />
          <button>Send</button>
        </form>
      </div>
    </>
  );
}

export default Contact;