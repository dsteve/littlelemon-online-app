import "@/index.css";
import {Link} from "react-router-dom"
import footerImg from "@/assets/little lemon logo-vertical.png";

function Footer() {
  return (
    <div className="bg-secondary-grey">
      <div className="grid grid-cols-10 gap-2  justify-items-center p-4">
        <div className="col-span-2 col-start-1 h-0.1">
          <img src={footerImg} className="w-24" alt="Little lemon icon" />
        </div>

        <section className="col-span-3 col-start-3">
          <h3 className="font-bold">Doormat Navigation</h3>
          <p> <Link to="/">Home</Link> </p>
          <p> <Link to="/about">About</Link> </p>
          <p> <Link to="/menu">Menu</Link> </p>
          <p> <Link to="/reservation">Reservation</Link> </p>
          <p> <Link to="/order">Online Ordering</Link> </p>
          <p> <Link to="/login">Login</Link> </p>
        </section>
        <section className="col-span-2 col-start-6">
          <h3 className="font-bold">Contact</h3>
          <p>&#x1F3E0; 5100 N Francisco Ave, Chicago, <br/> IL 60625</p>
          <p>&#x1F4DE; (312) 742-7516</p>
          <p> &#x2709; chicago-restaurant@littlelemon.com</p>
        </section>
        <section className="col-span-3 col-start-8">
          <h3 className="font-bold">Social Media Links</h3>
          <p><a href="https://facebook.com/61573956047815" target="_blank" rel="noopener noreferrer" className="no-underline">Facebook</a></p>
          <p><a href="https://www.instagram.com/littlelemon.riverpark/" target="_blank" rel="noopener noreferrer" className="no-underline">Instagram</a></p>
          <p><a href="https://x.com/" target="_blank"  rel="noopener noreferrer" className="no-underline">X</a></p>
        </section>
      </div>
    </div>
  );
}

export default Footer;
