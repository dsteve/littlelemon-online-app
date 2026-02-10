import "@/index.css";

function OccasionSelectorView({
  occasionList,
  selectedOccasion,
  handleOccasionChange,
}) {
  return (
    <div
      className={`grid grid-cols-${occasionList.length + 1} justify-items-start align-bottom text-2xl text-white`}
    >
      {occasionList.map((item, idx) => (
        <div key={idx} className="px-4 py-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="occasion"
              value={item}
              checked={selectedOccasion === item}
              onChange={(e) => handleOccasionChange(e.target.value)}
              className="accent-primary-yellow"
            />
            {item}
          </label>
        </div>
      ))}
      <button
        type="button"
        onClick={() => handleOccasionChange(null)}
        disabled={selectedOccasion === null}
        className="justify-self-center border border-white rounded-lg m-4 px-2 py-1 hover:cursor-pointer disabled:cursor-not-allowed bg-primary-yellow  disabled:bg-gray-400 font-karla font-normal hover:font-bold text-sm text-center text-black disabled:text-secondary-grey "
      >
        Clear
      </button>
    </div>
  );
}

export default OccasionSelectorView;
