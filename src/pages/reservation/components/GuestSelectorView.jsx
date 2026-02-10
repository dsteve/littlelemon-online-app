import "@/index.css";

function GuestSelectorView({ minGuestNb, maxGuestNb, selectedGuest, handleGuestsChange}) {
  const base = "px-4 py-4 mx-9 my-5 aspect-square rounded-2xl text-3xl";
  const focusCell = "bg-primary-yellow text-black";
  const stdCell = "bg-white border border-primary-green text-primary-green";

  return (
    <div className="grid grid-cols-5 justify-center content-center">
      {Array.from(
        { length: maxGuestNb - minGuestNb + 1 },
        (_, i) => i + minGuestNb
      ).map((index) => (
        <button
          type="button"
          onClick={() => handleGuestsChange(index)}
          key={index}
          className={`${base} ${index === selectedGuest ? focusCell : stdCell}`}
        >
          {" "}
          {index}
        </button>
      ))}
    </div>
  );
}

export default GuestSelectorView;
