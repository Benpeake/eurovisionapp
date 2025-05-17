function ScoreButtons({ max = 10, currentValue, onChange }) {
  return (
    <div className="flex items-center gap-2 justify-between">
      {Array.from({ length: max }, (_, i) => i + 1).map((value) => (
        <button key={value} onClick={() => onChange(value)} className={`tag text-value !rounded-full size-7 shrink-0 flex justify-center items-center hover:cursor-pointer ${value === currentValue ? "active" : ""}`}>
          {value}
        </button>
      ))}
    </div>
  );
}

export default ScoreButtons;
