import "@/index.css";
import restaurant from "@assets/restaurant-login.jpg";
import unfold from "@assets/triangle-down.svg";
import fold from "@assets/triangle-up.svg";
import fork from "@assets/fork-and-knife.svg";
import calendar from "@assets/calendar.svg";
import clock from "@assets/clock.svg";

import React, { useState } from "react";

import GotoButton from "@components/button/Button";

function CapstoneBookingForm() {
  // Date and time are currently GMT. TO DO: compute local date and time from the browser locale.
  const today = new Date();
  const todayDate = today.toISOString().slice(0, 10);
  const todayTime = today.toISOString().split("T")[1].slice(0, 5);

  const [date, setDate] = useState(todayDate);
  const [time, setTime] = useState(todayTime);
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");

  // Booking is only allowed 3 months ahead from today.
  const calMinDate = todayDate;
  const threeMonthsLater = new Date(today);
  threeMonthsLater.setMonth(today.getMonth() + 3);
  const calMaxDate = threeMonthsLater.toISOString().slice(0, 10);

  // Booking time on the same day is only allowed later than the current time.
  const lunchTimes = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30"];
  const dinerTimes = [
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Reservation confirmed for ${guests} guests, on ${date} at ${time} ${occasion} !`
    );
    setDate(todayDate);
    setTime(todayTime);
    setGuests(2);
    setOccasion("");
  };

  return (
    <div className="grid grid-cols-[1fr_8fr_1fr] gap-0 text-3xl text-center">
      <div className="col-start-2 text-white">
        <p className="text-6xl text-[#D9D9D9]">Reserve a table</p>
        <p className="">at Little Lemon Restaurant - Chicago</p>
        <div className="flex flex-col gap-1 justify-center content-center text-lg text-center ">
          <div className="px-4 py-2">
            <p>Opening Tuesday to Saturday</p>
            <p>Lunch : 12.00 pm - 3.00 pm</p>
            <p>Dinner : 7.00pm - 11.00 pm</p>
            <p>Closed on Sunday and Monday</p>
          </div>
        </div>
      </div>
      <div className="col-start-2">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <label htmlFor="res-date">
              <div className="flex justify-center content-center gap-3 border-b border-black bg-[#D9D9D9]">
                <p className="content-end text-xl"> Choose date: </p>
                <input
                  type="date"
                  min={calMinDate}
                  max={calMaxDate}
                  id="res-date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
            </label>

            <label htmlFor="res-time">
              <div className="flex justify-center content-center gap-3 border-b border-black bg-[#D9D9D9]">
                <p className="content-end text-xl"> Choose time: </p>
                <select
                  id="res-time "
                  name="res-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                >
                  <optgroup label="Lunch">
                    {lunchTimes
                      .map((item, i) =>
                        date !== todayDate ? (
                          <option key={i}>{item}</option>
                        ) : item > todayTime ? (
                          <option key={i}>{item}</option>
                        ) : (
                          ""
                        )
                      )
                      .filter((item) => item !== "")}
                  </optgroup>
                  <optgroup label="Diner">
                    {dinerTimes
                      .map((item, i) =>
                        date !== todayDate ? (
                          <option key={i}>{item}</option>
                        ) : item > todayTime ? (
                          <option key={i}>{item}</option>
                        ) : (
                          ""
                        )
                      )
                      .filter((item) => item !== "")}
                  </optgroup>
                </select>
              </div>
            </label>

            <label htmlFor="guests">
              <div className="flex justify-center content-center gap-3 border-b border-black bg-[#D9D9D9]">
                <p className="content-end text-xl"> Number of guests: </p>
                <input
                  type="number"
                  placeholder="1"
                  min="1"
                  max="10"
                  id="guests"
                  name="guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                />
              </div>
            </label>

            <label htmlFor="occasion">
              <div className="flex justify-center content-center gap-3 border-b border-black bg-[#D9D9D9]">
                <p className="content-end text-xl"> Occasion: </p>
                <select
                  id="occasion"
                  name="occasion"
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                >
                  <option></option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </select>
              </div>
            </label>

            <div className="">
              <div className="">
                <button
                  type="submit"
                  disabled={!date || !time || !guests}
                  className="my-4 px-8 py-2 rounded-xl font-karla font-medium text-2xl bg-primary-yellow text-black disabled:bg-secondary-grey disabled:text-gray-400"
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
          </fieldset>
        </form>
      </div>
    </div>
  );
}

function Accordeon(props) {
  const [state, setState] = useState(props.init_state);

  return (
    <div className="flex gap-2 justify-start">
      {props.label}
      <div className="aspect-square w-10">
        <button onClick={() => state === "closed" ? setState("open") : setState("closed")}>
        {state == "closed" ? (
          <img
            src={unfold}
            alt="unfold"
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <img
            src={fold}
            alt="fold"
            className="w-full h-full object-cover object-center"
          />
        )}
        </button>
      </div>
      {state == "open" && props.extension}
    </div>
  );
}

function BookingForm() {
  const today = new Date();
  const todayDate = today.toISOString().slice(0, 10);
  const todayTime = today.toISOString().split("T")[1].slice(0, 5);

  const [date, setDate] = useState(todayDate);
  const [time, setTime] = useState(todayTime);
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setDate(todayDate);
    setTime(todayTime);
    setGuests(2);
    setOccasion("");
    alert(
      `Reservation confirmed for ${guests} guests, on ${date} at ${time} ! ${occasion}`
    );
  };

  return (
    <div className="grid grid-cols-[1fr_8fr_1fr] gap-0 text-3xl text-center">
      <div className="col-start-2 text-white">
        <p className="text-6xl text-[#D9D9D9]">Reserve a table</p>
        <p className="">at Little Lemon Restaurant - Chicago</p>
        <div className="flex flex-col gap-1 justify-center content-center text-lg text-center ">
          <div className="px-4 py-2">
            <p>Opening Tuesday to Saturday</p>
            <p>Lunch : 12.00 pm - 3.00 pm</p>
            <p>Dinner : 7.00pm - 11.00 pm</p>
            <p>Closed on Sunday and Monday</p>
          </div>
        </div>
      </div>
      <div className="col-start-2">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="border-b border-black bg-[#D9D9D9]">
              <label>
                <div className="flex flex-row gap-2 justify-start content-center px-4 py-2">
                  <div className="aspect-square w-10">
                    <img
                      src={fork}
                      alt="fork"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  {guests} Guests
                </div>
              </label>
            </div>
            <div className="border-b border-black bg-[#D9D9D9]">
              <label>
                <div className="flex flex-row gap-2 justify-start content-center px-4 py-2">
                  <div className="aspect-square w-10">
                    <img
                      src={calendar}
                      alt="calendar"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  Today
                </div>
              </label>
            </div>
            <div className="bg-[#D9D9D9]">
              <label>
                <div className="flex flex-row gap-2 justify-start content-center px-4 py-2">
                  <div className="aspect-square w-10">
                    <img
                      src={clock}
                      alt="clock"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  Time
                </div>
              </label>
            </div>
            <div className="">
              <div className="">
                <button
                  type="submit"
                  disabled={!date || !time || !guests}
                  className="my-4 px-8 py-2 rounded-xl font-karla font-medium text-2xl bg-primary-yellow text-black disabled:bg-secondary-grey disabled:text-gray-400"
                >
                  Reserve
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
          </fieldset>
        </form>
      </div>
    </div>
  );
}

function Reservation() {
  const [selected, setSelected] = useState("Capstone");
  return (
    <div className="grid grid-cols-[3fr_7fr] grid-rows-1 bg-primary-green font-markazi">
      <div className="col-start-1 flex flex-col">
        <div className="aspect-square overflow-hidden">
          <img
            src={restaurant}
            alt="restaurant"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <form className="space-y-2 text-primary-yellow">
          <fieldset>
            <legend className="font-semibold">
              *** Choose booking form ***
            </legend>
            <div className="flex flex-1 flex-row gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="toggle"
                  value="Capstone"
                  checked={selected === "Capstone"}
                  onChange={(e) => setSelected(e.target.value)}
                  className="accent-primary-green"
                />
                Capstone
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="toggle"
                  value="Original"
                  checked={selected === "Original"}
                  onChange={(e) => setSelected(e.target.value)}
                  className="accent-primary-green"
                />
                Original
              </label>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="col-start-2">
        {selected === "Capstone" && <CapstoneBookingForm />}
        {selected === "Original" && <BookingForm />}
      </div>
    </div>
  );
}

export default Reservation;
