import "@/index.css";

import GotoButton from "@components/button/Button";

import { LocalChicagoDateTime } from "@utils/LocalChicagoDateTime.js";

function CapstoneBookingForm({
  minGuestNb,
  maxGuestNb,
  selectedGuests,
  handleGuestsChange,
  minLocalBookingDateTime,
  maxLocalBookingDateTime,
  availableLunchTimes,
  availableDinerTimes,
  selectedDateTime,
  handleDateChange,
  handleTimeChange,
  occasionList,
  selectedOccasion,
  handleOccasionChange,
  handleSubmit,
}) {
  const internalHandleDateChange = (value) => {
    // Map the value returned by the <input> element of type "date" into a LocalChicagoDateTime object as expected by handleDateChange
    const newDateTime = LocalChicagoDateTime.normalizeDateInputToLcdt(value);
    handleDateChange(newDateTime);
  };

  const internalHandleTimeChange = (value) => {
    // Map the value returned by the time <selector> (HH-MM) into a LocalChicagoDateTime object as expected by handleDateTimeChange
    const newDateTime = LocalChicagoDateTime.normalizeTimeInputToLcdt(value);
    handleTimeChange(newDateTime);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="flex flex-col p-8 w-full border rounded-3xl border-black bg-white font-karla font-normal text-xl ">
          <label htmlFor="guests">
            <div className="flex content-center gap-3 py-4">
              <p className="content-end text-xl"> Number of guests: </p>
              <input
                type="number"
                placeholder={selectedGuests}
                min={minGuestNb}
                max={maxGuestNb}
                id="guests"
                name="guests"
                value={selectedGuests}
                onChange={(e) => handleGuestsChange(e.target.value)}
              />
            </div>
          </label>

          <label htmlFor="res-date">
            <div className="flex content-center gap-3 py-4">
              <p className="content-end text-xl"> Choose date: </p>
              <input
                type="date"
                min={LocalChicagoDateTime.normalizeLcdtToDateInput(minLocalBookingDateTime)}
                max={LocalChicagoDateTime.normalizeLcdtToDateInput(maxLocalBookingDateTime)}
                id="res-date"
                name="date"
                value={LocalChicagoDateTime.normalizeLcdtToDateInput(selectedDateTime)}
                onChange={(e) => internalHandleDateChange(e.target.value)}
              />
            </div>
          </label>

          <label htmlFor="res-time">
            <div className="flex content-center gap-3 py-4">
              <p className="content-end text-xl"> Choose time: </p>
              <select
                id="res-time "
                name="res-time"
                onChange={(e) => internalHandleTimeChange(e.target.value)}
                value={LocalChicagoDateTime.normalizeLcdtToTimeInput(selectedDateTime)}
              >
                <optgroup label="Lunch">
                  {availableLunchTimes.map((item, idx) => (
                    <option key={idx + 1}>{item}</option>
                  ))}
                </optgroup>
                <optgroup label="Diner">
                  {availableDinerTimes.map((item, idx) => (
                    <option key={idx + 1}>{item}</option>
                  ))}
                </optgroup>
              </select>
            </div>
          </label>

          <label htmlFor="occasion">
            <div className="flex content-center gap-3 py-4">
              <p className="content-end"> Occasion: </p>
              <select
                id="occasion"
                name="occasion"
                value={selectedOccasion === null?"":selectedOccasion}
                onChange={(e) => handleOccasionChange(e.target.value)}
              >
                {["", ...occasionList].map((item, idx) => (
                  <option key={idx}>{item}</option>
                ))}
              </select>
            </div>
          </label>

          <div className="bg-primary-green/70 rounded-b-3xl">
            <div className="text-center">
              <button
                type="submit"
                disabled={!selectedDateTime || !selectedGuests}
                className="my-4 px-8 py-2 rounded-xl bg-primary-yellow font-karla font-medium text-2xl text-black text-center hover:cursor-pointer hover:text-3xl disabled:bg-secondary-grey disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                Make Your reservation
              </button>
            </div>
            <div className="flex gap-4 mb-8 justify-center">
              <GotoButton
                to="/"
                variant="secondary-grey"
                label="Cancel booking"
              />
              <GotoButton
                to="/order"
                variant="secondary-grey"
                label="Order online"
              />
            </div>
          </div>
        </div>
      </fieldset>
    </form>
  );
}

export default CapstoneBookingForm;
