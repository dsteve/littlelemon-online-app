import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import { LocalChicagoDateTime } from "@utils/LocalChicagoDateTime.js";

import useReservation from "@pages/reservation/hooks/useReservation";

describe("React custom hook useReservation", () => {
  // React custom hook useReservation test set.

  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers();
  });

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers();
  });

  // TEST - USERESERVATION
  test.each([
    { // Scenario: current date and time is an opening day before today's lunch opening hours
      today: "2026-02-12T17:30",
      threeMonthsLater: "2026-05-11",
      selectedTime: "12:00:00",
      selectedDate: "2026-02-12",
      expectedAvailableLunchTimes: [
        "12:00",
        "12:15",
        "12:30",
        "12:45",
        "13:00",
        "13:15",
        "13:30",
        "13:45",
      ],
      expectedAvailableDinerTimes: [
        "19:00",
        "19:15",
        "19:30",
        "19:45",
        "20:00",
        "20:15",
        "20:30",
        "21:00",
        "21:30",
        "21:45",
      ],
    },
    { // Scenario: current date and time is an opening day within today's lunch opening hours
      today: "2026-02-12T19:40",
      threeMonthsLater: "2026-05-11",
      selectedTime: "12:45:00",
      selectedDate: "2026-02-12",
      expectedAvailableLunchTimes: [
        "12:45",
        "13:00",
        "13:15",
        "13:30",
        "13:45",
      ],
      expectedAvailableDinerTimes: [
        "19:00",
        "19:15",
        "19:30",
        "19:45",
        "20:00",
        "20:15",
        "20:30",
        "21:00",
        "21:30",
        "21:45",
      ],
    },
    { // Scenario: current date and time is an opening day before today's dinner opening hours
      today: "2026-02-12T23:15",
      threeMonthsLater: "2026-05-11",
      selectedTime: "19:00:00",
      selectedDate: "2026-02-12",
      expectedAvailableLunchTimes: [
      ],
      expectedAvailableDinerTimes: [
        "19:00",
        "19:15",
        "19:30",
        "19:45",
        "20:00",
        "20:15",
        "20:30",
        "21:00",
        "21:30",
        "21:45",
      ],
    },
    { // Scenario: current date and time is an opening day within today's dinner opening hours
      today: "2026-02-13T03:05",
      threeMonthsLater: "2026-05-11",
      selectedTime: "20:00:00",
      selectedDate: "2026-02-12",
      expectedAvailableLunchTimes: [
      ],
      expectedAvailableDinerTimes: [
        "20:15",
        "20:30",
        "21:00",
        "21:30",
        "21:45",
      ],
    },
    { // Scenario: current date and time is a closed day
      today: "2026-02-16T17:30",
      threeMonthsLater: "2026-05-15",
      selectedTime: "12:00:00",
      selectedDate: "2026-02-17",
      expectedAvailableLunchTimes: [
        "12:00",
        "12:15",
        "12:30",
        "12:45",
        "13:00",
        "13:15",
        "13:30",
        "13:45",
      ],
      expectedAvailableDinerTimes: [
        "19:00",
        "19:15",
        "19:30",
        "19:45",
        "20:00",
        "20:15",
        "20:30",
        "21:00",
        "21:30",
        "21:45",
      ],
    },
  ])(
    "Hook useReservation: useReservation $today",
    ({
      today,
      threeMonthsLater,
      selectedTime,
      selectedDate,
      expectedAvailableLunchTimes,
      expectedAvailableDinerTimes,
    }) => {
      
      
      
      
      
      const todayDate = new Date(today);
      vi.setSystemTime(todayDate);

      const todayDateTime = new LocalChicagoDateTime();
      const minLocalBookingDateTime = new LocalChicagoDateTime(); // Today.
      minLocalBookingDateTime.forceSetTime("00:00:00");
      const maxLocalBookingDateTime = new LocalChicagoDateTime();
      maxLocalBookingDateTime.forceSetTime("00:00:00");
      maxLocalBookingDateTime.forceSetDate(threeMonthsLater); // 3 months later than minLocalBookingDateTime.
      const selectedDateTime = new LocalChicagoDateTime();
      selectedDateTime.forceSetTime(selectedTime);
      selectedDateTime.forceSetDate(selectedDate);

      const { result } = renderHook(() => useReservation());

      expect(result.current.todayDateTime).toEqual(todayDateTime);
      expect(result.current.minGuestNb).toEqual(1); // 1
      expect(result.current.maxGuestNb).toEqual(10); // 10
      expect(result.current.selectedGuests).toEqual(2); // 2
      expect(result.current.closedDays).toEqual([
        LocalChicagoDateTime.weekDays["Sunday"],
        LocalChicagoDateTime.weekDays["Monday"],
      ]);
      expect(result.current.minLocalBookingDateTime).toEqual(
        minLocalBookingDateTime,
      );
      expect(result.current.maxLocalBookingDateTime).toEqual(
        maxLocalBookingDateTime,
      );
      expect(result.current.lunchServiceTimeslots).toEqual(
        expectedAvailableLunchTimes,
      );
      expect(result.current.dinerServiceTimeslots).toEqual(
        expectedAvailableDinerTimes,
      );
      expect(result.current.selectedDateTime).toEqual(selectedDateTime);
      expect(result.current.occasionList).toEqual([
        "Birthday",
        "Engagement",
        "Anniversary",
        "Graduation",
      ]);
      expect(result.current.selectedOccasion).toEqual(null);

      expect(typeof result.current.handleGuestsChange).toBe("function");
      expect(typeof result.current.handleDateChange).toBe("function");
      expect(typeof result.current.handleTimeChange).toBe("function");
      expect(typeof result.current.handleOccasionChange).toBe("function");
      expect(typeof result.current.handleSubmit).toBe("function");
    },
  );
});
