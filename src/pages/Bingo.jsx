function Bingo({ bingoState, setBingoState, bingo }) {
  const hasBingo = bingoState && bingoState.length > 0;

  function generateBingo() {
    setBingoState(() => {
      const shuffled = [...bingo].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 8);
    });
  }

  function resetBingo() {
    localStorage.removeItem("bingoItems");
    setBingoState(null);
  }

  return (
    <div className="flex flex-col px-[1rem]">
      {!hasBingo && (
        <div className="flex flex-col gap-4 mt-6">
          <button onClick={generateBingo} className="bg-pink text-value text-white font-semibold uppercase px-4 pt-3 pb-4 rounded-full w-full text-center my-auto leading-[95%]">
            Generate 8 Bingo terms
          </button>
          <p className="text-black opacity-40 text-value text-center">First to complete all wins!</p>
        </div>
      )}
      <div className="py-6 bg-off-white flex flex-col gap-4">
        {hasBingo &&
          bingoState.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                const updated = [...bingoState];
                updated[index].clicked = !updated[index].clicked;
                setBingoState(updated);
              }}
              className={`tag text-title text-center py-4 px-2 cursor-pointer ${item.clicked ? "active" : ""}`}>
              <p>{item.action}</p>
            </div>
          ))}
        {hasBingo && (
          <button
            type="button"
            onClick={resetBingo}
            className="bg-pink text-value text-white font-semibold uppercase px-4 pt-3 pb-4 rounded-full w-full text-center my-auto leading-[95%] mt-2"
          >
            Reset Bingo
          </button>
        )}
      </div>
    </div>
  );
}

export default Bingo;
