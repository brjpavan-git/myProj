export default function Contact() {
  return (
    <>
      <h2>Contact</h2>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />

        <input type="email" placeholder="Email" />

        <textarea rows="5" placeholder="Message" />

        <button type="submit">Send</button>
      </form>
    </>
  );
}