import "@/index.css";

import { Datepicker, Views } from "flowbite-react";
// The Flowbite Datepicker component expects a javascript Date object or null for any parameter about dates.

import {LocalChicagoDateTime} from "@utils/LocalChicagoDateTime.js";

function DateSelectorView({ minDate, maxDate, closedDays, selectedDate, handleDateChange }) {
  // customisation of the Flowbite Datepicker component
  // THEME

  const CustomDatepickerTheme = {
    // Input field
    root: {
      input: {
        base: `
        block w-full rounded-xl border border-gray-300
        bg-white p-2 text-lg font-(--font-body) text-gray-900
        focus:border-primary-yellow focus:ring-primary-yellow
        shadow-none
      `,
      },
    },

    // Popup container
    popup: {
      root: {
        base: `
        z-50 bg-primary-green p-4 shadow-none
      `,
      },
    },

    // Days view
    views: {
      days: {
        root: {
          base: "font-karla shadow-none", // removes shadow on days grid
        },
        items: {
          item: {
            base: "rounded-md font-karla text-lg text-center cursor-pointer hover:bg-primary-yellow/20",
            selected: "bg-primary-yellow text-black font-bold",
            today: "border border-primary-green text-white font-semibold",
            disabled: "text-gray-400 cursor-not-allowed opacity-50",
            hover: "hover:bg-primary-yellow/20",
          },
        },
      },
    },
  };

  // ALLOWED DATES
  const filterDateFn = (date, view) => {
    if (view === Views.Days) {
      const day = date.getDay();
      return !closedDays.includes(day);
    }
    return true;
  };

  return (
    <div className="flex flex-col items-center">
    <Datepicker
      inline
      minDate={LocalChicagoDateTime.normalizeLcdtToDate(minDate)}
      maxDate={LocalChicagoDateTime.normalizeLcdtToDate(maxDate)}
      filterDate={filterDateFn}
      weekStart={2}
      showClearButton={false}
      showTodayButton={false}
      autoSelectToday={false} // As Datepicker uses javascript Date objects for dates (UTC internally) and displays them as browser local time, DO NOT USE the today feature.
      value={LocalChicagoDateTime.normalizeLcdtToDate(selectedDate)}
      onChange={(value) => handleDateChange(LocalChicagoDateTime.normalizeDateToLcdt(value))}
      theme={CustomDatepickerTheme}
    />
    </div>
  );
}

export default DateSelectorView;