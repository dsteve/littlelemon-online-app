import '@/index.css';

import food from "@assets/food-online.jpg";

function Ordering() {
    return (
            <div className="grid grid-cols-[4fr_7fr] w-full h-full bg-primary-green">
              <div className="col-start-1 aspect-square w-full overflow-hidden">
                <img
                  src={food}
                  alt="food delivery"
                  className="w-full h-full object-cover object-bottom-left"
                />
              </div>
              <div className="col-start-2 grid grid-cols-[fr-auto-fr] grid-rows-[fr-auto-fr]">
                <div className="col-start-2 row-start-2 w-[80%]">
                  <div className="font-karla font-bold text-4xl text-center text-white">
                    <p>Order Online</p>
                    <p className="text-sm">Work In Progress</p>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default Ordering;