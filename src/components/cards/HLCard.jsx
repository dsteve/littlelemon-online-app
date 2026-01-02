import "@/index.css";

import {Link} from "react-router-dom"

import scooter from "@assets/scooter.png";

function HighlightCard(props) {
  return (
    <div className="grid grid-rows-[auto_auto_auto_1fr_auto] bg-white  border rounded-t-xl border-black overflow-hidden aspect-1/2 max-w-2xs w-full  text-black">
      <div className="row-start-1 w-full flex gap-1 content-start">
        <div className="aspect-square w-full">
          <img
            src={props.picture}
            alt="picture"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="row-start-2  w-full m-1 grid grid-cols-2">
        <div className="p-3 font-markazi font-medium text-2xl text-black text-left">
          {props.dish}
        </div>
        <div className="p-3 font-karla font-bold text-lg text-secondary-orange text-right">
          ${props.price}
        </div>
      </div>

      <div className="row-start-3 w-full mx-1 my-2">
        <p className="px-3 font-karla font-normal text-sm text-black leading-relaxed">
          {props.description}
        </p>
      </div>

      <div className="row-start-5  w-full p-1 m-3 flex flex-row gap-4 items-center">
        <div className="font-karla font-bold text-lg text-black">
          <Link to="/order">Order a delivery</Link>
        </div>
        <div className="aspect-square w-11 p-1 m-1">
            <img src={scooter} alt="delivery" className="w-full h-full object-cover object-center"/>
        </div>
      </div>
    </div>
  );
}

export default HighlightCard;
