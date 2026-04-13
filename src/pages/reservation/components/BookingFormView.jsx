import "@/index.css";

import fork from "@assets/fork-and-knife.svg";
import calendar from "@assets/calendar.svg";
import clock from "@assets/clock.svg";
import party from "@assets/party-horn.svg";
import dishIcon from "@assets/dish.svg";

import GotoButton from "@components/button/Button";
import { AccordionGroup, Accordion } from "@components/accordion/Accordion";
import GuestSelectorView from "./GuestSelectorView";
import DateSelectorView from "./DateSelectorView";
import TimeSelectorView from "./TimeSelectorView";
import OccasionSelectorView from "./OccasionSelectorView";

import { LocalChicagoDateTime } from "@utils/LocalChicagoDateTime";

function BookingForm({
  minGuestNb,
  maxGuestNb,
  selectedGuests,
  handleGuestsChange,
  closedDays,
  minLocalBookingDateTime,
  maxLocalBookingDateTime,
  selectedDateTime,
  handleDateChange,
  lunchServiceTimeslots,
  dinerServiceTimeslots,
  handleTimeChange,
  occasionList,
  selectedOccasion,
  handleOccasionChange,
  handleSubmit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="font-Karla, text-4xl, text-black">
          <AccordionGroup>
            {[
              {
                selector: (
                  <GuestSelectorView
                    minGuestNb={minGuestNb}
                    maxGuestNb={maxGuestNb}
                    selectedGuest={selectedGuests}
                    handleGuestsChange={handleGuestsChange}
                  />
                ),
                icon: fork,
                label: `${selectedGuests} Guests`,
              },
              {
                selector: (
                  <DateSelectorView
                    minDate={minLocalBookingDateTime}
                    maxDate={maxLocalBookingDateTime}
                    closedDays={closedDays}
                    selectedDate={selectedDateTime}
                    handleDateChange={handleDateChange}
                  />
                ),
                icon: calendar,
                label: selectedDateTime.isToday()
                  ? "Today"
                  : selectedDateTime.prettyDisplayDate(),
              },
              {
                selector: (
                  <TimeSelectorView
                    lunchTimes={lunchServiceTimeslots}
                    dinerTimes={dinerServiceTimeslots}
                    selectedTime={selectedDateTime}
                    handleTimeChange={handleTimeChange}
                  />
                ),
                icon: clock,
                label: selectedDateTime.getShortTime(),
              },
              {
                selector: (
                  <OccasionSelectorView
                    occasionList={occasionList}
                    selectedOccasion={selectedOccasion}
                    handleOccasionChange={handleOccasionChange}
                  />
                ),
                icon: party,
                label:
                  selectedOccasion === null
                    ? "Special Occasion ?"
                    : selectedOccasion,
              },
            ].map((item, index) => (
              <div
                key={index + 1}
                className="border-b border-black bg-secondary-grey mx-10 text-5xl"
              >
                <Accordion initialState="closed" extension={item.selector}>
                  <div className="flex flex-row gap-4 content-center px-4 py-2">
                    <div className="w-20 h-20 p-2">
                      <img
                        src={item.icon}
                        alt="icon"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    {item.label}
                  </div>
                </Accordion>
              </div>
            ))}
          </AccordionGroup>
        </div>
      </fieldset>

      <div className="bg-primary-green/70 mx-10 p-2 text-center">
          <button
            type="submit"
            disabled={!selectedDateTime || !selectedGuests}
            className="my-4 px-8 py-2 rounded-xl bg-primary-yellow font-karla font-medium text-2xl text-black text-center hover:cursor-pointer hover:text-3xl disabled:bg-secondary-grey disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            <div className="flex flex-row">
              <img src={dishIcon} alt="booking bell" className="w-8" />
              <span className="px-4">Reserve</span>
            </div>
          </button>
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
    </form>
  );
}

export default BookingForm;
