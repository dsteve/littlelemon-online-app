import { expect, test } from "vitest";
import { renderHook} from "@testing-library/react";
import { LocalChicagoDateTime } from "@utils/LocalChicagoDateTime.js";

import useReservation from "@pages/reservation/hooks/useReservation";

// TEST - USERESERVATION
test("Hook useReservation: useReservation", () => {
  const runResult = (x) => {
    const todayDateTime = x.todayDateTime;
    const minGuestNb = x.minGuestNb;
    const maxGuestNb = x.maxGuestNb;
    const selectedGuests = x.selectedGuests;
    const handleGuestsChange = x.handleGuestsChange;
    const closedDays = x.closedDays;
    const minLocalBookingDateTime = x.minLocalBookingDateTime;
    const maxLocalBookingDateTime = maxLocalBookingDateTime;
    const availableLunchTimes = x.availableLunchTimes;
    const availableDinerTimes = x.availableDinerTimes;
    const selectedDateTime = x.selectedDateTime;
    const handleDateChange = x.handleDateChange;
    const handleTimeChange = x.handleTimeChange;
    const occasionList = x.occasionList;
    const selectedOccasion = x.selectedOccasion;
    const handleOccasionChange = x.handleOccasionChange;
    const handleSubmit = x.handleSubmit;

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
  };

  const expectedResult = () => {
    const todayDateTime = new LocalChicagoDateTime();
    const minLocalBookingDateTime = new LocalChicagoDateTime();
    const maxLocalBookingDateTime = new LocalChicagoDateTime();
    const availableLunchTimes = [
      "12:00",
      "12:30",
      "13:00",
      "13:30",
      "14:00",
      "14:30",
    ];
    const availableDinerTimes = [
      "19:00",
      "19:30",
      "20:00",
      "20:30",
      "21:00",
      "21:30",
      "22:00",
    ];
    const selectedDateTime = new LocalChicagoDateTime();

    return {
      todayDateTime: todayDateTime,
      minGuestNb: 1,
      maxGuestNb: 10,
      selectedGuests: 2,
      handleGuestsChange: null,
      closedDays: [
        LocalChicagoDateTime.weekDays["Sunday"],
        LocalChicagoDateTime.weekDays["Monday"],
      ],
      minLocalBookingDateTime: minLocalBookingDateTime,
      maxLocalBookingDateTime: maxLocalBookingDateTime,
      availableLunchTimes: availableLunchTimes,
      availableDinerTimes: availableDinerTimes,
      selectedDateTime: selectedDateTime,
      handleDateChange: null,
      handleTimeChange: null,
      occasionList: ["Birthday", "Engagement", "Anniversary", "Graduation"],
      selectedOccasion: null,
      handleOccasionChange: null,
      handleSubmit: null,
    };
  };

  const run = () => {
    return runResult(result);
  };

  const { result } = renderHook(() => useReservation());
  expect(result).toEqual(expectedResult());
});
