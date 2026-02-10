import "@/index.css";
import restaurant_food from "@assets/restaurantfood.jpg";

import GotoButton from "@components/button/Button";

function Hero() {
  return (
    <section>
      <div className="grid grid-cols-[7fr_3fr] bg-primary-green">
        <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-[1fr_auto_1fr] font-(--font-markazi)">
          <div className="row-start-2 col-start-2 flex max-w-lg flex-col">
            <div className="text-6xl text-(--color-primary-yellow) mx-6 my-3">
              Little Lemon
            </div>
            <div className="text-4xl text-white  mx-6 my-3">Chicago</div>
            <div className="text-xl text-white  mx-6 my-3">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </div>
            <div className="mx-6 mt-12 mb-3 max-w-50">
              <GotoButton
                to="/reservation"
                variant="primary-yellow"
                label="Reserve a table"
              />
            </div>
          </div>
        </div>

        <div className="aspect-5/6 mx-6 mt-3 -mb-[20%]">
          <img
            className="w-full h-full object-cover object-center rounded-2xl"
            src={restaurant_food}
            alt="Little Lemon restaurant hero"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
