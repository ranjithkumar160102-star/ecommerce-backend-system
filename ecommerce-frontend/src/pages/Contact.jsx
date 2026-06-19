import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (
      !formData.name ||
      !formData.email ||
      !formData.message
    ) {
      setError("All fields are required");
      return;
    }

    if (!formData.email.includes("@")) {
      setError("Enter a valid email");
      return;
    }

    setSuccess("Message Sent Successfully");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <br />

        <div>
          <textarea
            name="message"
            placeholder="Enter Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <br />

        <button type="submit">
          Send Message
        </button>
      </form>

      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </div>
  );
}

export default Contact;