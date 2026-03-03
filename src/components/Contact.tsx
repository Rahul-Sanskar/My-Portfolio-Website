import { useEffect, useState } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const API_URL = ""; // Replace with your deployed backend URL

const Contact = () => {
  const [visitCount, setVisitCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(API_URL, { method: "POST" }) // Send request to update count
      .then((response) => response.json())
      .then((data) => setVisitCount(data.count))
      .catch((error) => console.error("Error fetching visit count:", error));
  }, []);

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:rahulsanskar1607@gmail.com" data-cursor="disable">
                rahulsanskar1607@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+916204796303" data-cursor="disable">
                +91 6204796303
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Rahul-Sanskar"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-sanskar/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/rahulsanskar_?igsh=MTV2YmhvbmNjaW9maw=="
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Rahul Sanskar</span>
            </h2>
            <h5>
              <MdCopyright /> 2025
            </h5>
            <p className="visit-counter">
              {visitCount !== null ? `Visits: ${visitCount}` : "Loading..."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
