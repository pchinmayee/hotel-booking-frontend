import { BsFacebook, BsTwitter, BsInstagram, BsYoutube } from "react-icons/bs";
import "./Footer.css";
import React from "react"

function Footer() {
  return (
    <footer>
      <div className="top">
        <h1>
          <i>Save Time, Save Money</i>
        </h1>
        <p>
          <i>Sign Up and you will never miss on any offer</i>
        </p>
        <form action="">
          <input type="text" placeholder="Your Email" />
          <button>Register</button>
        </form>
      </div>
      <div className="mid">
        <button>List Property</button>
        <hr />
        <ul>
          <li>
            <a href="/"> Your Account </a>
          </li>

          <li>
            <a href="/">Make change online to your booking</a>
          </li>
          <li>
            <a href="/">Booking History</a>
          </li>
          <li>
            <a href="/">Cancel Booking</a>
          </li>
          <li>
            <a href="/">Costumer Help</a>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <ul className="social">
          <li>
            <BsFacebook size="40" />
          </li>
          <li>
            <BsTwitter size="40" />
          </li>
          <li>
            <BsInstagram size="40" />
          </li>
          <li>
            <BsYoutube size="40" />
          </li>
        </ul>
        <ul>
          <li>About</li>
          <li>Need Help?</li>
          <li>Contact</li>
          <li>Privacy</li>
          <li>Terms of use</li>
          <li>Advertising</li>
          <li>Jobs</li>
          <li>Partners</li>
        </ul>

        <p>© Copyright Booking.com. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
