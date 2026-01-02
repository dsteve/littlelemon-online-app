import "@/index.css";

import RevCard from "@components/cards/RevCard";

import jimmorisson from "@assets/jim-morrison.jpeg";
import taylorswift from "@assets/taylor-swift.jpeg";
import bradleycooper from "@assets/bradley-cooper.jpeg";
import edsheeran from "@assets/ed-sheeran.jpg"

function Testimonials() {
  return (
    <section>
      <div className="grid grid-cols-[1fr_auto_1fr] grid-rows-[1fr-auto-auto-1fr] bg-primary-yellow">
        <div className="col-start-2 row-start-2 py-[5%] font-karla font-bold text-4xl text-center">
          Testimonials
        </div>
        <div className="col-start-2 row-start-3 py-[5%] grid grid-cols-[1fr-auto-auto-auto-auto-1fr] gap-4">
          <div className="col-start-2 px-5 mt-20 mb-10">
            <RevCard first_name="Jim" last_name="Morrison" picture={jimmorisson} rank="4" comment="Maecenas et quam consequat, finibus ex in, tristique ligula. Nulla maximus consectetur dignissim."/>
          </div>
          <div className="col-start-3 px-5 mt-20  mb-10">
            <RevCard first_name="Taylor" last_name="Swift" picture={taylorswift} rank="3" comment="Maecenas et quam consequat, finibus ex in, tristique ligula. Nulla maximus consectetur dignissim."/>
          </div>
          <div className="col-start-4 px-5 mt-20  mb-10">
            <RevCard first_name="Bradley" last_name="Cooper" picture={bradleycooper} rank="5" comment="Maecenas et quam consequat, finibus ex in, tristique ligula. Nulla maximus consectetur dignissim."/>
            </div>
          <div className="col-start-5 px-5 mt-20  mb-10">
            <RevCard first_name="Ed" last_name="Sheeran" picture={edsheeran} rank="2" comment="Maecenas et quam consequat, finibus ex in, tristique ligula. Nulla maximus consectetur dignissim."/>
            </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;
