import { useState, useReducer } from "react";

import { LocalChicagoDateTime } from "@utils/LocalChicagoDateTime.js";

function useReservation() {
  /* Reservation state variables */

  /* GUESTS */
  // Number of guests is at least 1 and max 10. Initial selected value is set to 2.
  const minGuestNb = 1;
  const maxGuestNb = 10;
  const defaultGuestNb = 2;
  const [selectedGuests, setSelectedGuests] = useState(defaultGuestNb);
  const handleGuestsChange = (value) => {
    setSelectedGuests(value);
  };

  /* DATE and TIME */
  // The restaurant is closed on Sunday (0) and Monday (1).
  const closedDays = [
    LocalChicagoDateTime.weekDays["Sunday"],
    LocalChicagoDateTime.weekDays["Monday"],
  ];

  const lunchTimes = ["12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45"];
  const dinerTimes = ["19:00", "19:15", "19:30", "19:45", "20:00", "20:15", "20:30", "21:00", "21:30", "21:45"];

  // A reservations is allowed up to 3 months ahead from now.
  const todayDateTime = new LocalChicagoDateTime();
  let minLocalBookingDateTime = new LocalChicagoDateTime();
  minLocalBookingDateTime.forceSetTime("00:00:00");
  let maxLocalBookingDateTime = new LocalChicagoDateTime(
    minLocalBookingDateTime,
  );
  maxLocalBookingDateTime.addMonths(3);
  maxLocalBookingDateTime.forceSetTime("00:00:00");

  // Booking time on the same day is only allowed later than the current time.
  const computeAvailableTimes = (timeTable, dateTime) =>
    timeTable.filter((item) =>
      !dateTime.isToday()
        ? true
        : item >= dateTime.getShortTime()
          ? true
          : false,
    );

  // The Local Chicago date and time state is stored as a LocalChicagoDateTime class instance.
  // By default, the reservation date is set to today or to the next opening day if today is a closing day.

  function selectedDateTimeReducer(selectedDateTime, action) {
    // In React, a state update must produce a new object reference for the component to re-render.
    const newDateTime = new LocalChicagoDateTime(selectedDateTime);
    switch (action.type) {
      case "DATE-change":
        newDateTime.forceSetDate(action.value.getShortDate());
        if (newDateTime.isToday()) {
          const firstAvailableTime = computeAvailableTimes(
            [...lunchTimes, ...dinerTimes],
            todayDateTime,
          )[0];
          newDateTime.forceSetTime(firstAvailableTime);
        }
        break;
      case "TIME-change":
        newDateTime.forceSetTime(action.value.getShortTime());
        break;
      default:
      // Ignore
    }
    return newDateTime;
  }

  const initDateTime = () => {
    const x = new LocalChicagoDateTime();
    while (closedDays.includes(LocalChicagoDateTime.weekDays[x.getWeekday()])) {
      x.addDays(1);
    }

    // The default selected time is set to the first available time slot of the selected date.
    const firstAvailableTime = computeAvailableTimes(
      [...lunchTimes, ...dinerTimes],
      x,
    )[0];
    x.forceSetTime(firstAvailableTime + ":00");

    return x;
  };

  const [selectedDateTime, dispatchDateTime] = useReducer(
    selectedDateTimeReducer,
    initDateTime(),
  );

  const resetTime = (value) => {
    // Warning : this function does not mutate the value parameter.
    const x = new LocalChicagoDateTime(value);
    x.forceSetTime("00:00:00");
    return x;
  };
  const refDateTime =
    selectedDateTime === null || selectedDateTime.isToday()
      ? todayDateTime
      : resetTime(selectedDateTime);
  const availableLunchTimes = computeAvailableTimes(lunchTimes, refDateTime);
  const availableDinerTimes = computeAvailableTimes(dinerTimes, refDateTime);

  const handleDateChange = (value) => {
    // Parameter value is a LocalChicagoDateTime class instance
    if (value instanceof LocalChicagoDateTime) {
      const action = {
        type: "DATE-change",
        value: value,
      };
      dispatchDateTime(action);
    } else {
      throw new TypeError("Only LocalChicagoDateTime object allowed");
    }
  };

  const handleTimeChange = (value) => {
    // Parameter value is a LocalChicagoDateTime class instance
    if (value instanceof LocalChicagoDateTime) {
      const action = {
        type: "TIME-change",
        value: value,
      };
      dispatchDateTime(action);
    } else {
      throw new TypeError("Only LocalChicagoDateTime object allowed");
    }
  };

  /* OCCASIONS */
  const occasionList = ["Birthday", "Engagement", "Anniversary", "Graduation"];
  const [selectedOccasion, setSelectedOccasion] = useState(null);
  const handleOccasionChange = (value) => {
    occasionList.includes(value)
      ? setSelectedOccasion(value)
      : setSelectedOccasion(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Reservation confirmed for ${selectedGuests} guests, on ${selectedDateTime.getShortDate()} at ${selectedDateTime.getLongTime()} ! ${selectedOccasion === null ? "No special occasion" : selectedOccasion}`,
    );
    setSelectedGuests(defaultGuestNb);
    const x = initDateTime();
    const action = { value: x, type: "DATE-change" };
    dispatchDateTime(action);
    dispatchDateTime({ ...action, type: "TIME-change" });
    setSelectedOccasion(null);
  };

  return {
    todayDateTime,
    minGuestNb,
    maxGuestNb,
    selectedGuests,
    handleGuestsChange,
    closedDays,
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
  };
}

export default useReservation;
