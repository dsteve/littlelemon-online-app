import "@/index.css";

import marioAdrianA from "@assets/Mario and Adrian a.jpg";
import marioAdrianB from "@assets/Mario and Adrian b.jpg";

function About() {
  return (
    <section>
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-[1fr_auto_1fr]  font-(--font-markazi)">
          <div className="col-start-2 mt-20 flex max-w-lg flex-col">
            <div className="text-6xl mx-6 my-3">Little Lemon</div>
            <div className="text-4xl mx-6 my-3">Chicago</div>
            <div className="text-xl mx-6 my-3">
              Maecenas sem mauris, auctor sed finibus ut, vehicula ut mauris. In
              convallis facilisis consectetur. Maecenas sem mauris, auctor sed
              finibus ut, vehicula ut mauris.
            </div>
          </div>
        </div>
        <div className="mt-20 pr-[20%] flex flex-row">
          <div className="aspect-4/5 overflow-hidden mt-30 mb-10 z-10">
            <img
              className="w-full h-full object-cover object-right"
              src={marioAdrianA}
              alt="Mario and Adrian A"
            />
          </div>
          <div className="aspect-4/5 overflow-hidden -ml-30 mr-10 mt-10 mb-30 z-0">
            <img
              className="w-full h-full object-cover object-center"
              src={marioAdrianB}
              alt="Mario and Adrian B"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
