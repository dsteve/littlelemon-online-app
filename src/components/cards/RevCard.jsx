import "@/index.css";

import staron from "@assets/star-on.png";
import staroff from "@assets/star-off.png";

function RevCard(props) {
  return (
    <div className="grid grid-rows-[1fr_auto_auto_auto_1fr] bg-white  border border-black overflow-hidden aspect-10/9 max-w-3xs w-full font-karla text-black">
      <div className="row-start-2 w-[50%] p-3 flex gap-1 content-start">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="aspect-square overflow-hidden w-4">
            <img
              src={props.rank - i - 1 >= 0 ? staron : staroff}
              alt="star on-off"
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div className="row-start-3  w-full p-3 flex flex-row gap-4 items-center">
        <div className="aspect-square w-15 overflow-hidden">
          <img
            src={props.picture}
            alt="Illustration"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="font-bold text-lg mb-2 flex gap-1">
          {`${props.first_name} ${props.last_name}`}
        </div>
      </div>

      <div className="row-start-4 w-full p-3">
        <p className="text-sm leading-relaxed">{props.comment}</p>
      </div>
    </div>
  );
}

export default RevCard;
