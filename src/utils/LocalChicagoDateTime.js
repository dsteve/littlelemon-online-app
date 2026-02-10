export class LocalChicagoDateTime {
  #year; // 4-digits value as string
  #month; // 2-digit value as string
  #day; // 2-digit value as string
  #weekday; // week day long name as string
  #hours; // 2-digit value as string
  #minutes; // 2-digit value as string
  #seconds; // 2-digit value as string
  #utcOffset; // Time zone offset relative to UTC, formatted as ±HH:MM (alue is -05:00 (CDT) or -06:00 (CST))
  #iso8601String; // ISO 8601 date and time with timezone or utc symbol as string
  #now; // YYYY-MM-DD value as string

  static #chicagoTimeZone = "America/Chicago";

  // Static class member weekDays encodes each day of the week to an integer value.
  static weekDays = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  static #weekDayNames = Object.keys(LocalChicagoDateTime.weekDays);

  // Static class member `monthNames` maps numeric month values to their corresponding names.
  // Placeholder at index 0 to align array indexes with month numbers (1–12).
  static monthNames = [
    "Month names",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "September",
    "October",
    "November",
    "December",
  ];

  // Static date and time formatter method for timezone as parameter
  static #dateTimeFormatter = (timezone) =>
    new Intl.DateTimeFormat("en-CA", {
      timeZone: timezone,
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

  static #toIso8601WithOffset(param = null, timeZone) {
    // `param` supports the same types as `formatToParts` and a LocalChicagoDateTime instance; `null` means no date.
    let date = null;
    if (param === null)
      date = new Date(); // Equiv to now.
    else if (typeof param === "string") date = new Date(param);
    else if (param instanceof Date) date = param;
    else if (param instanceof LocalChicagoDateTime)
      date = new Date(param.getIso8601String());

    const parts =
      LocalChicagoDateTime.#dateTimeFormatter(timeZone).formatToParts(date);
    const v = Object.fromEntries(parts.map((p) => [p.type, p.value]));
    const y = Number(v.year);
    const mo = Number(v.month) - 1; // Date.UTC expects 0–11.
    const d = Number(v.day);
    const h = Number(v.hour);
    const m = Number(v.minute);
    const s = Number(v.second);

    const asIfUTC = Date.UTC(y, mo, d, h, m, s); // UTC timestamp (milliseconds since the Unix epoch).
    const dateAsUTC = date.getTime(); // UTC timestamp (Milliseconds since the Unix epoch).
    const offsetMinutes = Math.round((dateAsUTC - asIfUTC) / 60000);
    const sign = offsetMinutes <= 0 ? "+" : "-";
    const abs = Math.abs(offsetMinutes);
    const hh = String(Math.floor(abs / 60)).padStart(2, "0");
    const mm = String(abs % 60).padStart(2, "0");

    return {
      year: v.year,
      month: v.month.padStart(2, "0"),
      day: v.day.padStart(2, "0"),
      weekday: v.weekday,
      hours: v.hour.padStart(2, "0"),
      minutes: v.minute.padStart(2, "0"),
      seconds: v.second.padStart(2, "0"),
      utcOffset: `${sign}${hh}:${mm}`,
      iso8601String: `${v.year}-${v.month}-${v.day}T${v.hour}:${v.minute}:${v.second}${sign}${hh}:${mm}`,
    };
  }

  // Creates a LocalChicagoDateTime from now, a Date object, or an ISO 8601 string.
  constructor(value = new Date()) {
    const {
      year,
      month,
      day,
      weekday,
      hours,
      minutes,
      seconds,
      utcOffset,
      iso8601String,
    } = LocalChicagoDateTime.#toIso8601WithOffset(
      value,
      LocalChicagoDateTime.#chicagoTimeZone,
    );
    this.#year = year;
    this.#month = month;
    this.#day = day;
    this.#weekday = weekday;
    this.#hours = hours;
    this.#minutes = minutes;
    this.#seconds = seconds;
    this.#utcOffset = utcOffset;
    this.#iso8601String = iso8601String;

    // ISO 8601 string of now
    const { iso8601String: x } = LocalChicagoDateTime.#toIso8601WithOffset(
      new Date(),
      LocalChicagoDateTime.#chicagoTimeZone,
    );
    this.#now = x.slice(0, 10);
  }

  getYear() {
    return this.#year;
  }

  getMonth() {
    return this.#month;
  }

  getMonthName() {
    return LocalChicagoDateTime.monthNames[Number(this.#month)];
  }

  getDay() {
    return this.#day;
  }

  getWeekday() {
    return this.#weekday;
  }

  getHours() {
    return this.#hours;
  }

  getMinutes() {
    return this.#minutes;
  }

  getSeconds() {
    return this.#seconds;
  }

  getUtcOffset() {
    return this.#utcOffset;
  }

  getIso8601String() {
    return this.#iso8601String;
  }

  getShortDate() {
    return this.#iso8601String.slice(0, 10); // YYYY-MM-DD
  }

  prettyDisplayDate() {
    return `${this.#weekday} ${this.getMonthName()} ${this.#day}, ${this.#year}`;
  }

  getShortTime() {
    return this.#iso8601String.split("T")[1].slice(0, 5); // HH:MM
  }

  getLongTime() {
    return this.#iso8601String.slice(11); // HH:MM:SS[+,-]HH:MM
  }

  isToday() {
    // Comparison of YYYY-MM-DD only.
    return this.#iso8601String.slice(0, 10) === this.#now;
  }

  forceSetDate(date) {
    // Patches YYYY-MM-DD
    let parts = date.split("-", 3);
    if (parts[0] !== undefined) this.#year = parts[0];
    if (parts[1] !== undefined) this.#month = parts[1];
    if (parts[2] !== undefined) this.#day = parts[2];
    const tmpDate = new Date(`${this.#year}-${this.#month}-${this.#day}`);
    this.#weekday = LocalChicagoDateTime.#weekDayNames[tmpDate.getDay()];
    this.#iso8601String = `${this.#year}-${this.#month}-${this.#day}T${this.#hours}:${this.#minutes}:${this.#seconds}${this.#utcOffset}`;
  }

  forceSetTime(time) {
    // Patches HH:MM:SS
    let parts = time.split(":", 3);
    if (parts[0] !== undefined) this.#hours = parts[0];
    if (parts[1] !== undefined) this.#minutes = parts[1];
    if (parts[2] !== undefined) this.#seconds = parts[2];
    this.#iso8601String = `${this.#year}-${this.#month}-${this.#day}T${this.#hours}:${this.#minutes}:${this.#seconds}${this.#utcOffset}`;
  }

  addDays(number) {
    const date = new Date(this.#year, this.#month, this.#day);
    date.setDate(date.getDate() + number);
    this.forceSetDate(
      `${date.getYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`,
    );
  }

  addMonths(number) {
    const date = new Date(`${this.#year}-${this.#month}-${this.#day}`);
    date.setMonth(date.getMonth() + number);
    this.forceSetDate(
      `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`,
    );
  }

  // UTILITIES FOR DATEPICKER COMPONENTS USING BROWSER LOCAL TIMEZONE DATES AND TIMES, TO DISPLAY LOCAL CHICAGO DATES AND TIMES.

  // Transform a javascript Date object (browser local timezone) into a LocalChicagoDateTime object (America/Chicago timezone)
  // with the same values for year, month, days, hours, minutes, seconds.
  static normalizeDateToLcdt(date) {
    if (!(date instanceof Date)) {
      throw new TypeError("Only Date object allowed");
    }

    function utcOffsetToMinutes(utcOffset) {
      const [hours, minutes] = utcOffset.split(":");
      return Number(hours) * 60 + Number(minutes);
    }

    function substractMinutes(date, minutes) {
      // WARNING: Function subtractMinutes() does not mutate the date parameter
      const newDate = new Date(date);
      newDate.setMinutes(date.getMinutes() - minutes);
      return newDate;
    }

    // Adjust the input date by the difference between the Chicago UTC offset
    // and the browser’s local UTC offset (substraction), then convert it to a LocalChicagoDateTime.
    const browserTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const { utcOffset: browserUTCOffset } =
      LocalChicagoDateTime.#toIso8601WithOffset(undefined, browserTimeZone);
    const { utcOffset: chicagoUTCOffset } =
      LocalChicagoDateTime.#toIso8601WithOffset(
        undefined,
        LocalChicagoDateTime.#chicagoTimeZone,
      );
    const offsetDeltaMinutes =
      utcOffsetToMinutes(chicagoUTCOffset) -
      utcOffsetToMinutes(browserUTCOffset);
    const newDate = substractMinutes(date, offsetDeltaMinutes);

    return new LocalChicagoDateTime(newDate);
  }

  // Transform a LocalChicagoDatTime object (America/Chicago timezone) into a javascript Date object (browser local timezone)
  // with the same values for year, month, days, hours, minutes, seconds.
  static normalizeLcdtToDate(localChicagoDateTime) {
    if (!(localChicagoDateTime instanceof LocalChicagoDateTime)) {
      throw new TypeError("Only LocalChicagoDateTime object allowed");
    }

    const date = new Date(localChicagoDateTime.getIso8601String().slice(0, 10));
    return date;
  }

  // Transform a LocalChicagoDateTime object (America/Chicago timezone) into a YYYY-MM-DD string
  static normalizeLcdtToDateInput(localChicagoDateTime) {
    if (!(localChicagoDateTime instanceof LocalChicagoDateTime)) {
      throw new TypeError("Only LocalChicagoDateTime object allowed");
    }

    return localChicagoDateTime.getShortDate();
  }

  // Transform a YYYY-MM-DD string into a LocalChicagoDateTime object (America/Chicago timezone)
  static normalizeDateInputToLcdt(input) {
    if (typeof input !== "string") {
      throw new TypeError("Only YYYY-MM-DD string is allowed");
    }
    const date = new LocalChicagoDateTime();
    date.forceSetDate(input);
    return date;
  }

  // Transform a HH:MM time into a LocalChicagoDatTime object (America/Chicago timezone) into a javascript Date object (browser local timezone)
  // with the same values for hours, minutes, seconds.
  static normalizeTimeInputToLcdt(input) {
    if (typeof input !== "string") {
      throw new TypeError("Only HH:MM string is allowed");
    }
    const date = new LocalChicagoDateTime();
    date.forceSetTime(input);
    return date;
  }

  // Transform a a LocalChicagoDatTime object (America/Chicago timezone) into a HH:MM time.
  static normalizeLcdtToTimeInput(localChicagoDateTime) {
    if (!(localChicagoDateTime instanceof LocalChicagoDateTime)) {
      throw new TypeError("Only LocalChicagoDateTime object allowed");
    }
    return localChicagoDateTime.getShortTime();
  }
}
