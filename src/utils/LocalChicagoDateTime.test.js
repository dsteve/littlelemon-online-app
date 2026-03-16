import { afterEach, beforeEach, beforeAll, describe, expect, test, vi} from "vitest";
import { LocalChicagoDateTime } from "@utils/LocalChicagoDateTime.js";

describe("Utility class LocalChicagoDateTime", () => {
  // Beginning of Utility class LocalChicagoDateTime test set.

  beforeAll(() => {
    // Display LocalChicagoDateTime static variables
    function displayClassStaticVariable() {
      console.log("Class LocalChicagoDateTime static attributes - BEGIN");
      console.log("weekDays : ", LocalChicagoDateTime.weekDays);
      console.log("montNames : ", LocalChicagoDateTime.monthNames);
      console.log("Class LocalChicagoDateTime static attributes - END");
      return;
    }
    displayClassStaticVariable();
  });

    beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers();
    const todayDate = new Date(2026, 1, 12, 17, 30); // Thursday Feb 12, 17:30:00 local time zone (CET). Month 1 is Feb.
    vi.setSystemTime(todayDate); // Fake system time set to Thursday Feb 12, 17:30:00.
  });

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers();
  });

  // TEST - CLASS CONSTRUCTOR - NO PARAMETER
  test("Class LocalChicagoDateTime: constructor - no parameter", () => {
    const runResult = (x) => {
      if (!(x instanceof LocalChicagoDateTime))
        throw new TypeError("Only LocalChicagoDateTime object allowed");
      return {
        year: x.getYear(),
        month: x.getMonth(),
        day: x.getDay(),
        weekday: x.getWeekday(),
        hours: x.getHours(),
        minutes: x.getMinutes(),
        seconds: "00", // seconds are ignored.
        utcOffset: x.getUtcOffset(),
        iso8601String: "Iso8601String not tested",
      };
    };

    const expectedResult = () => {
      // Test dates MUST belong to the interval from 01 Jan 2026 00:00:00 to 31 Dec 2026 23:59:59
      // Before each test run, the local system time is set to Thursday Feb 12, 17:30:00.
      const formatter = new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Chicago",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      const now = new Date();
      const parts = formatter.formatToParts(now);
      const v = Object.fromEntries(parts.map((p) => [p.type, p.value]));
      const nowInChicago = new Date(
        `${v.year}-${v.month.padStart(2, "0")}-${v.day.padStart(2, "0")}T${v.hour.padStart(2, "0")}:${v.minute.padStart(2, "0")}:${v.second.padStart(2, "0")}`,
      );
      const dstStartDate = new Date("2026-03-08T02:00:00");
      const dstEndDate = new Date("2026-11-01T02:00:00");
      const utcOffset =
        nowInChicago >= dstStartDate && nowInChicago < dstEndDate
          ? "-05:00"
          : "-06:00";

      return {
        year: v.year,
        month: v.month.padStart(2, "0"),
        day: v.day.padStart(2, "0"),
        weekday: v.weekday,
        hours: v.hour.padStart(2, "0"),
        minutes: v.minute.padStart(2, "0"),
        seconds: "00", // seconds are ignored.
        utcOffset: utcOffset,
        iso8601String: "Iso8601String not tested",
      };
    };

    const run = () => {
      const x = new LocalChicagoDateTime();
      return runResult(x);
    };

    expect(run()).toEqual(expectedResult());
  });

  // TEST - CLASS CONSTRUCTOR - NULL PARAMETER
  test("Class LocalChicagoDateTime: constructor - null parameter", () => {
    const runResult = (x) => {
      if (!(x instanceof LocalChicagoDateTime))
        throw new TypeError("Only LocalChicagoDateTime object allowed");
      return {
        year: x.getYear(),
        month: x.getMonth(),
        day: x.getDay(),
        weekday: x.getWeekday(),
        hours: x.getHours(),
        minutes: x.getMinutes(),
        seconds: "00", // seconds are ignored.
        utcOffset: x.getUtcOffset(),
        iso8601String: "Iso8601String not tested",
      };
    };

    const expectedResult = () => {
      // Test dates MUST belong to the interval from 01 Jan 2026 00:00:00 to 31 Dec 2026 23:59:59
      // Before each test run, the local system time is set to Thursday Feb 12, 17:30:00.
      const formatter = new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Chicago",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      const now = new Date();
      const parts = formatter.formatToParts(now);
      const v = Object.fromEntries(parts.map((p) => [p.type, p.value]));
      const nowInChicago = new Date(
        `${v.year}-${v.month.padStart(2, "0")}-${v.day.padStart(2, "0")}T${v.hour.padStart(2, "0")}:${v.minute.padStart(2, "0")}:${v.second.padStart(2, "0")}`,
      );
      const dstStartDate = new Date("2026-03-08T02:00:00");
      const dstEndDate = new Date("2026-11-01T02:00:00");
      const utcOffset =
        nowInChicago >= dstStartDate && nowInChicago < dstEndDate
          ? "-05:00"
          : "-06:00";

      return {
        year: v.year,
        month: v.month.padStart(2, "0"),
        day: v.day.padStart(2, "0"),
        weekday: v.weekday,
        hours: v.hour.padStart(2, "0"),
        minutes: v.minute.padStart(2, "0"),
        seconds: "00", // seconds are ignored.
        utcOffset: utcOffset,
        iso8601String: "Iso8601String not tested",
      };
    };

    const run = (param) => {
      const x = new LocalChicagoDateTime(param);
      return runResult(x);
    };

    expect(run(null)).toEqual(expectedResult());
  });

  // TEST - CLASS CONSTRUCTOR - ISO 8601 STRING PARAMETER (OUTSIDE DAYLIGHT SAVING TIME)
  test("Class LocalChicagoDateTime: constructor - ISO 6801 string parameter", () => {
    const runResult = (x) => {
      if (!(x instanceof LocalChicagoDateTime))
        throw new TypeError("Only LocalChicagoDateTime object allowed");
      return {
        year: x.getYear(),
        month: x.getMonth(),
        day: x.getDay(),
        weekday: x.getWeekday(),
        hours: x.getHours(),
        minutes: x.getMinutes(),
        seconds: x.getSeconds(),
        utcOffset: x.getUtcOffset(),
        iso8601String: x.getIso8601String(),
      };
    };

    const expectedResult = () => {
      return {
        year: "2026",
        month: "11",
        day: "18",
        weekday: "Wednesday",
        hours: "13",
        minutes: "30",
        seconds: "00",
        utcOffset: "-06:00",
        iso8601String: "2026-11-18T13:30:00-06:00",
      };
    };

    const run = (param) => {
      const x = new LocalChicagoDateTime(param);
      return runResult(x);
    };

    // The test assumes the local timezone is CET or CEST.
    const date = "2026-11-18T19:30:00Z"; // The initial ISO 6801 value is given as UTC (Z)
    expect(run(date)).toEqual(expectedResult());
  });

  // TEST - CLASS CONSTRUCTOR - ISO 8601 STRING PARAMETER (INSIDE DAYLIGHT SAVING TIME)
  test("Class LocalChicagoDateTime: constructor - ISO 6801 string parameter", () => {
    const runResult = (x) => {
      if (!(x instanceof LocalChicagoDateTime))
        throw new TypeError("Only LocalChicagoDateTime object allowed");
      return {
        year: x.getYear(),
        month: x.getMonth(),
        day: x.getDay(),
        weekday: x.getWeekday(),
        hours: x.getHours(),
        minutes: x.getMinutes(),
        seconds: x.getSeconds(),
        utcOffset: x.getUtcOffset(),
        iso8601String: x.getIso8601String(),
      };
    };

    const expectedResult = () => {
      return {
        year: "2026",
        month: "07",
        day: "18",
        weekday: "Saturday",
        hours: "14",
        minutes: "30",
        seconds: "00",
        utcOffset: "-05:00",
        iso8601String: "2026-07-18T14:30:00-05:00",
      };
    };

    const run = (param) => {
      const x = new LocalChicagoDateTime(param);
      return runResult(x);
    };

    // The test assumes the local timezone is CET or CEST.
    const date = "2026-07-18T19:30:00Z"; // The initial ISO 6801 value is given as UTC (Z)
    expect(run(date)).toEqual(expectedResult());
  });

  // TEST - CLASS CONSTRUCTOR - DATE PARAMETER
  test("Class LocalChicagoDateTime: constructor - Date parameter", () => {
    const runResult = (x) => {
      if (!(x instanceof LocalChicagoDateTime))
        throw new TypeError("Only LocalChicagoDateTime object allowed");
      return {
        year: x.getYear(),
        month: x.getMonth(),
        day: x.getDay(),
        weekday: x.getWeekday(),
        hours: x.getHours(),
        minutes: x.getMinutes(),
        seconds: x.getSeconds(),
        utcOffset: x.getUtcOffset(),
        iso8601String: x.getIso8601String(),
      };
    };

    const expectedResult = () => {
      return {
        year: "2026",
        month: "07",
        day: "18",
        weekday: "Saturday",
        hours: "14",
        minutes: "30",
        seconds: "00",
        utcOffset: "-05:00",
        iso8601String: "2026-07-18T14:30:00-05:00",
      };
    };

    const run = (param) => {
      const x = new LocalChicagoDateTime(param);
      return runResult(x);
    };

    // The test assumes the local timezone is CET or CEST.
    const date = new Date("2026-07-18T19:30:00Z"); // The initial ISO 6801 value is given as UTC (Z)
    expect(run(date)).toEqual(expectedResult());
  });

  // TEST - CLASS CONSTRUCTOR - LOCALCHICAGODATETIME PARAMETER
  test("Class LocalChicagoDateTime: constructor - LocalChicagoDateTime parameter", () => {
    const runResult = (x) => {
      if (!(x instanceof LocalChicagoDateTime))
        throw new TypeError("Only LocalChicagoDateTime object allowed");
      return {
        year: x.getYear(),
        month: x.getMonth(),
        day: x.getDay(),
        weekday: x.getWeekday(),
        hours: x.getHours(),
        minutes: x.getMinutes(),
        seconds: x.getSeconds(),
        utcOffset: x.getUtcOffset(),
        iso8601String: x.getIso8601String(),
      };
    };

    const expectedResult = () => {
      return {
        year: "2026",
        month: "07",
        day: "18",
        weekday: "Saturday",
        hours: "14",
        minutes: "30",
        seconds: "00",
        utcOffset: "-05:00",
        iso8601String: "2026-07-18T14:30:00-05:00",
      };
    };

    const run = (param) => {
      const x = new LocalChicagoDateTime(param);
      return runResult(x);
    };

    // The test assumes the local timezone is CET or CEST.
    const input = new LocalChicagoDateTime("2026-07-18T19:30:00Z"); // The initial ISO 6801 value is given as UTC (Z)
    const date = new LocalChicagoDateTime(input);
    expect(run(date)).toEqual(expectedResult());
  });

  // TEST - CLASS METHOD - GETSHORTDATE()
  test("Class LocalChicagoDateTime: class method - getShortDate()", () => {
    const expectedResult = () => {
      return "2026-07-18";
    };

    const run = () => {
      const x = new LocalChicagoDateTime("2026-07-18T19:30:00Z"); // The initial ISO 6801 value is given as UTC (Z)
      return x.getShortDate();
    };

    // The test assumes the local timezone is CET or CEST.
    expect(run()).toEqual(expectedResult());
  });

  // TEST - CLASS METHOD - PRETTYDISPLAYDATE()
  test("Class LocalChicagoDateTime: class method - prettyDisplayDate()", () => {
    const expectedResult = () => {
      return "Sat, July 18, 2026";
    };

    const run = () => {
      const x = new LocalChicagoDateTime("2026-07-18T19:30:00Z"); // The initial ISO 6801 value is given as UTC (Z)
      return x.prettyDisplayDate();
    };

    // The test assumes the local timezone is CET or CEST.
    expect(run()).toEqual(expectedResult());
  });

  // TEST - CLASS METHOD - GETSHORTTIME()
  test("Class LocalChicagoDateTime: class method - getShortTime()", () => {
    const expectedResult = () => {
      return "14:30";
    };

    const run = () => {
      const x = new LocalChicagoDateTime("2026-07-18T19:30:00Z"); // The initial ISO 6801 value is given as UTC (Z)
      return x.getShortTime();
    };

    // The test assumes the local timezone is CET or CEST.
    expect(run()).toEqual(expectedResult());
  });

  // TEST - CLASS METHOD - GETLONGTIME()
  test("Class LocalChicagoDateTime: class method - getLongTime()", () => {
    const expectedResult = () => {
      return "14:30:00-05:00";
    };

    const run = () => {
      const x = new LocalChicagoDateTime("2026-07-18T19:30:00Z"); // The initial ISO 6801 value is given as UTC (Z)
      return x.getLongTime();
    };

    // The test assumes the local timezone is CET or CEST.
    expect(run()).toEqual(expectedResult());
  });

  // TEST - CLASS METHOD - ISTODAY() FALSE
  test("Class LocalChicagoDateTime: class method - isTODAY() false", () => {
    const expectedResult = () => {
      return false;
    };

    const run = () => {
      const x = new LocalChicagoDateTime("2026-07-18T19:30:00Z"); // The initial ISO 6801 value is given as UTC (Z)
      return x.isToday();
    };

    // The test assumes the local timezone is CET or CEST.
    expect(run()).toEqual(expectedResult());
  });

  // TEST - CLASS METHOD - ISTODAY() TRUE
  test("Class LocalChicagoDateTime: class method - isTODAY() true", () => {
    const expectedResult = () => {
      return true;
    };

    const run = () => {
      const x = new LocalChicagoDateTime(new Date()); // Today
      return x.isToday();
    };

    // The test assumes the local timezone is CET or CEST.
    expect(run()).toEqual(expectedResult());
  });

  // TEST - CLASS METHOD - FORCESETDATE()
  test.each([
    {
      input: "2027-01-15",
      expected: {
        year: "2027",
        month: "01",
        day: "15",
        weekday: "Friday",
        hours: "14",
        minutes: "30",
        seconds: "00",
        utcOffset: "-06:00",
        iso8601String: "2027-01-15T14:30:00-06:00",
      }
    },
    {
      input: "2027-03-15",
      expected: {
        year: "2027",
        month: "03",
        day: "15",
        weekday: "Monday",
        hours: "14",
        minutes: "30",
        seconds: "00",
        utcOffset: "-05:00",
        iso8601String: "2027-03-15T14:30:00-05:00",
      }
    },
    {
      input: "2027-09-15",
      expected: {
        year: "2027",
        month: "09",
        day: "15",
        weekday: "Wednesday",
        hours: "14",
        minutes: "30",
        seconds: "00",
        utcOffset: "-05:00",
        iso8601String: "2027-09-15T14:30:00-05:00",
      }
    },
    {
      input: "2027-12-15",
      expected: {
        year: "2027",
        month: "12",
        day: "15",
        weekday: "Wednesday",
        hours: "14",
        minutes: "30",
        seconds: "00",
        utcOffset: "-06:00",
        iso8601String: "2027-12-15T14:30:00-06:00",
      }
    },
  ])("Class LocalChicagoDateTime: class method - forceSetDate($input)", ({input, expected}) => {
    const runResult = (x) => {
      if (!(x instanceof LocalChicagoDateTime))
        throw new TypeError("Only LocalChicagoDateTime object allowed");
      return {
        year: x.getYear(),
        month: x.getMonth(),
        day: x.getDay(),
        weekday: x.getWeekday(),
        hours: x.getHours(),
        minutes: x.getMinutes(),
        seconds: x.getSeconds(),
        utcOffset: x.getUtcOffset(),
        iso8601String: x.getIso8601String(),
      };
    };

    const expectedResult = () => {
      return expected;
    };

    const run = () => {
      const x = new LocalChicagoDateTime("2026-07-18T19:30:00Z"); // The initial ISO 6801 value is given as UTC (Z)
      x.forceSetDate(input); // inputT14:30 in America/Chicago timezone
      return runResult(x);
    };

    // The test assumes the local timezone is CET or CEST.
    expect(run()).toEqual(expectedResult());
  });

  // TEST - CLASS METHOD - FORCESETTIME()
  test("Class LocalChicagoDateTime: class method - forceSetTime()", () => {
    const runResult = (x) => {
      if (!(x instanceof LocalChicagoDateTime))
        throw new TypeError("Only LocalChicagoDateTime object allowed");
      return {
        year: x.getYear(),
        month: x.getMonth(),
        day: x.getDay(),
        weekday: x.getWeekday(),
        hours: x.getHours(),
        minutes: x.getMinutes(),
        seconds: x.getSeconds(),
        utcOffset: x.getUtcOffset(),
        iso8601String: x.getIso8601String(),
      };
    };

    const expectedResult = () => {
      return {
        year: "2026",
        month: "07",
        day: "18",
        weekday: "Saturday",
        hours: "17",
        minutes: "15",
        seconds: "30",
        utcOffset: "-05:00",
        iso8601String: "2026-07-18T17:15:30-05:00",
      };
    };

    const run = () => {
      const x = new LocalChicagoDateTime("2026-07-18T19:30:00Z"); // The initial ISO 6801 value is given as UTC (Z)
      x.forceSetTime("17:15:30");
      return runResult(x);
    };

    // The test assumes the local timezone is CET or CEST.
    expect(run()).toEqual(expectedResult());
  });

  // TEST - CLASS METHOD - ADDDAYS()
  test("Class LocalChicagoDateTime: class method - addDays()", () => {
    const runResult = (x) => {
      if (!(x instanceof LocalChicagoDateTime))
        throw new TypeError("Only LocalChicagoDateTime object allowed");
      return {
        year: x.getYear(),
        month: x.getMonth(),
        day: x.getDay(),
        weekday: x.getWeekday(),
        hours: x.getHours(),
        minutes: x.getMinutes(),
        seconds: x.getSeconds(),
        utcOffset: x.getUtcOffset(),
        iso8601String: x.getIso8601String(),
      };
    };

    const expectedResult = () => {
      return {
        year: "2026",
        month: "09",
        day: "01",
        weekday: "Tuesday",
        hours: "14",
        minutes: "30",
        seconds: "00",
        utcOffset: "-05:00",
        iso8601String: "2026-09-01T14:30:00-05:00",
      };
    };

    const run = () => {
      const x = new LocalChicagoDateTime("2026-07-18T19:30:00Z"); // The initial ISO 6801 value is given as UTC (Z)
      x.addDays(45);
      return runResult(x);
    };

    // The test assumes the local timezone is CET or CEST.
    expect(run()).toEqual(expectedResult());
  });

  // TEST - CLASS METHOD - ADDMONTHS()
  test("Class LocalChicagoDateTime: class method - addMonths()", () => {
    const runResult = (x) => {
      if (!(x instanceof LocalChicagoDateTime))
        throw new TypeError("Only LocalChicagoDateTime object allowed");
      return {
        year: x.getYear(),
        month: x.getMonth(),
        day: x.getDay(),
        weekday: x.getWeekday(),
        hours: x.getHours(),
        minutes: x.getMinutes(),
        seconds: x.getSeconds(),
        utcOffset: x.getUtcOffset(),
        iso8601String: x.getIso8601String(),
      };
    };

    const expectedResult = () => {
      return {
        year: "2026",
        month: "11",
        day: "18",
        weekday: "Wednesday",
        hours: "14",
        minutes: "30",
        seconds: "00",
        utcOffset: "-06:00",
        iso8601String: "2026-11-18T14:30:00-06:00",
      };
    };

    const run = () => {
      const x = new LocalChicagoDateTime("2026-07-18T19:30:00Z"); // The initial ISO 6801 value is given as UTC (Z)
      x.addMonths(4);
      return runResult(x);
    };

    // The test assumes the local timezone is CET or CEST.
    expect(run()).toEqual(expectedResult());
  });

  // TEST - CLASS STATIC METHOD - NORMALIZEDATETOLCDT()
  test("Class LocalChicagoDateTime: static method - normalizeDateToLcdt()", () => {
    const runResult = (x) => {
      if (!(x instanceof LocalChicagoDateTime))
        throw new TypeError("Only LocalChicagoDateTime object allowed");
      return {
        year: x.getYear(),
        month: x.getMonth(),
        day: x.getDay(),
        weekday: x.getWeekday(),
        hours: x.getHours(),
        minutes: x.getMinutes(),
        seconds: x.getSeconds(),
        utcOffset: x.getUtcOffset(),
        iso8601String: x.getIso8601String(),
      };
    };

    const expectedResult = () => {
      return {
        year: "2026",
        month: "07",
        day: "18",
        weekday: "Saturday",
        hours: "21",
        minutes: "30",
        seconds: "00",
        utcOffset: "-05:00",
        iso8601String: "2026-07-18T21:30:00-05:00",
      };
    };

    const run = () => {
      const input = new Date("2026-07-18T19:30:00Z"); // The initial ISO 6801 value is given as UTC (Z) (equiv to 2026-07-18T21:30:00 CEST)
      const x = LocalChicagoDateTime.normalizeDateToLcdt(input);
      return runResult(x);
    };

    // The test assumes the local timezone is CET or CEST.
    expect(run()).toEqual(expectedResult());
  });

  // TEST - CLASS STATIC METHOD - NORMALIZELCDTTODATE()
  test("Class LocalChicagoDateTime: static method - normalizeLcdtToDate()", () => {
    const runResult = (x) => {
      if (!(x instanceof Date)) throw new TypeError("Only Date object allowed");
      return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, "0")}-${String(x.getDate()).padStart(2, "0")}T${x.getHours()}:${x.getMinutes()}`;
    };

    const expectedResult = () => {
      return "2026-07-18T14:30";
    };

    const run = () => {
      const input = new LocalChicagoDateTime("2026-07-18T19:30:00Z"); // The initial ISO 6801 value is given as UTC (Z)
      const x = LocalChicagoDateTime.normalizeLcdtToDate(input);
      return runResult(x);
    };
    // The test assumes the local timezone is CET or CEST.
    expect(run()).toEqual(expectedResult());
  });

  // TEST - CLASS STATIC METHOD - NORMALIZELCDTTODATEINPUT()
  test("Class LocalChicagoDateTime: static method - normalizeLcdtToDateInput()", () => {
    const expectedResult = () => {
      return "2026-07-18";
    };

    const run = () => {
      const input = new LocalChicagoDateTime("2026-07-18T19:30:00Z"); // The initial ISO 6801 value is given as UTC (Z)
      const x = LocalChicagoDateTime.normalizeLcdtToDateInput(input);
      return x;
    };
    // The test assumes the local timezone is CET or CEST.
    expect(run()).toEqual(expectedResult());
  });

  // TEST - CLASS STATIC METHOD - NORMALIZEDATEINPUTTOLCDT()
  test("Class LocalChicagoDateTime: static method - normalizeDateInputToLcdt()", () => {
    const runResult = (x) => {
      if (!(x instanceof LocalChicagoDateTime))
        throw new TypeError("Only LocalChicagoDateTime object allowed");
      return {
        year: x.getYear(),
        month: x.getMonth(),
        day: x.getDay(),
        weekday: x.getWeekday(),
        hours: x.getHours(),
        minutes: x.getMinutes(),
        seconds: x.getSeconds(),
        utcOffset: x.getUtcOffset(),
        iso8601String: x.getIso8601String(),
      };
    };

    const expectedResult = () => {
      return {
        year: "2026",
        month: "07",
        day: "18",
        weekday: "Saturday",
        hours: "00",
        minutes: "00",
        seconds: "00",
        utcOffset: "-05:00",
        iso8601String: "2026-07-18T00:00:00-05:00",
      };
    };

    const run = () => {
      const input = "2026-07-18";
      const x = LocalChicagoDateTime.normalizeDateInputToLcdt(input);
      return runResult(x);
    };

    // The test assumes the local timezone is CET or CEST.
    expect(run()).toEqual(expectedResult());
  });

  // TEST - CLASS STATIC METHOD - NORMALIZETIMEINPUTTOLCDT()
  test("Class LocalChicagoDateTime: static method - normalizeTimeInputToLcdt()", () => {
    const runResult = (x) => {
      if (!(x instanceof LocalChicagoDateTime))
        throw new TypeError("Only LocalChicagoDateTime object allowed");
      return {
        hours: x.getHours(),
        minutes: x.getMinutes(),
      };
    };

    const expectedResult = () => {
      return {
        hours: "14",
        minutes: "30",
      };
    };

    const run = () => {
      const input = "14:30";
      const x = LocalChicagoDateTime.normalizeTimeInputToLcdt(input);
      return runResult(x);
    };

    // The test assumes the local timezone is CET or CEST.
    expect(run()).toEqual(expectedResult());
  });

  // TEST - CLASS STATIC METHOD - NORMALIZELCDTTOTIMEINPUT()
  test("Class LocalChicagoDateTime: static method - normalizeLcdtToTimeInput()", () => {
    const expectedResult = () => {
      return "14:30";
    };

    const run = () => {
      const input = new LocalChicagoDateTime("2026-07-18T19:30:00Z"); // 19:30 UTC = 14:30 America/Chicago local time.
      const x = LocalChicagoDateTime.normalizeLcdtToTimeInput(input);
      return x;
    };

    // The test assumes the local timezone is CET or CEST.
    expect(run()).toEqual(expectedResult());
  });
}); // End of Utility class LocalChicagoDateTime test set.
