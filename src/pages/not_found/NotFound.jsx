import "@/index.css";

import { Link } from "react-router-dom";

import restaurant_swr from "@assets/restaurant-swr.jpg";
import illustration from "@/assets/point-dexclamation.png";

function NotFound() {
  return (
    <div className="grid grid-cols-[4fr_7fr] w-full h-full bg-secondary-brown font-karla font-medium">
      <div className="col-start-1 aspect-square w-full overflow-hidden">
        <img
          src={restaurant_swr}
          alt="restaurant"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="col-start-2 flex flex-col place-content-center bg-secondary-orange w-[20%] px-5 mx-auto">
        <img className="mx-auto w-full" src={illustration} alt="Page not found" />

        <div className="flex flex-col mx-auto gap-4 text-center text-secondary-brown">
          <span className="font-bold text-4xl">Oops,</span>
          <span>Something went wrong.</span>
        </div>

        <Link
          to="/"
          className="mx-auto p-2 mt-10 border border-primary-green rounded-lg  text-primary-green hover:border-transparent hover:bg-primary-green hover:text-white active:bg-primary-yellow"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
