import "@/index.css";

import HighlightCard from "@components/cards/HLCard";
import GotoButton from "@components/button/Button"

import greeksalad from "@assets/greek salad.jpg";
import bruschetta from "@assets/bruschetta.svg";
import lemondessert from "@assets/lemon dessert.jpg";

function Highlights() {
  return (
    <section>
      <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-[1fr-auto-auto-1fr] bg-white">
        <div className="col-start-2 row-start-2 mt-[15%] grid grid-cols-2 items-center">
          <div className="col-start-1 font-karla font-bold text-4xl text-left">
            Specials
          </div>
          <div className="col-start-2 content-end text-right">
            <GotoButton to="/menu" variant="primary-yellow" label="Online menu" />
          </div>
        </div>

        <div className="col-start-2 row-start-3 py-5 grid grid-cols-[1fr-auto-auto-auto-1fr] gap-4">
          <div className="col-start-2 px-5 mt-20 mb-10">
            <HighlightCard
              dish="Greek Salad"
              price="12.99"
              picture={greeksalad}
              description="The famous green salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
            />
          </div>
          <div className="col-start-3 px-5 mt-20  mb-10">
            <HighlightCard
              dish="Bruschetta"
              price="5.99"
              picture={bruschetta}
              description="Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
            />
          </div>
          <div className="col-start-4 px-5 mt-20  mb-10">
            <HighlightCard
              dish="Lemon dessert"
              price="5.00"
              picture={lemondessert}
              description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
