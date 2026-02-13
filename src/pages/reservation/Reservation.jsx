import "@/index.css";
import restaurant from "@assets/restaurant-login.jpg";

import useReservation from "./hooks/useReservation";

import CapstoneBookingForm from "./components/CapstoneBookingFormView";
import BookingForm from "./components/BookingFormView";
import bookingFormEnum from "../../utils/bookingFormEnum";

function Reservation(props) {
  const {
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
  } = useReservation();

  return (
    <div className="grid grid-cols-[3fr_7fr] grid-rows-1 bg-white font-markazi">
      <div className="col-start-1 flex flex-col">
        <div className="aspect-square overflow-hidden">
          <img
            src={restaurant}
            alt="restaurant"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="bg-secondary-brown font-karla">
          <p className="font-medium text-xl text-center text-primary-yellow">
            {todayDateTime.getWeekday().slice(0,3)}, {todayDateTime.getMonthName()}{" "}
            {todayDateTime.getDay()}, {todayDateTime.getYear()} at{" "}
            {todayDateTime.getShortTime()} in Chicago.
          </p>
        </div>
        <div className="flex flex-col gap-1 justify-center content-center text-lg text-center text-primary-green ">
          <div className="px-4 py-2">
            <p>Opening Tuesday to Saturday</p>
            <p>Lunch : 12.00 pm - 3.00 pm | Dinner : 7.00pm - 11.00 pm</p>
            <p>Closed on Sunday and Monday</p>
          </div>
        </div>
      </div>
      <div className="col-start-2">
        <div className="grid grid-cols-[1fr_8fr_1fr] gap-0">
          <div className="col-start-2 text-3xl text-primary-green text-center">
            <p className="text-6xl">Reserve a table</p>
            <p>at Little Lemon Restaurant - Chicago</p>
          </div>
          <div className="col-start-2 p-8">
            {props.selectedForm == bookingFormEnum.CAPSTONE && (
              <CapstoneBookingForm
                minGuestNb={minGuestNb}
                maxGuestNb={maxGuestNb}
                selectedGuests={selectedGuests}
                handleGuestsChange={handleGuestsChange}
                minLocalBookingDateTime={minLocalBookingDateTime}
                maxLocalBookingDateTime={maxLocalBookingDateTime}
                availableLunchTimes={availableLunchTimes}
                availableDinerTimes={availableDinerTimes}
                selectedDateTime={selectedDateTime}
                handleDateChange={handleDateChange}
                handleTimeChange={handleTimeChange}
                occasionList={occasionList}
                selectedOccasion={selectedOccasion}
                handleOccasionChange={handleOccasionChange}
                handleSubmit={handleSubmit}
              />
            )}
            {props.selectedForm == bookingFormEnum.ORIGINAL && (
              <BookingForm
                minGuestNb={minGuestNb}
                maxGuestNb={maxGuestNb}
                selectedGuests={selectedGuests}
                handleGuestsChange={handleGuestsChange}
                closedDays={closedDays}
                minLocalBookingDateTime={minLocalBookingDateTime}
                maxLocalBookingDateTime={maxLocalBookingDateTime}
                availableLunchTimes={availableLunchTimes}
                availableDinerTimes={availableDinerTimes}
                selectedDateTime={selectedDateTime}
                handleDateChange={handleDateChange}
                handleTimeChange={handleTimeChange}
                occasionList={occasionList}
                selectedOccasion={selectedOccasion}
                handleOccasionChange={handleOccasionChange}
                handleSubmit={handleSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reservation;
