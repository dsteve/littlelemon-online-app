import "@/index.css";

import { LocalChicagoDateTime } from "@utils/LocalChicagoDateTime.js";

function TimeSelectorView({
  lunchTimes,
  dinerTimes,
  selectedTime,
  handleTimeChange,
}) {

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 content-center p-4 font-Karla">
        {[
          { values: lunchTimes, title: "Lunch" },
          { values: dinerTimes, title: "Diner" },
        ].map((timeTable, idx) => (
          <div
            key={idx + 1}
            className="p-4 mx-8 border border-white rounded-sm text-3xl text-white"
          >
            <p className="font-bold underline">{timeTable.title}</p>
            <div className="grid grid-cols-2 grid-flow-row">
              {timeTable.values.map((item, idx) => (
                <div key={idx} className="px-4 py-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="time"
                      value={item}
                      checked={LocalChicagoDateTime.normalizeLcdtToTimeInput(selectedTime) === item}
                      onChange={(e) => handleTimeChange(LocalChicagoDateTime.normalizeTimeInputToLcdt(e.target.value))}
                      className="accent-primary-yellow"
                    />
                    {item}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TimeSelectorView;
