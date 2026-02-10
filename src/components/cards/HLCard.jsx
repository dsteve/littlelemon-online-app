import "@/index.css";

import {Link} from "react-router-dom"

import scooter from "@assets/scooter.png";

function HighlightCard(props) {
  return (
    <div className="grid grid-rows-[1fr_1fr_1fr_1fr] bg-white  border rounded-t-xl border-black overflow-hidden aspect-2/3 max-w-2xs w-full  text-black">
      <div className="row-start-1 w-full flex gap-1 content-start">
        <div className="aspect-3/2 w-full">
          <img
            src={props.picture}
            alt="picture"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="row-start-2 p-3 w-full grid grid-cols-2">
        <div className="font-markazi font-medium text-2xl text-black text-left">
          {props.dish}
        </div>
        <div className="font-karla font-bold text-lg text-secondary-orange text-right">
          ${props.price}
        </div>
      </div>

      <div className="row-start-3 w-full">
        <p className="px-3 font-karla font-normal text-sm text-black leading-relaxed">
          {props.description}
        </p>
      </div>

      <div className="row-start-4  w-full p-3 flex flex-row gap-4 items-center">
        <div className="font-karla font-bold text-lg text-black">
          <Link to="/order" className="hover:underline hover:decoration-primary-yellow hover:decoration-4 hover:underline-offset-4">Order a delivery</Link>
        </div>
        <div className="aspect-square w-11 p-2">
            <img src={scooter} alt="delivery" className="w-full h-full object-cover object-center"/>
        </div>
      </div>
    </div>
  );
}

export default HighlightCard;
